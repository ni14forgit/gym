import React from "react";
import data from "../Graphs/LineGraph/DataLine";
import LineGraph from "../Graphs/LineGraph/LineGraph";
import displayFinalStyle from "../../style/styled-css/display-style";
import StillBackground from "../Background/StillBackground";
import { weight } from "../../assets/media/backgrounds";
import { CancelButton } from "../Buttons/MaterialButton";
import { shouldRedirect } from "../../actions/actions";
import { Redirect } from "react-router-dom";

function Weight() {
  const ContainerWeight = displayFinalStyle.containerweight;
  const HeaderStyleCool = displayFinalStyle.headerstylecool;
  const ExitButton = displayFinalStyle.exitButton;

  if (shouldRedirect()) {
    return <Redirect to="/" />;
  }

  return (
    <ContainerWeight>
      <StillBackground image={weight} color="#f68b27" />
      <div>
        <HeaderStyleCool>
          <h1>Last 30 Days</h1>
        </HeaderStyleCool>
        <ExitButton>
          <CancelButton color="white"></CancelButton>
        </ExitButton>
      </div>
      <LineGraph data={data} />
    </ContainerWeight>
  );
}

export default Weight;
