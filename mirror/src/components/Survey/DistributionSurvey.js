import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { workouts } from "../../assets/media/workouts";
import { Button } from "@material-ui/core";
// import { useStore } from "../../store/store";
import firebase from "../../store/firebase";
import { useHistory } from "react-router-dom";
import dFinalStyle from "../../style/styled-css/distributionsurvey-style";
import { createDate } from "../../actions/actions";
import { shouldRedirect } from "../../actions/actions";
import { Redirect } from "react-router-dom";

const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
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
        height: "50%",
        width: "50%",
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
  const myOriginalSelection = {
    abs: 0,
    cardio: 0,
    idk: 0,
    deadlift: 0,
    legs: 0,
    mandeadlift: 0,
    pull: 0,
    push: 0,
    run: 0,
    sports: 0,
    squat: 0,
  };
  const classes = useStyles();
  // const [state, dispatch] = useStore();
  const history = useHistory();

  const Selection = dFinalStyle.selection;
  const Parent = dFinalStyle.parent;
  const Title = dFinalStyle.title;

  const [selection, setSelection] = useState(myOriginalSelection);

  const updateSelection = (identifier) => {
    // const updatedSelection = {
    //   ...selection,
    // };

    const newVal = selection[identifier] ? 0 : 1;

    // selection[identifier] = updatedSelection[identifier] ? 0 : 1;
    setSelection({ ...selection, [identifier]: newVal });
  };

  var user = firebase.auth().currentUser;
  var uid_value = "error";

  if (user != null) {
    uid_value = user.uid;
    //console.log(uid_value);
  }

  const sendDataNextPage = () => {
    //console.log(selection);
    db.collection("users")
      //.doc(state.uid)
      .doc(uid_value)
      .collection("ratio")
      .add({
        date: createDate(),
        ...selection,
      })
      .catch(function (error, data) {
        //console.log(error);
        //console.log(data);
      })
      //.then(() => history.push("/weightsurvey"));
      .then(() => {
        //console.log("added data to firebase");
        //history.push("/main");
        history.push("/weightsurvey");
      });
  };

  if (shouldRedirect()) {
    return <Redirect to="/" />;
  }

  return (
    <Parent>
      <Title>
        <h1>Tap on the workouts you accomplished today!</h1>
      </Title>
      <Selection>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={3}>
            {workouts.map((tile) => {
              const myTitle = tile.title;
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
      </Selection>

      <Button
        className={classes.doneTypeStyle}
        variant="contained"
        onClick={sendDataNextPage}
      >
        Done!
      </Button>
    </Parent>
  );
};

export default DistributionSurvey;
