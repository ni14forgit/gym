import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const Retrieve = () => {
  useEffect(() => {
    const someArray = [1, 2, 3, 4, 5, 6];
    const newArray = [];

    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const getNumFruit = (fruit) => {
      return sleep(1000).then((v) => fruit);
    };
    // async function someFunction() {
    //   const j = 10;
    //   for (let i = 0; i < j; i++) {
    //     // wait for the promise to resolve before advancing the for loop
    //     await getNumFruit(i);
    //     console.log(i);
    //   }
    // }

    someArray.forEach((item) => {
      console.log(item);
      const hi = Promise.resolve(getNumFruit(item));
      console.log(hi);
      newArray.push(hi);
    });

    console.log(newArray);
    console.log("done");
  });

  return <div>Hi</div>;
};

export default Retrieve;
// .doc(uid_value)
// //.doc("firebase")
// .collection("ratio")
