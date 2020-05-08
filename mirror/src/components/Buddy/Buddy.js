import React, { useState, useEffect } from "react";
import Form from "./Form";
import Matches from "./Matches";
import { Typography, Button } from "@material-ui/core";
import buddyStyleFinal from "../../style/styled-css/buddy-style";
import { useHistory } from "react-router-dom";
import { CancelButton } from "./../Buttons/MaterialButton";

const Buddy = () => {
  const history = useHistory();
  const [matches, setMatches] = useState(true);
  const NavBar = buddyStyleFinal.navBar;
  const NavOptions = buddyStyleFinal.navOptions;
  const ExitButton = buddyStyleFinal.exitButton;
  const HorizontalDivider = buddyStyleFinal.horizontalDivider;
  const ParentBackground = buddyStyleFinal.parentBackground;

  const clicker = (bool) => {
    console.log("pressed");
    setMatches(bool);
  };

  const sendToMain = () => {
    history.push("/");
  };

  return (
    <ParentBackground color="#FCD8F4">
      <NavBar style={{ color: "#137cbd" }}>
        <NavOptions>
          <Button onClick={() => clicker(false)}>
            <Typography
              style={{
                color: "#137cbd",
                fontWeight: `${!matches ? "bold" : "normal"}`,
              }}
              variant="h6"
            >
              Your Profile
            </Typography>
          </Button>
        </NavOptions>
        <NavOptions>
          <Button onClick={() => clicker(true)}>
            <Typography
              style={{
                color: "#137cbd",
                fontWeight: `${matches ? "bold" : "normal"}`,
              }}
              variant="h6"
            >
              Workouts Buddies
            </Typography>
          </Button>
        </NavOptions>
      </NavBar>
      <ExitButton>
        <CancelButton color="#137cbd"></CancelButton>
      </ExitButton>
      {/* <HorizontalDivider style={{ margin: "auto" }} color="#137cbd" /> */}
      {matches ? (
        <Matches sendToMain={sendToMain} />
      ) : (
        <Form color="#137cbd" sendToMain={sendToMain} />
      )}
    </ParentBackground>
  );
};

export default Buddy;
