import React from "react";
import "./Background.css";
import gym from "../../assets/media/gym.mp4";
import { Typography } from "@material-ui/core";
import StyleData from "../../style/StyleData";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";

const Background = () => {
  //might need to use a USEEFFECT to load the user title initially? ?

  var userName = "";
  var user = firebase.auth().currentUser;

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
    userName = "Hi, " + firstName[0];
    console.log(user.displayName);
  }

  const useStyles = makeStyles(StyleData);
  const classes = useStyles();

  const [store, dispatch] = useStore();

  return (
    <div>
      <div className="title">
        <Typography className={classes.textTitleStyle} variant="h1">
          {userName}
        </Typography>
      </div>
      <div className="fullscreen-video-wrap">
        <video
          type="video/mp4"
          src={gym}
          autoPlay={true}
          muted
          loop={true}
        ></video>
        <div className="headerOverlay"></div>
      </div>
    </div>
  );
};

export default Background;
