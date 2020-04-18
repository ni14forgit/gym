import React from "react";
import { ResponsivePie } from "@nivo/pie";

const theme = {
  fontSize: "40px",
  fontWeight: 700,
  fontFamily: "Sans-Serif",
  fontColor: "white",
  itemTextColor: "white",
};

const MyResponsivePie = ({ data }) => {
  console.log(data);

  const legendHeight = data.length;
  // console.log(legendHeight);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 180, left: 200 }}
      innerRadius={0.45}
      padAngle={2}
      cornerRadius={7}
      slicesLabelsTextColor="white"
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      enableRadialLabels={false}
      borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={3}
      radialLabelsLinkColor={{ from: "color" }}
      slicesLabelsSkipAngle={10}
      //slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={theme}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateY: 0,
          itemWidth: 150,
          itemHeight: 60,
          itemTextColor: "white",
          fontWeight: "bold !important",
          symbolSize: 30,
          symbolShape: "circle",
          // effects: [
          //   {
          //     on: "hover",
          //     style: {
          //       itemTextColor: "#000",
          //     },
          //   },
          // ],
        },
      ]}
    />
  );
};

export default MyResponsivePie;
