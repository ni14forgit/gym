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

const Options = (props) => {
  const addOption = (ind) => {
    console.log(props.options);
    const cloneOptions = { ...props.options };
    if (props.options[ind]) {
      cloneOptions[ind] = false;
      props.setOptions(cloneOptions);
    } else {
      cloneOptions[ind] = true;
      props.setOptions(cloneOptions);
    }
  };
  //   `${options.has(index) ? "blue" : null}`
  return (
    <div>
      <Typography variant="h6" style={{ marginBottom: "2vh" }}>
        {props.title}
      </Typography>
      <Grid>
        {props.data.map((tile, index) => (
          <Button
            id={index}
            onClick={() => addOption(index)}
            style={{
              border: "1px solid #137cbd",
              marginBottom: "1.5vh",
              marginRight: "1vw",
              fontSize: "20px",
              color: `${
                props.options[index] === true ? "white" : `${props.textnot}`
              }`,
              backgroundColor: `${
                props.options[index] === true
                  ? "#137cbd"
                  : `${props.backgroundnot}`
              }`,
            }}
          >
            <Typography>{tile}</Typography>
          </Button>
        ))}
      </Grid>
    </div>
  );
};

export default Options;
