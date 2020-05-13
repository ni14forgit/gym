import React, { useState } from "react";
import Distribution from "./Surveys/DistributionSurvey";
import Weight from "./Surveys/WeightSurvey";
import Buddy from "./Surveys/BuddyForm";
import { useHistory, Redirect } from "react-router-dom";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
const db = firebase.firestore();
const SignupSurveyPath = (props) => {
  // const history = useHistory();
  const [state, dispatch] = useStore();

  const getfriends = (uid) => {
    const namecontent = {
      uid: uid,
    };

    fetch("http://localhost:5000/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(namecontent),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // var realdata = res["data"]

        dispatch("SAVE_FRIENDS", res["data"]);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("backend has not updated to contain new user");
        //console.log(errorCode);
        //console.log(errorMessage);
      });
  };

  const [page, setPage] = useState(0);

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
    switch (page) {
      case 0:
        console.log("hih");
        return (
          <div style={style}>
            <Distribution
              bgcolor="#FCD8F4"
              color="#137cbd"
              increment={() => setPage(page + 1)}
            ></Distribution>
          </div>
        );
      case 1:
        return (
          <div style={style}>
            <Weight
              color="#137cbd"
              increment={() => setPage(page + 1)}
            ></Weight>
          </div>
        );

      case 2:
        return (
          <div style={style}>
            <Buddy color="#137cbd" increment={() => setPage(page + 1)}></Buddy>
          </div>
        );
    }
  };

  if (page >= props.counter) {
    db.collection("users")
      .doc(uid_value)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          dispatch("FORM_SETTINGS", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    if (props.counter == 2) {
      getfriends(uid_value);
    }
    console.log("redirect about to happen");
    return <Redirect to="/" />;
  }

  return <div>{<RenderPage />}</div>;
};

export default SignupSurveyPath;
