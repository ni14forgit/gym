import React from "react";
import "./App.css";

import Background from "./components/Background/Background";
import MainButtons from "./components/MainButtons/MainButtons";
import BlueCover from "./components/BlueCover/BlueCover";

import data from "./components/Graphs/LineGraph/DataLine";
import LineGraph from "./components/Graphs/LineGraph/LineGraph";

function App() {
  console.log(data);
  //const myPieGraph = PieGraph(data);
  //{myPieGraph}
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <div style={{ height: "800px", fontWeight: "bold" }}>
          <LineGraph data={data} />
        </div>
        {/* <Background></Background>
      <BlueCover></BlueCover>
      <MainButtons></MainButtons> */}
      </div>
    </div>
  );
}

export default App;
