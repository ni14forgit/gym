import React from "react";
import data from "./components/Graphs/PieGraph/data";
import PieGraph from "./components/Graphs/PieGraph/PieGraph";

function Distribution() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <div style={{ height: "800px", fontWeight: "bold" }}>
          <PieGraph data={data} />
        </div>
      </div>
    </div>
  );
}

export default Distribution;
