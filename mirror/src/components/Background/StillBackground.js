import React from "react";
import backgroundFinalStyle from "../../style/styled-css/background-style";

//"#f68b27" wiehgt
//"#6e10e5" grap
//"#2cb205" pie

const StillBackground = (props) => {
  const FullscreenVideoWrap = backgroundFinalStyle.fullscreenVideoWrap;
  const ImgFull = backgroundFinalStyle.imageFull;

  var style = {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: "0",
    left: "0",
    background: `${props.color}`,
    zIndex: "0",
    opacity: "1",
  };

  return (
    <FullscreenVideoWrap>
      <ImgFull>
        <img height="100%" width="100%" src={props.image}></img>
      </ImgFull>
      <div style={style}></div>
    </FullscreenVideoWrap>
  );
};

export default StillBackground;
