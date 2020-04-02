import React from "react";
import data from "../Graphs/CalendarGraph/CalendarData";
import CalendarGraph from "../Graphs/CalendarGraph/CalendarGraph";

function Attendance() {
  console.log(data);
  return (
    <div className="container">
      <div className="inner">
        <h1 className="header-style-cool">Last 30 Days</h1>
        <CalendarGraph data={data} />
      </div>
    </div>
  );
}

export default Attendance;
