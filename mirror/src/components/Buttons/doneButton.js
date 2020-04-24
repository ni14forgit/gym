import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import React from "react";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const DoneButton = (props) => {
  const history = useHistory();
  return (
    <IconButton onClick={() => props.submitContinue}>
      <DoneAllRoundedIcon style={{ fontSize: 100, color: "white" }} />
    </IconButton>
  );
};

export default DoneButton;
