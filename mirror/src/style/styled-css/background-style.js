import React from "react";
import styled from "styled-components";

const FullscreenVideoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & video : {
    min-width: 100%;
    min-height: 100%;
  }
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: #225470;
  z-index: 1;
  opacity: 0.65;
`;

//   .fullscreen-video-wrap video {
//     min-width: 100%;
//     min-height: 100%;
//   }

const backgroundFinalStyle = {
  overlay: { ...Overlay },
  fullscreenVideoWrap: { ...FullscreenVideoWrap },
};

export default backgroundFinalStyle;
