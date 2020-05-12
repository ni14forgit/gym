import firebase from "../store/firebase";
import React, { useState, useRef, useEffect } from "react";
import { withinMonth } from "./actions";
const db = firebase.firestore();
const retrieve = () => {
  return <button onClick={createData}>Click me</button>;
};

async function createData() {
  var data = [];
  const dataToReturn = await db
    .collection("users")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const user = doc;
        console.log(user);
        user
          .collection("ratio")
          .get()
          .then(function (querySnapshot2) {
            const datatoappend = {};
            querySnapshot2.forEach(function (doc2) {
              const x = doc2.data();
              if (withinMonth(x.date)) {
                for (let key in x) {
                  if (x[key] == 1) {
                    if (key in data) {
                      datatoappend[key] += 1;
                    } else {
                      datatoappend[key] = 1;
                    }
                  }
                }
              }
            });
            data.push(datatoappend);
          });
      });
      return data;
    })
    .then((mydata) => {
      console.log(mydata);
    })
    .catch(function (error) {
      console.log(error);
      //console.log("Error getting documents: ", error);
    });
  //console.log(dataToReturn);
}

export default retrieve;
// .doc(uid_value)
// //.doc("firebase")
// .collection("ratio")
