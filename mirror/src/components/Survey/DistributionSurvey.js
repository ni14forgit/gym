import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { workouts, myOriginalSelection } from "../../assets/media/workouts";
import { Button } from "@material-ui/core";
import "./DistributionSurvey.css";
import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import { useHistory } from "react-router-dom";

const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    "& img": {
      background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    },
  },
  gridList: {
    // flexWrap: "nowrap",
    // background: "bottom right 15% no-repeat #46B6AC",
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  boldTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
  },
  notTitle: {
    color: "blue",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  doneTypeStyle: {
    width: "200px",
    height: "60px",
    fontSize: "20px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#3b79e3",
    "&:hover": {
      backgroundColor: "#3b79e3",
    },
  },
}));

function BGImage(props) {
  return (
    <div
      style={{
        background: "url(" + props.bg + ")",
        height: "25%",
        width: "25%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundColor: props.tint,
          zIndex: "100",
          opacity: "0.5",
        }}
      ></div>
    </div>
  );
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100vw",
  height: "100vh",
};

const DistributionSurvey = () => {
  const classes = useStyles();
  const [state, dispatch] = useStore();
  const history = useHistory();

  const [selection, setSelection] = useState(myOriginalSelection);

  const updateSelection = (identifier) => {
    // const updatedSelection = {
    //   ...selection,
    // };

    const newVal = selection[identifier] ? 0 : 1;

    // selection[identifier] = updatedSelection[identifier] ? 0 : 1;
    setSelection({ ...selection, [identifier]: newVal });
  };

  const sendDataNextPage = () => {
    console.log(selection);
    db.collection("users")
      .doc(state.uid)
      .collection("ratio")
      .add({
        date: Date(),
        ...selection,
      })
      .catch(function (error, data) {
        console.log(error);
        console.log(data);
      })
      .then(() => history.push("/weightsurvey"));
  };

  return (
    <div className="exerciseParent">
      <h1 className="titleWorkout">
        Tap on the workouts you accomplished today!
      </h1>
      <div className="selection">
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={3}>
            {workouts.map((tile) => {
              const myTitle = tile.title;
              console.log(myTitle);
              console.log(selection[myTitle]);
              console.log(selection);

              return (
                <GridListTile
                  key={tile.img}
                  onClick={() => updateSelection(tile.title)}
                >
                  {selection[myTitle] === 1 ? (
                    <div style={styles}>
                      <BGImage bg={tile.img} tint="#3b79e3" />
                    </div>
                  ) : (
                    <div style={styles}>
                      <BGImage bg={tile.img} tint="" />
                    </div>
                  )}
                  {/* <img
                  className={classes.imgDrop}
                  src={tile.img}
                  alt={tile.title}
                />
                 */}

                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.boldTitle,
                    }}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      </div>
      <div className="doneButton">
        <Button
          className={classes.doneTypeStyle}
          variant="contained"
          onClick={sendDataNextPage}
        >
          Done!
        </Button>
      </div>
    </div>
  );
};

export default DistributionSurvey;
