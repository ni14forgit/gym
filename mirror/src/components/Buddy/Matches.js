import React, { useState, useEffect } from "react";
import Person from "./Matches/Person";
import MatchesData from "./BuddyData";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import firebase from "../../store/firebase";

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
  const [imageData, setImageData] = useState("");
  const VerticalCenter = FinalStyle.verticalCenter;
  // console.log("state of friends empty list");
  // console.log(state["friends"]);
  // var user = firebase.auth().currentUser;

  // console.log("this is opt out status");
  // console.log(state.profile.optOutStatus);

  return (
    <VerticalCenter>
      {state.profile.optOutStatus ? (
        <Typography
          style={{
            fontWeight: "bold",
            color: "#137cbd",
            margin: "auto",
            textAlign: "center",
          }}
          variant="h4"
        >
          Please opt in on your buddy form to be matched with others!
        </Typography>
      ) : null}

      {state["friends"].length === 0 && !state.profile.optOutStatus ? (
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
      ) : null}

      {!(state["friends"].length === 0 || state.profile.optOutStatus) ? (
        <div>
          <div style={{ paddingBottom: "4vh" }}>
            <Typography
              style={{
                fontWeight: "bold",
                color: "#137cbd",
                margin: "auto",
                textAlign: "center",
              }}
              variant="h5"
            >
              Find out what you share in common with your matches!
            </Typography>
          </div>
          <GridList className={classes.root} cols={2}>
            {state["friends"].map((tile, ind) => {
              return (
                <Person
                  id={ind}
                  // image={MatchesData[ind % 3].profile}
                  image={tile["image"]}
                  title={tile["name"]}
                  description={tile["similarity"]}
                />
              );
            })}
          </GridList>
        </div>
      ) : null}
    </VerticalCenter>
  );
};

export default Matches;
