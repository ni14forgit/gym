import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
  CoinIcon,
  PieIcon,
  CalendarIcon,
  WeightIcon,
  FriendsIcon,
  EventsIcon,
  TrainerClassIcon,
  FeedbackIcon,
} from "../../assets/icons/icons";
import { buttonStyle } from "../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import { Typography } from "@material-ui/core";
import mainbuttonsFinalStyle from "../../style/styled-css/mainbuttons-style";
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
  const Container = mainbuttonsFinalStyle.container;
  const Title = mainbuttonsFinalStyle.title;
  const Copyright = mainbuttonsFinalStyle.copyright;

  const clickAuth = () => {
    if (!user) {
      history.push("/auth");
    } else {
      firebase
        .auth()
        .signOut()
        .then(function () {
          dispatch("SET_UID_USER", "");
        })
        .catch(function (error) {
          //console.log("logout error occurred");
        });
    }
  };

  const classes = useStyles();

  // const toggleBold = () => {
  //   setBoldAuth(true);
  //   setTimeout(function () {
  //     setBoldAuth(false);
  //   }, 800);
  // };

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  //might need to use a USEEFFECT to load the user title initially? ?

  var userName = "";
  var user = firebase.auth().currentUser;

  const buttonPress = (path) => {
    if (user) {
      history.push(path);
    } else {
      history.push("/auth");
    }
  };

  if (user != null) {
    //console.log(user.providerData);
    var firstName = user.displayName.split(" ");
    userName = "Welcome, " + firstName[0];
    //console.log(user.displayName);
  }

  const AuthButtonFunc = () => {
    return (
      <Button
        className={boldAuth ? buttonstyle_data.authBold : buttonstyle_data.auth}
        color="primary"
        size="medium"
        style={{ position: "absolute", top: "2vh", left: "88vw" }}
        onClick={clickAuth}
      >
        <Typography style={{ fontWeight: "bold" }} variant="h5">
          {user ? "Logout" : "Sign In"}
        </Typography>
      </Button>
    );
  };

  const tileData = [
    {
      id: "attendance",
      page: "/attendance",
      size: 95,
      color: "E9F576",
      text: "Attendance",
      pad: "15px",
    },
    // {
    //   id: "feedback",
    //   page: "/attendance",
    //   size: 105,
    //   color: "#AF81FA",
    //   text: "Submit Feedback",
    //   pad: "10px",
    // },
    {
      id: "events",
      page: "/events",
      size: 100,
      color: "81EBFA",
      text: "Upcoming Events!",
      pad: "10px",
    },
    // {
    //   id: "trainerclass",
    //   page: "/attendance",
    //   size: 115,
    //   color: "#F77467",
    //   text: "Trainers/Classes",
    //   pad: "5px",
    // },
    {
      id: "friends",
      page: "/buddy",
      size: 110,
      color: "#FCD8F4",
      text: "Find Buddies!",
      pad: "5px",
    },
    {
      id: "weight",
      page: "/weight",
      size: 90,
      color: "DA7C3A",
      text: "Weight Tracker",
      pad: "10px",
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
      color: "#F77467",
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

  // <Grid spacing={4} item xs={8}>

  return (
    <div>
      <Container>
        <Title>
          <Typography
            style={{ color: "white", fontWeight: "500" }}
            variant="h2"
          >
            {userName}
          </Typography>
        </Title>
        <Copyright>
          <Typography
            style={{ color: "white", fontWeight: "500" }}
            variant="p1"
          >
            @Copyright Duke Wilson Recreation Center
          </Typography>
        </Copyright>
        {AuthButtonFunc()}
        <Grid justify="center" container xs={10}>
          {tileData.map((tile) => {
            switch (tile.id) {
              case "weight":
                return (
                  <Grid item>
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
                  </Grid>
                );
              case "attendance":
                return (
                  <Grid item>
                    <Button
                      onClick={() => buttonPress(tile.page)}
                      {...BaseButton}
                      startIcon={
                        <CalendarIcon
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
                  </Grid>
                );
              case "distribution":
                return (
                  <Grid item>
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
                  </Grid>
                );
              case "feedback":
                return (
                  <Grid item>
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
                  </Grid>
                );
              case "store":
                return (
                  <Grid item>
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
                  </Grid>
                );
              case "friends":
                return (
                  <Grid item>
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
                  </Grid>
                );
              case "trainerclass":
                return (
                  <Grid item>
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
                  </Grid>
                );
              case "events":
                return (
                  <Grid item>
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
                  </Grid>
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
