import React, { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ReactLoading from "react-loading";
import "./WeightSurvey.css";

const db = firebase.firestore();
const WeightSurvey = () => {
  const [state, dispatch] = useStore();
  const history = useHistory();

  const [isOnScale, setIsOnScale] = useState(false);
  const [weight, setWeight] = useState(0);

  const [show, setShow] = useState(false);
  //**probably not a good idea, don't wanna call setWeight many times

  const submitWeightNextPage = () => {
    // db.collection("users")
    //   .doc(state.uid)
    //   .collection("ratio")
    //   .add({
    //     date: Date(),
    //     weight: weightState,
    //   })
    //   .catch(function (error, data) {
    //     console.log(error);
    //     console.log(data);
    //   })
    //   .then(() => history.push("/nextpage"));
  };

  const skip = () => {
    history.push("/main");
  };

  const title = isOnScale ? "Detected!" : "Step on weight scale!";
  const displayInfo = isOnScale ? (
    <h1 className="weightDisplay">{weight}</h1>
  ) : (
    <div>
      <ReactLoading
        className="loading"
        color="#357edd"
        height="400px"
        width="400px"
      ></ReactLoading>
    </div>
  );

  return (
    //Some timed event to trigger the call of submit weight

    <div className="containerWeight">
      <h1 className="stepScaleTitle">{title}</h1>
      {displayInfo}
      <div>
        <Button onClick={skip}>Skip</Button>
        <Button onClick={() => setIsOnScale(!isOnScale)}>
          {show ? "Turn Off Display" : "Show Measurements"}
        </Button>
      </div>
    </div>
  );
};

export default WeightSurvey;
