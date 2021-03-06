import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

const theme = {
  textColor: "#137cbd",
  fontSize: "24px",
};

const MyResponsiveCalendar = ({ data /* see data tab */ }) => (
  <ResponsiveCalendar
    theme={theme}
    data={data}
    from="2020-03-01"
    to="2020-04-01"
    minValue={1}
    emptyColor="#00000000"
    emptyOpacity={0.2}
    colors={["#108BE5"]}
    // margin={{ top: -50, right: 40, bottom: 0, left: 40 }}
    margin={{ right: 20, bottom: 0, left: 20 }}
    direction="horizontal"
    yearLegend={() => ""}
    // yearSpacing={40}
    monthBorderColor="#137cbd"
    dayBorderWidth={1}
    monthBorderWidth={3}
    dayBorderColor="#137cbd"
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
