import React from "react";
import gym from "../../assets/media/gym.mp4";
import wilsongym from "../../assets/media/wilsongym.mp4";
import { Typography } from "@material-ui/core";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import backgroundFinalStyle from "../../style/styled-css/background-style";

const Background = () => {
  const [store, dispatch] = useStore();

  const Overlay = backgroundFinalStyle.overlay;
  const FullscreenVideoWrap = backgroundFinalStyle.fullscreenVideoWrap;
  const VideoFull = backgroundFinalStyle.videoFull;

  return (
    <div>
      <FullscreenVideoWrap>
        <VideoFull
          type="video/mp4"
          src={wilsongym}
          autoPlay={true}
          muted
          loop={true}
        ></VideoFull>
        <Overlay></Overlay>
      </FullscreenVideoWrap>
    </div>
  );
};

export default Background;
