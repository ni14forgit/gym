import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  button: {
    border: "1px solid blue",
    backgroundColor: "blue",
  },
}));

const goals = [
  "get a beach bod",
  "eat healthier",
  "lift a certain amount",
  "some other goal",
  "get a beach bod",
  "eat healthier",
  "lift a certain amount",
  "some other goal",
  "get a beach bod",
  "eat healthier",
  "lift a certain amount",
  "some other goal",
];

const Options = (props) => {
  const [options, setOptions] = useState({});
  const classes = useStyles();
  const addOption = (ind) => {
    console.log(options);
    const cloneOptions = { ...options };
    if (options[ind]) {
      cloneOptions[ind] = false;
      setOptions(cloneOptions);
    } else {
      cloneOptions[ind] = true;
      setOptions(cloneOptions);
    }
  };
  //   `${options.has(index) ? "blue" : null}`
  return (
    <div>
      <Typography style={{ marginBottom: "2vh" }}>{props.title}</Typography>
      <Grid>
        {goals.map((tile, index) => (
          <Button
            id={index}
            onClick={() => addOption(index)}
            style={{
              border: "1px solid #137cbd",
              marginBottom: "1.5vh",
              marginRight: "1vw",
              fontSize: "15px",
              color: `${options[index] === true ? "white" : "black"}`,
              backgroundColor: `${
                options[index] === true ? "#137cbd" : "white"
              }`,
            }}
          >
            {tile}
          </Button>
        ))}
      </Grid>
    </div>
  );
};

export default Options;
