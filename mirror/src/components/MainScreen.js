import React from "react";
import Background from "./Background/Background";
import MainButtons from "./Buttons/MainButtons";

const MainScreen = (props) => {
  return (
    <div>
      <Background></Background>
      <MainButtons></MainButtons>
    </div>
  );
};

export default MainScreen;
