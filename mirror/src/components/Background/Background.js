import React from "react";
import gym from "../../assets/media/gym.mp4";
import { Typography } from "@material-ui/core";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import backgroundFinalStyle from "../../style/styled-css/background-style";

const Background = () => {
  const [store, dispatch] = useStore();

  const Overlay = backgroundFinalStyle.overlay;
  const FullscreenVideoWrap = backgroundFinalStyle.fullscreenVideoWrap;

  return (
    <div>
      <FullscreenVideoWrap>
        <video
          type="video/mp4"
          src={gym}
          autoPlay={true}
          muted
          loop={true}
        ></video>
        <Overlay></Overlay>
      </FullscreenVideoWrap>
    </div>
  );
};

export default Background;
