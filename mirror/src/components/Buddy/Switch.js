import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Switch } from "@material-ui/core";

const BlueSwitch = withStyles((theme) => ({
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
    color: blue[300],
    "&$checked": {
      transform: "translateX(36px)",
      color: blue[500],
    },
    "&$checked + $track": {
      backgroundColor: blue[500],
    },
  },
  checked: {},
  track: {},
}))(Switch);

export default BlueSwitch;
