import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
  CoinIcon,
  PieIcon,
  GraphIcon,
  WeightIcon,
} from "../../assets/icons/icons";
import {
  buttonStyle,
  titleStyle,
} from "../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import { Typography } from "@material-ui/core";
import mainbuttonsFinalStyle from "../../style/styled-css/mainbuttons-style";
import Background from "../Background/Background";

const MainButtons = () => {
  const [boldAuth, setBoldAuth] = useState(false);
  const history = useHistory();
  const [state, dispatch] = useStore();
  const Row = mainbuttonsFinalStyle.row;
  const Column = mainbuttonsFinalStyle.column;
  const Auth = mainbuttonsFinalStyle.auth;
  const Pad = mainbuttonsFinalStyle.pad;
  const Container = mainbuttonsFinalStyle.container;
  const Title = mainbuttonsFinalStyle.title;

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
        //console.log("logout error occurred");
      });
  };

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  const titlestyle = makeStyles(titleStyle);
  const titlestyle_data = titlestyle();

  //might need to use a USEEFFECT to load the user title initially? ?

  var userName = "";
  var user = firebase.auth().currentUser;

  const buttonPress = (path) => {
    if (user) {
      history.push(path);
    } else {
      history.push("/signup");
    }
  };

  if (user != null) {
    //console.log(user.providerData);
    var firstName = user.displayName.split(" ");
    userName = "Welcome, " + firstName[0];
    //console.log(user.displayName);
  }

  const loginSignUp = () => {
    return (
      <Auth>
        <Pad>
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
        </Pad>
        <Pad>
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
        </Pad>
      </Auth>
    );
  };

  const logOut = () => {
    return (
      <div>
        <Auth>
          <Pad>
            <Button
              className={buttonstyle_data.auth}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={clickLogout}
            >
              Logout
            </Button>
          </Pad>
        </Auth>
      </div>
    );
  };

  const authStatusButton = user ? logOut() : loginSignUp();

  return (
    <div>
      <Container>
        <Title>
          <Typography className={titlestyle_data.main} variant="h1">
            {userName}
          </Typography>
        </Title>
        {authStatusButton}
        <Row>
          <Column>
            <Button
              onClick={() => buttonPress("/attendance")}
              classes={{
                root: buttonstyle_data.mainoption,
                label: buttonstyle_data.mainlabel,
              }}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={
                <GraphIcon
                  style={{ fontSize: 115, color: "#AF81FA", padding: "-50px" }}
                />
              }
            >
              Attendance
            </Button>
          </Column>
          <Column>
            <Button
              onClick={() => buttonPress("/weight")}
              classes={{
                root: buttonstyle_data.mainoption,
                label: buttonstyle_data.mainlabel,
              }}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={
                <WeightIcon
                  style={{ fontSize: 85, color: "#f68b27", padding: "15px" }}
                />
              }
            >
              Weight Tracker
            </Button>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button
              onClick={() => {
                buttonPress("/distribution");
              }}
              classes={{
                root: buttonstyle_data.mainoption,
                label: buttonstyle_data.mainlabel,
              }}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={
                <PieIcon
                  style={{ fontSize: 90, color: "#F77467", padding: "15px" }}
                />
              }
            >
              Workout Distribution
            </Button>
          </Column>
          <Column>
            <Button
              onClick={() => {
                buttonPress("/points");
              }}
              onFocus={() => console.log("Focus")}
              onBlur={() => console.log("Blur")}
              classes={{
                root: buttonstyle_data.mainoption,
                label: buttonstyle_data.mainlabel,
              }}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={
                <CoinIcon
                  style={{ fontSize: 90, color: "#2cb205", padding: "15px" }}
                />
              }
            >
              Store
            </Button>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default MainButtons;
