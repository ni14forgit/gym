import React, { useState, useEffect } from "react";
// import { useStore } from "../../store/store";
// import firebase from "../../store/firebase";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import ReactLoading from "react-loading";
import wsFinalStyle from "../../../style/styled-css/weightsurvey-style";
import { shouldRedirect } from "../../../actions/actions";
import { Redirect } from "react-router-dom";
import { buttonStyle } from "../../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import io from "socket.io-client";
// let endpoint = "http://localhost:5000";
let endpoint = "https://wiiboardapi.herokuapp.com";
let socket = io.connect(`${endpoint}`);
const MARGIN_OF_ERROR = 9;

// const db = firebase.firestore();
const WeightSurvey = (props) => {
  const Title = wsFinalStyle.title;
  const WeightTitle = wsFinalStyle.weighttitle;
  const Container = wsFinalStyle.container;
  const ButtonVertical = wsFinalStyle.buttonVertical;

  // const [state, dispatch] = useStore();
  // const history = useHistory();

  const style = {
    color: "#137cbd",
    fontWeight: "bold",
  };

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  // const [isOnScale, setIsOnScale] = useState(false);
  // const [weight, setWeight] = useState(0);
  // const [show, setShow] = useState(false);

  const [weights, setWeights] = useState({});
  const [finalWeight, setFinalWeight] = useState(0);
  const [myTitle, setMyTitle] = useState("Step on Weight Scale!");
  //**probably not a good idea, don't wanna call setWeight many times

  // const submitWeightNextPage = () => {
  //   // db.collection("users")
  //   //   .doc(state.uid)
  //   //   .collection("ratio")
  //   //   .add({
  //   //     date: Date(),
  //   //     weight: weightState,
  //   //   })
  //   //   .catch(function (error, data) {
  //   //     console.log(error);
  //   //     console.log(data);
  //   //   })
  //   //   .then(() => history.push("/nextpage"));
  // };

  const skip = () => {
    props.increment();
  };

  const title = () => {
    const lengthTrack = Object.keys(weights).length;
    // console.log("sdfhasdkfjasfkla" + " " + lengthTrack);

    if (lengthTrack >= 3) {
      // console.log("3 man");
      setMyTitle("Submit");
    } else if (lengthTrack > 0) {
      setMyTitle("Detected and Measuring...");
      // console.log("2 man");
    } else {
      setMyTitle("Step on weight scale!");
    }
  };

  const show = Object.keys(weights).length >= 3 ? true : false;

  const displayInfo = show ? (
    <WeightTitle>
      <h1>{finalWeight}</h1>
    </WeightTitle>
  ) : (
    <div>
      <ReactLoading
        className="loading"
        color="#357edd"
        height="300px"
        width="300px"
      ></ReactLoading>
    </div>
  );

  const wiiDetected = (personWeight) => {
    // console.log("flask is cool");
    const length = Object.keys(weights).length + 1;
    const newWeights = { ...weights };
    newWeights[length] = personWeight;
    // console.log(newWeights);
    setWeights(newWeights);
  };

  useEffect(() => {
    socket.on("weight", (weightArg) => {
      if (Object.keys(weights).length < 3) {
        wiiDetected(weightArg);
      }
    });
    title();
    setFinalWeight(weights[3] + MARGIN_OF_ERROR);
  }, [weights, myTitle]);

  if (shouldRedirect()) {
    return <Redirect to="/" />;
  }

  return (
    //Some timed event to trigger the call of submit weight

    <Container>
      <Title>
        <h1>{myTitle}</h1>
      </Title>
      {displayInfo}
      <ButtonVertical>
        <Button onClick={skip}>
          <Typography style={style} variant="h5">
            Skip If Not On Wii Fit Board
          </Typography>
        </Button>
        {show ? (
          <Button onClick={skip}>
            <Typography style={style} variant="h5">
              Submit Weight
            </Typography>
          </Button>
        ) : null}
      </ButtonVertical>
    </Container>
  );
};

export default WeightSurvey;
