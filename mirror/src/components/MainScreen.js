import React from "react";
import Background from "./Background/Background";
import MainButtons from "./Buttons/MainButtons/MainButtons";
import BlueCover from "./BlueCover/BlueCover";

const MainScreen = (props) => {
  return (
    <div>
      <Background></Background>
      <BlueCover></BlueCover>
      <MainButtons></MainButtons>
    </div>
  );
};

export default MainScreen;
