import React, { useState } from "react";
import "./MainButtons.css";
import { Button } from "@material-ui/core";
import {
  DumbellIcon,
  PieIcon,
  GraphIcon,
  WeightIcon,
} from "../../../assets/icons/icons";
import {
  buttonStyle,
  titleStyle,
} from "../../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useStore } from "../../../store/store";
import firebase from "../../../store/firebase";
import { Typography } from "@material-ui/core";

const MainButtons = () => {
  const [boldAuth, setBoldAuth] = useState(false);

  const history = useHistory();
  const [state, dispatch] = useStore();

  const clickLogin = () => {
    history.push("/login");
  };

  const clickSignUp = () => {
    history.push("/signup");
  };

  const toggleBold = () => {
    setBoldAuth(true);
    setTimeout(function () {
      setBoldAuth(false);
    }, 800);
  };

  const clickLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch("SET_UID_USER", "");
      })
      .catch(function (error) {
        console.log("logout error occurred");
      });
  };

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  const titlestyle = makeStyles(titleStyle);
  const titlestyle_data = makeStyles(titlestyle);

  //might need to use a USEEFFECT to load the user title initially? ?

  var userName = "";
  var user = firebase.auth().currentUser;

  const buttonPress = (path) => {
    if (user) {
      history.push(path);
    } else {
      toggleBold();
    }
  };

  if (user != null) {
    // user.providerData.forEach(function (profile) {
    //   console.log("Sign-in provider: " + profile.providerId);
    //   console.log("  Provider-specific UID: " + profile.uid);
    //   console.log("  Name: " + profile.displayName);
    //   console.log("  Email: " + profile.email);
    //   console.log("  Photo URL: " + profile.photoURL);
    // });

    console.log(user.providerData);
    var firstName = user.displayName.split(" ");
    userName = "Welcome, " + firstName[0];
    console.log(user.displayName);
  }

  const loginSignUp = () => {
    return (
      <div className="loginlogoutsignup">
        <div className="padder">
          <Button
            className={
              boldAuth ? buttonstyle_data.authBold : buttonstyle_data.auth
            }
            variant="outlined"
            color="primary"
            size="medium"
            onClick={clickLogin}
          >
            Login
          </Button>
        </div>
        <div className="padder">
          <Button
            className={
              boldAuth ? buttonstyle_data.authBold : buttonstyle_data.auth
            }
            variant="outlined"
            color="primary"
            size="medium"
            onClick={clickSignUp}
          >
            Sign Up
          </Button>
        </div>
      </div>
    );
  };

  const logOut = () => {
    return (
      <div>
        <div className="loginlogoutsignup">
          <div className="padder">
            <Button
              className={buttonstyle_data.auth}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={clickLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  };

  console.log("this is state.uid " + state.uid);
  const authStatusButton = state.uid === "" ? loginSignUp() : logOut();

  return (
    <div>
      <div className="containerMainButtons">
        <div className="titleMainButtons">
          <Typography className={titlestyle_data.main} variant="h1">
            {userName}
          </Typography>
        </div>
        <div className="row">
          <div id="dateDiv0" className="column">
            <Button
              onClick={() => buttonPress("/attendance")}
              className={buttonstyle_data.mainoption}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={
                <GraphIcon style={{ fontSize: 100, color: "#6e10e5" }} />
              }
            ></Button>
          </div>
          <div id="chartDiv0" className="column">
            <Button
              onClick={() => buttonPress("/weight")}
              className={buttonstyle_data.mainoption}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={
                <WeightIcon style={{ fontSize: 80, color: "#f68b27" }} />
              }
            ></Button>
          </div>
        </div>
        <div className="row">
          <div id="dateDiv1" className="column">
            <Button
              onClick={() => {
                buttonPress("/distribution");
              }}
              className={buttonstyle_data.mainoption}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<PieIcon style={{ fontSize: 80, color: "#2cb205" }} />}
            ></Button>
          </div>
          <div id="chartDiv1" className="column">
            <Button
              className={buttonstyle_data.mainoption}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<DumbellIcon style={{ fontSize: 100 }} />}
            ></Button>
          </div>
        </div>
        {authStatusButton}
      </div>
    </div>
  );
};

export default MainButtons;
