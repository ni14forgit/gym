import { ResponsiveLine } from "@nivo/line";
import React from "react";

// Think of making the title March - April or something like that

const theme = {
  fontSize: 24,
  fontWeight: 700,
  fontFamily: "Sans-Serif",
  axis: {
    textColor: "#eee",
    //fontSize: "14px",
    tickColor: "#eee",
  },
};

// const style = {
//   height: "800px",
//   fontWeight: "bold",
//   fontSize: "20px",
//   backgroundColor: "#F68B27"
// };

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  // <div style={style}>
  <ResponsiveLine
    theme={theme}
    data={data}
    margin={{ top: 150, right: 150, bottom: 150, left: 150 }}
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
      //   fontSize: "15px",
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
      //   legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    colors={{ scheme: "nivo" }}
    pointSize={11}
    pointColor={{ theme: "background" }}
    pointBorderWidth={11}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    // legends={[
    //   {
    //     anchor: "bottom-right",
    //     direction: "column",
    //     justify: false,
    //     translateX: 100,
    //     translateY: 0,
    //     itemsSpacing: 0,
    //     itemDirection: "left-to-right",
    //     itemWidth: 80,
    //     itemHeight: 20,
    //     itemOpacity: 0.75,
    //     symbolSize: 12,
    //     symbolShape: "circle",
    //     symbolBorderColor: "rgba(0, 0, 0, .5)",
    //     effects: [
    //       {
    //         on: "hover",
    //         style: {
    //           itemBackground: "rgba(0, 0, 0, .03)",
    //           itemOpacity: 1
    //         }
    //       }
    //     ]
    //   }
    // ]}
  />
  // </div>
);

export default MyResponsiveLine;
