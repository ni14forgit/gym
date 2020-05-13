import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100vw",
    height: "100vh",
  },
}));

const mylist = [1, 2, 3, 4];
const Retrieve = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {mylist.map((value) => {
          return <div style={{ height: "50vh", width: "49.5vw" }}>{value}</div>;
        })}
      </GridList>
    </div>
  );
};

export default Retrieve;
// .doc(uid_value)
// //.doc("firebase")
// .collection("ratio")
