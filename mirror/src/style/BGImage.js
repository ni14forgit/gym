import React, { useState } from "react";
function BGImage(props) {
  return (
    <div
      style={{
        background: "url(" + props.bg + ")",
        height: "50%",
        width: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundColor: props.tint,
          zIndex: "100",
          opacity: "0.5",
        }}
      ></div>
    </div>
  );
}

export default BGImage;
