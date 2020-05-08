import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Switch, Typography, Grid } from "@material-ui/core";
import buddyStyleFinal from "../../../style/styled-css/buddy-style";

const SwitchBase = withStyles((theme) => ({
  root: {
    width: 80,
  },
  thumb: {
    width: 30,
    height: 30,
  },
  track: {
    borderRadius: 26 / 2,
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  switchBase: {
    padding: 5,
    color: "#137cbd",
    "&$checked": {
      transform: "translateX(36px)",
      color: "#137cbd",
    },
    "&$checked + $track": {
      backgroundColor: "#137cbd",
    },
  },
  checked: {},
  track: {},
}))(Switch);

const FinalSwitch = (props) => {
  const RowContainer = buddyStyleFinal.rowContainer;
  return (
    <RowContainer>
      <SwitchBase
        checked={props.isProp}
        onChange={() => props.setIsProp(!props.isProp)}
        name="checkedB"
      />
      <Typography
        variant="h6"
        fontWeight="fontWeightBold"
        style={{
          position: "relative",
          padding: "1vh",
          fontWeight: `${props.isProp ? "bold" : "normal"}`,
        }}
      >
        {props.title}
      </Typography>
    </RowContainer>
  );
};

export default FinalSwitch;
