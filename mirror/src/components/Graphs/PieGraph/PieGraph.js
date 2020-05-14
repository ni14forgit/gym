import React from "react";
import { ResponsivePie } from "@nivo/pie";

const theme = {
  fontSize: 20,
  fontWeight: 700,
  fontFamily: "Sans-Serif",
  fontColor: "#137cbd",
  itemTextColor: "white",
};

const MyResponsivePie = ({ data }) => {
  //console.log(data);

  // const legendHeight = data.length;
  // console.log(legendHeight);

  return (
    <ResponsivePie
      data={data}
      // margin={{ top: 40, right: 80, bottom: 180, left: 200 }}
      margin={{ right: 10, bottom: 20, left: 10, top: 20 }}
      innerRadius={0.45}
      padAngle={2}
      cornerRadius={7}
      slicesLabelsTextColor="white"
      colors={[
        "#D2B4DE",
        "#A9CCE3",
        "#AED6F1",
        "#A3E4D7",
        "#A569BD",
        "#5499C7",
        "#5DADE2",
        "#48C9B0",
        "#7D3C98",
        "#2471A3",
        "#2E86C1",
        "#17A589",
      ]}
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
          itemHeight: 25,
          itemTextColor: "#137cbd",
          fontWeight: "bold !important",
          symbolSize: 20,
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
