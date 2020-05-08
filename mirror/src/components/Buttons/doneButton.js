import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import React from "react";
import { IconButton, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { buttonStyle } from "../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";

const DoneButton = (props) => {
  const history = useHistory();
  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  return (
    // <IconButton onClick={props.submitContinue}>
    //   <DoneAllRoundedIcon
    //     style={{
    //       fontSize: 100,
    //       color: "white",
    //       border: "2px solid white",
    //       borderRadius: "25%",
    //     }}
    //   />
    // </IconButton>
    <Button
      className={buttonstyle_data.points}
      color="primary"
      size="medium"
      onClick={props.submitContinue}
    >
      submit
    </Button>
  );
};

export default DoneButton;
