import React, { useEffect, useState } from "react";
import PieData from "../Graphs/PieGraph/PieData";
import PieGraph from "../Graphs/PieGraph/PieGraph";
import firebase from "../../store/firebase";

const db = firebase.firestore();

function Distribution() {
  var user = firebase.auth().currentUser;
  var uid_value = "error";

  const [show, setShow] = useState(false);

  if (user != null) {
    uid_value = user.uid;
    console.log(uid_value);
    console.log("uid boy");
  } else {
    console.log("error rror");
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
      x.value = data[key];
      x.color = colors[counter];
      counter += 1;
      masterList.push(x);
    }
    console.log(masterList);
    return masterList;
  };
  var data = {};
  var my_final_data = [];
  var hibisi = [];

  async function createData() {
    const dataToReturn = await db
      .collection("users")
      .doc(uid_value)
      .collection("ratio")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const x = doc.data();
          console.log(x.date);
          // if (Date(x.date) < Date()){
          //   continue
          // }
          for (let key in x) {
            if (x[key] == 1) {
              if (key in data) {
                data[key] += 1;
              } else {
                data[key] = 1;
              }
            }
          }
          console.log(doc.id, " => ", doc.data());
        });
        return data;
      })
      .then((mydata) => {
        console.log("hi");
        console.log(mydata);
        return piedata(mydata);
      })
      .then((finalo) => {
        console.log("bibi");
        console.log(finalo);
        hibisi = finalo;
        return finalo;
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    console.log(dataToReturn);
    setShow(true);
    return dataToReturn;
  }

  useEffect(() => {
    function fetchData() {
      const something = createData();
      console.log(hibisi);
    }
    fetchData();
    // const finalData = createData();
    // console.log(finalData);
  });

  return (
    <div className="container">
      <div className="inner">
        <h1>Last 30 Days</h1>
        {show ? <PieGraph data={PieData(hibisi)} /> : null}>
      </div>
    </div>
  );
}

export default Distribution;
