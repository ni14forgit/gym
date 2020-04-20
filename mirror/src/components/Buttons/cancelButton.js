import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CancelButton = () => {
  const history = useHistory();
  return (
    <IconButton onClick={() => history.push("/")}>
      <HighlightOffIcon style={{ fontSize: 60, color: "white" }} />
    </IconButton>
  );
};

export default CancelButton;
