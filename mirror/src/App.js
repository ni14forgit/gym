import React from "react";
//import "./App.css";

import Background from "./components/Background/Background";
import MainButtons from "./components/MainButtons/MainButtons";
import BlueCover from "./components/BlueCover/BlueCover";

import Weight from "./components/Pages/Weight";
import Distribution from "./components/Pages/Distribution";
import Attendance from "./components/Pages/Attendance";

function App() {
  //const myPieGraph = PieGraph(data);
  //{myPieGraph}
  return (
    <div>
      <Background></Background>
      <BlueCover></BlueCover>
      <MainButtons></MainButtons>
    </div>
  );
}

export default App;
