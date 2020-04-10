import React from "react";
import { render } from "react-dom";

function BGImage(props) {
  return (
    <div
      style={{
        background: "url(" + props.bg + ")",
        height: "100%",
        width: "100%",
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
      />
    </div>
  );
}
