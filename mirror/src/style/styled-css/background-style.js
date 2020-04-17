import styled from "styled-components";

const FullscreenVideoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  overflow: hidden;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  & video : {
    min-width: 100%;
    min-height: 100%;
  }
`;

const Relativo = styled.div`
position`;

const VideoFull = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
  overflow: hidden;
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
};

export default backgroundFinalStyle;
