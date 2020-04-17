import React from "react";
import "./Background.css";
import gym from "../../assets/media/gym.mp4";
import { Typography } from "@material-ui/core";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";

const Background = () => {
  const [store, dispatch] = useStore();

  return (
    <div>
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
