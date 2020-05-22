import React, { useState, useEffect } from "react";
import Distribution from "./Surveys/DistributionSurvey";
import Weight from "./Surveys/WeightSurvey";
import Buddy from "./Surveys/BuddyForm";
import ProfilePic from "./Surveys/ProfilePic";
import BuddyPic from "../../assets/media/people/oldman.jpg";

import { useHistory, Redirect } from "react-router-dom";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";

import {
  withinSpecificYear,
  shouldRedirect,
  withinMonth,
} from "../../actions/actions";

let endpoint = process.env.REACT_APP_API_LINK;

const db = firebase.firestore();
const SignupSurveyPath = (props) => {
  // const history = useHistory();
  const [state, dispatch] = useStore();
  var storage = firebase.storage();
  var storageRef = storage.ref();

  const fetchForm = (uid) => {
    db.collection("users")
      .doc(uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          dispatch("FORM_SETTINGS", doc.data());
        } else {
          // doc.data() will be undefined in this case
          // console.log("No such document!");
        }
      });
  };

  async function fetchImageHelper(uid) {
    const userRef = storageRef.child(uid + ".jpg");
    const answer = await userRef
      .getDownloadURL()
      .then(function (url) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function (event) {
          var blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        // console.log("mafe it!");
        return url;
      })
      .catch(function (error) {
        // console.log("image does not exist!");
        // console.log(error);
        return BuddyPic;
      });
    return answer;
  }

  async function fetchFriends(uid) {
    const namecontent = {
      uid: uid,
    };
    // "http://localhost:5000/friends"
    fetch(endpoint + "/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(namecontent),
    })
      .then((res) => res.json())
      .then(async (res) => {
        // console.log(res);
        // var realdata = res["data"]
        // const ans = getImageMeta(res);
        // console.log(res["data"].length);
        for (var i = 0; i < res["data"].length; i++) {
          res["data"][i]["image"] = await fetchImageHelper(
            res["data"][i]["uid"]
          );
          // console.log("for llop lets go");
        }
        return res;
      })
      .then((res) => {
        // console.log("dispatch new res?");
        dispatch("SAVE_FRIENDS", res["data"]);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log("backend has not updated to contain new user");
        //console.log(errorCode);
        //console.log(errorMessage);
      });
  }

  const fetchWeight = (uid) => {};

  async function fetchAttendance(uid) {
    var data = [];
    const dataToReturn = await db
      .collection("users")
      .doc(uid)
      .collection("attendance")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const x = doc.data();
          if (withinSpecificYear(x.date)) {
            const y = { day: x.date, value: 1 };
            data.push(y);
          }
          //console.log(doc.id, " => ", doc.data());
        });
        return data;
      })
      .then((mydata) => {
        return mydata;
      })
      .catch(function (error) {});
    dispatch("SAVE_ATTENDANCE", dataToReturn);
  }

  async function fetchDistribution(uid) {
    const colors = [
      "hsl(176, 70%, 50%)",
      "hsl(207, 70%, 50%)",
      "hsl(247, 70%, 50%)",
      "hsl(38, 70%, 50%)",
      "hsl(199, 70%, 50%)",
      "hsl(199, 70%, 50%)",
      "hsl(199, 70%, 50%)",
      "hsl(199, 70%, 50%)",
    ];

    const piedata = (data_pie) => {
      var counter = 0;
      var masterList = [];
      for (let key in data_pie) {
        const x = {};
        x.id = key;
        x.label = key;
        x.value = data_pie[key];
        x.color = colors[counter];
        counter += 1;
        masterList.push(x);
      }
      //console.log(masterList);
      return masterList;
    };

    var data = {};
    const dataToReturn = await db
      .collection("users")
      .doc(uid)
      .collection("ratio")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const x = doc.data();
          if (withinMonth(x.date)) {
            for (let key in x) {
              if (x[key] == 1) {
                if (key in data) {
                  data[key] += 1;
                } else {
                  data[key] = 1;
                }
              }
            }
          }
          //console.log(doc.id, " => ", doc.data());
        });
        return data;
      })
      .then((mydata) => {
        return piedata(mydata);
      })
      .then((finalo) => {
        return finalo;
      })
      .catch(function (error) {
        //console.log("Error getting documents: ", error);
      });
    dispatch("SAVE_DISTRIBUTION", dataToReturn);
  }

  const [page, setPage] = useState(0);
  const [complete, setComplete] = useState(false);

  const style = {
    backgroundColor: "#FCD8F4",
    height: "100vh",
    color: "#137cbd",
  };

  var user = firebase.auth().currentUser;
  var uid_value = "error";

  if (user != null) {
    uid_value = user.uid;
    //console.log(uid_value);
  }

  const RenderPage = () => {
    if (props.surveytype === "login") {
      switch (page) {
        case 0:
          return (
            <div style={style}>
              <Weight
                color="#137cbd"
                increment={() => setPage(page + 1)}
              ></Weight>
            </div>
          );
        case 1:
          return (
            <div style={style}>
              <Distribution
                bgcolor="#FCD8F4"
                color="#137cbd"
                increment={() => setPage(page + 1)}
              ></Distribution>
            </div>
          );
      }
    } else {
      switch (page) {
        case 0:
          return (
            <div>
              <ProfilePic increment={() => setPage(page + 1)}></ProfilePic>
            </div>
          );
        case 1:
          return (
            <div style={style}>
              <Buddy
                color="#137cbd"
                increment={() => setPage(page + 1)}
              ></Buddy>
            </div>
          );
        case 2:
          return (
            <div style={style}>
              <Weight
                color="#137cbd"
                increment={() => setPage(page + 1)}
              ></Weight>
            </div>
          );
        case 3:
          return (
            <div style={style}>
              <Distribution
                bgcolor="#FCD8F4"
                color="#137cbd"
                increment={() => setPage(page + 1)}
              ></Distribution>
            </div>
          );
      }
    }
  };

  if (page >= props.counter) {
    fetchForm(uid_value);
    fetchAttendance(uid_value);
    fetchDistribution(uid_value);
    fetchFriends(uid_value);
    // console.log("redirect about to happen");
    return <Redirect to="/" />;
  }

  if (shouldRedirect()) {
    return <Redirect to="/" />;
  }

  return <div>{<RenderPage />}</div>;
};

export default SignupSurveyPath;
