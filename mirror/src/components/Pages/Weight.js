import React from "react";
import data from "../Graphs/LineGraph/DataLine";
import LineGraph from "../Graphs/LineGraph/LineGraph";
import Background from "../Background/Background";
import displayFinalStyle from "../../style/styled-css/display-style";

function Weight() {
  const Container = displayFinalStyle.container;
  const DistributionOverlay = displayFinalStyle.distributionoverlay;
  const Inner = displayFinalStyle.inner;
  const PadLeft = displayFinalStyle.padleft;
  const HeaderStyleCool = displayFinalStyle.headerstylecool;

  return (
    <Container>
      <Inner>
        <HeaderStyleCool>
          <h1>Last 30 Days</h1>
        </HeaderStyleCool>
        <LineGraph data={data} />
      </Inner>
    </Container>
  );
}

export default Weight;
