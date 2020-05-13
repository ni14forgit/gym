import React, { useState, useEffect } from "react";
import Person from "./Matches/Person";
import MatchesData from "./BuddyData";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FinalStyle from "../../style/styled-css/matches-style";
import { useStore } from "../../store/store";
const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
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
  const [state, dispatch] = useStore();
  const VerticalCenter = FinalStyle.verticalCenter;
  console.log("state of friends empty list");
  console.log(state["friends"]);
  return (
    <VerticalCenter>
      {state["friends"] === [] ? (
        <GridList className={classes.root} cols={2}>
          {state["friends"].map((tile, ind) => {
            return (
              <Person
                id={ind}
                image={MatchesData[ind % 3].profile}
                title={tile["name"]}
                description={tile["similarity"]}
              />
            );
          })}
        </GridList>
      ) : (
        <Typography
          style={{
            fontWeight: "bold",
            color: "#137cbd",
            margin: "auto",
            textAlign: "center",
          }}
          variant="h4"
        >
          No matches for you yet! Come by later!
        </Typography>
      )}
    </VerticalCenter>
  );
};

export default Matches;
