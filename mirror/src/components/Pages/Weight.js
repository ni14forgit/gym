import React from "react";
import data from "../Graphs/LineGraph/DataLine";
import LineGraph from "../Graphs/LineGraph/LineGraph";
import Background from "../Background/Background";
import "./Weight.css";

// const style = {
//   // height: "800px",
//   fontWeight: "bold",
//   fontSize: "10px",
//   backgroundColor: "#F68B27",
//   opacity: 0.4,
//   border: "2px solid black",
//   position: "absolute",
//   // height: "99vh",
//   width: "100vw",
//   height: "100%",
//   top: "0",
//   left: "0",
//   bottom: "0",
//   // maxHeight: "100",
//   overflow: "auto"
// };

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// text-align: center;
// min-height: 100vh;

function Weight() {
  return (
    <div className="container">
      <div className="inner">
        <div className="header-style">
          <h1>Last 30 Days</h1>
        </div>

        <LineGraph data={data} />
      </div>
    </div>
  );
}

export default Weight;
