import React, { useState, useEffect } from "react";
import CalendarGraph from "../Graphs/CalendarGraph/CalendarGraph";
import firebase from "../../store/firebase";
import Background from "../Background/Background";
import displayFinalStyle from "../../style/styled-css/display-style";

const db = firebase.firestore();

function Attendance() {
  const Container = displayFinalStyle.container;
  const DistributionOverlay = displayFinalStyle.distributionoverlay;
  const Inner = displayFinalStyle.inner;
  const PadLeft = displayFinalStyle.padleft;
  const HeaderStyleCool = displayFinalStyle.headerstylecool;

  var user = firebase.auth().currentUser;
  var uid_value = "error";

  if (user != null) {
    uid_value = user.uid;
    console.log(uid_value);
    console.log("uid boy");
  } else {
    console.log("error rror");
  }

  const [show, setShow] = useState(false);
  const [attendanceData, setAttendanceData] = useState([
    { day: "2020-10-04", value: 1 },
  ]);

  async function createData() {
    var data = [];
    const dataToReturn = await db
      .collection("users")
      .doc(uid_value)
      // .doc("firebase")
      .collection("attendance")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const x = doc.data();
          const y = { day: x.date, value: x.value };
          data.push(y);
          console.log(doc.id, " => ", doc.data());
        });
        return data;
      })
      .then((mydata) => {
        console.log("hi");
        console.log(mydata);
        return mydata;
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    console.log(dataToReturn);
    setShow(true);
    setAttendanceData(dataToReturn);
  }

  useEffect(() => {
    createData();
  }, []);

  return (
    <div>
      <Background></Background>
      <Container>
        <Inner>
          <HeaderStyleCool>
            <h1>Year 2020</h1>
          </HeaderStyleCool>
          {show ? <CalendarGraph data={attendanceData} /> : null}
        </Inner>
      </Container>
    </div>
  );
}

export default Attendance;
