import React from "react";
import data from "../Graphs/CalendarGraph/CalendarData";
import CalendarGraph from "../Graphs/CalendarGraph/CalendarGraph";

function Attendance() {
  console.log(data);
  return (
    <div style={{ position: "relative", background='black' }}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <div style={{ height: "800px", fontWeight: "bold" }}>
          <CalendarGraph data={data} />
        </div>
      </div>
    </div>
  );
}

export default Attendance;
