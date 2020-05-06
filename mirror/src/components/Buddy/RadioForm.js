import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Radio,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    border: "2px solid #137cbd",
    width: 30,
    height: 30,
    backgroundColor: "#f5f8fa",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",

    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

// Inspired by blueprintjs
function ColorRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="secondary"
      icon={<span className={classes.icon} />}
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      {...props}
    />
  );
}

const RadioForm = (props) => {
  return (
    <div>
      <Typography>{props.title}</Typography>
      <FormGroup row>
        {props.options.map((value) => {
          return (
            <FormControlLabel
              control={
                <ColorRadio
                  checked={props.select === value}
                  onChange={() => props.setSelect(value)}
                  value={value}
                  name={value}
                />
              }
              label={value}
            />
          );
        })}
      </FormGroup>
    </div>
  );
};

export default RadioForm;
