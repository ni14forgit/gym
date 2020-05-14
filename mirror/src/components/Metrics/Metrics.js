import React, { useEffect } from "react";
import PieGraph from "../Graphs/PieGraph/PieGraph";
import WeightData from "../Graphs/LineGraph/DataLine";
import LineGraph from "../Graphs/LineGraph/LineGraph";
import CalendarGraph from "../Graphs/CalendarGraph/CalendarGraph";
import displayFinalStyle from "../../style/styled-css/display-style";
import { Button, Typography } from "@material-ui/core";
import { CancelButton } from "../Buttons/MaterialButton";
import { Redirect } from "react-router-dom";
import { useStore } from "../../store/store";

const Metrics = () => {
  const [state, dispatch] = useStore();
  const DistributionData = state["distribution"];
  const AttendanceData = state["attendance"];

  // useEffect(() => {
  //   console.log("METRICS");
  //   console.log(WeightData);
  //   console.log(DistributionData);
  //   console.log(AttendanceData);
  // }, []);

  const FlexBottom = displayFinalStyle.flexbottom;
  const ExitButton = displayFinalStyle.exitButton;

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FCD8F4",
      }}
    >
      <ExitButton>
        <CancelButton color="#137cbd"></CancelButton>
      </ExitButton>
      <div
        style={{
          position: "relative",
          //   border: "2px solid orange",
          height: "38vh",
          width: "100vw",
        }}
      >
        <Typography
          style={{
            paddingTop: "1vh",
            fontWeight: "bold",
            color: "#137cbd",
            textAlign: "center",
          }}
          variant="h5"
        >
          Attendance Through 2020
        </Typography>
        <CalendarGraph data={AttendanceData} />
      </div>

      <FlexBottom>
        <div
          style={{
            position: "relative",
            // border: "2px solid black",
            height: "62vh",
            width: "50vw",
          }}
        >
          <div style={{ height: "55vh" }}>
            <Typography
              style={{
                paddingTop: "1vh",
                fontWeight: "bold",
                color: "#137cbd",
                textAlign: "center",
              }}
              variant="h5"
            >
              Weight Tracker Past 30 Days
            </Typography>
            <LineGraph data={WeightData} />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            // border: "2px solid red",
            height: "62vh",
            width: "50vw",
          }}
        >
          <div style={{ height: "55vh" }}>
            <Typography
              style={{
                paddingTop: "1vh",
                fontWeight: "bold",
                color: "#137cbd",
                textAlign: "center",
              }}
              variant="h5"
            >
              Workout Distribution Past 30 Days
            </Typography>
            <PieGraph data={DistributionData} />
          </div>
        </div>
      </FlexBottom>
    </div>
  );
};

export default Metrics;
