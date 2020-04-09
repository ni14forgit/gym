import React, { useState } from "react";
import "./MainButtons.css";
import { Button } from "@material-ui/core";
import {
  DumbellIcon,
  PieIcon,
  GraphIcon,
  WeightIcon,
} from "../../../assets/icons/icons";
import StyleData from "../../../style/StyleData";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useStore } from "../../../store/store";
import firebase from "../../../store/firebase";

const MainButtons = (props) => {
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
    //history.push("/main");
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch("SET_UID_USER", "");
      })
      .catch(function (error) {});
  };

  const useStyles = makeStyles(StyleData);
  const classes = useStyles();

  const loginSignUp = () => {
    return (
      <div>
        <div className="loginButton">
          <Button
            className={
              boldAuth
                ? classes.loginMainBOLDStyle
                : classes.loginMainButtonStyle
            }
            variant="outlined"
            color="primary"
            size="medium"
            onClick={clickLogin}
          >
            Login
          </Button>
        </div>
        <div className="signUpButton">
          <Button
            className={
              boldAuth
                ? classes.loginMainBOLDStyle
                : classes.loginMainButtonStyle
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
        <div className="logoutButton">
          <Button
            className={classes.loginMainButtonStyle}
            variant="outlined"
            color="primary"
            size="medium"
            onClick={clickLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  };

  console.log("this is state.uid " + state.uid);
  const authStatusButton = state.uid === "" ? loginSignUp() : logOut();

  return (
    <div>
      {authStatusButton}
      <div className="container">
        <div className="row">
          <div id="dateDiv0" className="column">
            <Button
              className={classes.buttonStyle}
              variant="outlined"
              color="primary"
              size="large"
              onClick={toggleBold}
              startIcon={
                <GraphIcon style={{ fontSize: 100, color: "#6e10e5" }} />
              }
            ></Button>
          </div>
          <div id="chartDiv0" className="column">
            <Button
              className={classes.buttonStyle}
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
              className={classes.buttonStyle}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<PieIcon style={{ fontSize: 80, color: "#2cb205" }} />}
            ></Button>
          </div>
          <div id="chartDiv1" className="column">
            <Button
              className={classes.buttonStyle}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<DumbellIcon style={{ fontSize: 100 }} />}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainButtons;
