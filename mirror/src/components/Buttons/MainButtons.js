import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
  CoinIcon,
  PieIcon,
  GraphIcon,
  WeightIcon,
  FriendsIcon,
  EventsIcon,
  TrainerClassIcon,
  FeedbackIcon,
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
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const MainButtons = () => {
  const [boldAuth, setBoldAuth] = useState(false);
  const history = useHistory();
  const [state, dispatch] = useStore();
  // const Row = mainbuttonsFinalStyle.row;
  // const Column = mainbuttonsFinalStyle.column;
  const GridContainer = mainbuttonsFinalStyle.gridContainer;
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

  const classes = useStyles();

  // const toggleBold = () => {
  //   setBoldAuth(true);
  //   setTimeout(function () {
  //     setBoldAuth(false);
  //   }, 800);
  // };

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

  const tileData = [
    {
      id: "attendance",
      page: "/attendance",
      size: 115,
      color: "E9F576",
      text: "Attendance",
      pad: "0px",
    },
    {
      id: "feedback",
      page: "/attendance",
      size: 115,
      color: "#AF81FA",
      text: "Submit Feedback",
      pad: "0px",
    },
    {
      id: "events",
      page: "/attendance",
      size: 115,
      color: "81EBFA",
      text: "Upcoming Events!",
      pad: "0px",
    },
    {
      id: "trainerclass",
      page: "/attendance",
      size: 115,
      color: "#F77467",
      text: "Trainers/Classes",
      pad: "0px",
    },
    {
      id: "friends",
      page: "/attendance",
      size: 115,
      color: "DA7C3A",
      text: "Workout Buddy",
      pad: "0px",
    },
    {
      id: "weight",
      page: "/weight",
      size: 85,
      color: "F576AA",
      text: "Weight Tracker",
      pad: "15px",
    },
    {
      id: "store",
      page: "/points",
      size: 90,
      color: "#2cb205",
      text: "Store",
      pad: "15px",
    },
    {
      id: "distribution",
      page: "/distribution",
      size: 90,
      color: "F4DE65",
      text: "Workout Distribution",
      pad: "15px",
    },
  ];

  const BaseButton = {
    classes: {
      root: buttonstyle_data.mainoption,
      label: buttonstyle_data.mainlabel,
    },
    variant: "outlined",
    color: "primary",
    size: "large",
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
        {/* <GridContainer> */}
        <Grid item xs={11}>
          {tileData.map((tile) => {
            switch (tile.id) {
              case "weight":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <WeightIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              case "attendance":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <GraphIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              case "distribution":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <PieIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              case "feedback":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <FeedbackIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              case "store":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <CoinIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              case "friends":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <FriendsIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              case "trainerclass":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <TrainerClassIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              case "events":
                return (
                  <Button
                    onClick={() => buttonPress(tile.page)}
                    {...BaseButton}
                    startIcon={
                      <EventsIcon
                        style={{
                          fontSize: tile.size,
                          color: tile.color,
                          padding: tile.pad,
                        }}
                      />
                    }
                  >
                    {tile.text}
                  </Button>
                );
              default:
                return null;
            }
          })}
        </Grid>
        {/* </GridContainer> */}
      </Container>
    </div>
  );
};

export default MainButtons;
