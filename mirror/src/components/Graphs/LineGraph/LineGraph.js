import { ResponsiveLine } from "@nivo/line";
import React from "react";

// Think of making the title March - April or something like that

const theme = {
  fontSize: 20,
  fontWeight: 200,
  fontFamily: "Sans-Serif",
  itemTextColor: "white",
  textColor: "#137cbd",
  axis: {
    // textColor: "#eee",
    // itemTextColor: "white",
    // tickColor: "#eee",
  },
};

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  // <div style={style}>
  <ResponsiveLine
    theme={theme}
    data={data}
    // margin={{ top: 50, right: 150, bottom: 150, left: 150 }}
    margin={{ right: 20, top: 20, left: 100, bottom: 20 }}
    curve="catmullRom"
    lineWidth={5}
    //enableArea={true}
    enableGridX={false}
    enableGridY={false}
    areaOpacity={0.3}
    enablePoints={true}
    areaBlendMode="darken"
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      //   orient: "bottom",
      tickSize: 0,
      //  fontSize: "15px",
      tickPadding: 25,
      tickRotation: 90,
      legendOffset: 36,
      //   legendPosition: "middle"
      format: () => null,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 35,
      tickRotation: 0,
      itemTextColor: "white",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    // colors={{ scheme: "blues" }}
    // colors={"#108BE5"}
    colors={"#137cbd"}
    pointSize={11}
    pointColor={{ theme: "background" }}
    pointBorderWidth={11}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
  />
);

export default MyResponsiveLine;
