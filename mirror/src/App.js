import React from "react";

import Background from "./components/Background/Background";
import MainButtons from "./components/Buttons/MainButtons/MainButtons";
import BlueCover from "./components/BlueCover/BlueCover";

import Weight from "./components/Pages/Weight";
import Distribution from "./components/Pages/Distribution";
import Attendance from "./components/Pages/Attendance";

import AuthForm from "./components/Auth/Auth";

function App() {
  // <Background></Background>
  //     <BlueCover></BlueCover>
  //     <MainButtons></MainButtons>

  return (
    <div>
      <AuthForm></AuthForm>
    </div>
  );
}

export default App;
