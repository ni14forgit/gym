import React from "react";
import data from "../Graphs/PieGraph/data";
import PieGraph from "../Graphs/PieGraph/PieGraph";

function Distribution() {
  return (
    <div className="container">
      <div className="inner">
        <h1>Last 30 Days</h1>
        <PieGraph data={data} />
      </div>
    </div>
  );
}

export default Distribution;
