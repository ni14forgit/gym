import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

const theme = {
  textColor: "white",
  fontSize: "24px"
};

const MyResponsiveCalendar = ({ data /* see data tab */ }) => (
  <ResponsiveCalendar
    theme={theme}
    data={data}
    from="2020-03-01"
    to="2020-04-01"
    minValue="1"
    emptyColor="#108BE5"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    direction="horizontal"
    yearSpacing={40}
    monthBorderColor="#6e10e5"
    dayBorderWidth={2}
    dayBorderColor="#6e10e5"
    // legends={[
    //   {
    //     anchor: "bottom-right",
    //     direction: "row",
    //     translateY: 36,
    //     itemCount: 1,
    //     itemWidth: 42,
    //     itemHeight: 36,
    //     itemsSpacing: 14,
    //     itemDirection: "right-to-left"
    //   }
    // ]}
  />
);

export default MyResponsiveCalendar;
