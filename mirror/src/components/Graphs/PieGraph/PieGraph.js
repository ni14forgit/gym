import React from "react";
import { ResponsivePie } from "@nivo/pie";

const theme = {
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: "Sans-Serif"
};

const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 180, left: 200 }}
    innerRadius={0.45}
    padAngle={2}
    cornerRadius={7}
    colors={{ scheme: "spectral" }}
    borderWidth={1}
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
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    theme={theme}
    legends={[
      {
        anchor: "left",
        direction: "column",
        translateY: 30,
        itemWidth: 150,
        itemHeight: -100,
        itemTextColor: "black",
        fontWeight: "bold !important",
        symbolSize: 20,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000"
            }
          }
        ]
      }
    ]}
  />
);

export default MyResponsivePie;
