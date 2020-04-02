import React from "react";
import "./Background.css";
import gym from "../../assets/media/gym.mp4";
const Background = () => {
  return (
    <div className="fullscreen-video-wrap">
      <video
        type="video/mp4"
        src={gym}
        autoPlay={true}
        muted
        loop={true}
      ></video>
    </div>
  );
};

export default Background;
