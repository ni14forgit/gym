import React, { useState, useEffect } from "react";
import Person from "./Matches/Person";
import MatchesData from "./BuddyData";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FinalStyle from "../../style/styled-css/matches-style";
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "left",
    // margin: "auto",
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    // borderRadius: "40px!important",
  },
  gridList: {
    width: "25wh",
    // height: "50vh",
  },
  gridTile: {
    borderRadius: "50%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Matches = () => {
  const classes = useStyles();
  const VerticalCenter = FinalStyle.verticalCenter;
  return (
    <VerticalCenter>
      <GridList className={classes.root} cols={2}>
        {MatchesData.map((tile) => {
          return (
            <Person
              id={tile.id}
              image={tile.profile}
              title={tile.name}
              description={tile.common}
            />
          );
        })}
      </GridList>
      {/* : (
        <Typography
          variant="h1"
          style={{ position: "absolute", margin: "0 auto", right: "40%" }}
        >
          Fill out your profile to see matches!
        </Typography>
      )} */}
    </VerticalCenter>
  );
};

export default Matches;
