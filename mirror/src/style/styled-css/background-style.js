import styled from "styled-components";

// overflow: hidden;
// width: auto;
// height: auto;
const FullscreenVideoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
  & video : {
    min-width: 100%;
    min-height: 100%;
  }
`;

// background-size: cover;
// overflow: hidden;

const VideoFull = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
`;

// const FullscreenVideoWrap = styled.div`
//   position: relative;
//   top: 0;
//   left: 0;
//   width: auto;
//   height: auto;
//   background-size: cover;
//   min-width: 100%;
//   min-height: 100%;
//   & video : {
//     min-width: 100%;
//     min-height: 100%;
//   }
// `;

// // background-size: cover;
// // overflow: hidden;

// const VideoFull = styled.video`
//   position: relative;
//   right: 0;
//   bottom: 0;
//   min-width: 100%;
//   min-height: 100%;
//   width: auto;
//   height: auto;
//   z-index: -100;
// `;

const ImgFull = styled.div`
  position: absolute;
  z-index: -100;
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

const backgroundFinalStyle = {
  overlay: { ...Overlay },
  fullscreenVideoWrap: { ...FullscreenVideoWrap },
  videoFull: { ...VideoFull },
  imageFull: { ...ImgFull },
};

export default backgroundFinalStyle;
