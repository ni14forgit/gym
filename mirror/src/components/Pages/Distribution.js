import React, { useEffect, useState } from "react";
import PieGraph from "../Graphs/PieGraph/PieGraph";
import firebase from "../../store/firebase";
import displayFinalStyle from "../../style/styled-css/display-style";
import StillBackground from "../Background/StillBackground";
import { distribution } from "../../assets/media/backgrounds";
import { withinMonth, shouldRedirect } from "../../actions/actions";
import { CancelButton } from "../Buttons/MaterialButton";
import { Redirect } from "react-router-dom";

const db = firebase.firestore();

function Distribution() {
  const Container = displayFinalStyle.containerweight;
  const ExitButton = displayFinalStyle.exitButton;
  const PadLeft = displayFinalStyle.padleft;
  const HeaderStyleCool = displayFinalStyle.headerstylecool;
  const NoDataMessage = displayFinalStyle.noDataMessage;

  var user = firebase.auth().currentUser;
  var uid_value = "error";

  const [show, setShow] = useState(false);
  const [distributionData, setDistributionData] = useState([
    { id: "yo", label: "yo", value: 1, color: "hsl(199, 70%, 50%)" },
  ]);

  if (user != null) {
    uid_value = user.uid;
    //console.log(uid_value);
    //console.log("uid boy");
  } else {
    //console.log("error rror");
  }

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

  async function createData() {
    var data = {};
    const dataToReturn = await db
      .collection("users")
      .doc(uid_value)
      //.doc("firebase")
      .collection("ratio")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const x = doc.data();
          //console.log(x.date);
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
        //console.log("hi");
        //console.log(mydata);
        return piedata(mydata);
      })
      .then((finalo) => {
        //console.log("bibi");
        //console.log(finalo);
        if (finalo.length > 0) {
          setShow(true);
        }
        return finalo;
      })
      .catch(function (error) {
        //console.log("Error getting documents: ", error);
      });
    //console.log(dataToReturn);
    setDistributionData(dataToReturn);
  }

  useEffect(() => {
    createData();
  }, []);

  if (shouldRedirect()) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <StillBackground image={distribution} color="#F77467" />

      <div>
        <HeaderStyleCool>
          <h1>Last 30 Days</h1>
        </HeaderStyleCool>
        <ExitButton>
          <CancelButton></CancelButton>
        </ExitButton>
      </div>

      {show ? (
        <PadLeft>
          <PieGraph data={distributionData} />
        </PadLeft>
      ) : (
        <NoDataMessage>
          <h1>You have no recorded workouts!</h1>
        </NoDataMessage>
      )}
    </Container>
  );
}

export default Distribution;
