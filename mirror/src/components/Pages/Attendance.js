import React, { useState, useEffect } from "react";
import CalendarGraph from "../Graphs/CalendarGraph/CalendarGraph";
import firebase from "../../store/firebase";
import Background from "../Background/Background";
import displayFinalStyle from "../../style/styled-css/display-style";
import StillBackground from "../Background/StillBackground";
import { calendar } from "../../assets/media/backgrounds";

const db = firebase.firestore();

function Attendance() {
  const Container = displayFinalStyle.container;
  const PadLeft = displayFinalStyle.padleft;
  const HeaderStyleCool = displayFinalStyle.headerstylecool;
  const Normalize = displayFinalStyle.normalize;

  const date = new Date();
  const year = date.getFullYear();
  const yearTitle = "Year " + year;

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
      //.doc("firebase")
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
      <StillBackground image={calendar} color="#6e10e5" />
      <Container>
        <Normalize>
          {show ? <CalendarGraph data={attendanceData} /> : null}
        </Normalize>
        <HeaderStyleCool>
          <h1>{yearTitle}</h1>
        </HeaderStyleCool>
      </Container>
    </div>
  );
}

export default Attendance;
