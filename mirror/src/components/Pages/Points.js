import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { shouldRedirect, createDate } from "../../actions/actions";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { CancelButton } from "../Buttons/MaterialButton";
import displayFinalStyle from "../../style/styled-css/display-style";
import giftsFinalStyle from "../../style/styled-css/gifts-selection";
import StillBackground from "../Background/StillBackground";
import { points } from "../../assets/media/backgrounds";
import BGImage from "../../style/BGImage";
import { makeStyles } from "@material-ui/core/styles";
import { gifts } from "../../assets/media/gifts";
import firebase from "../../store/firebase";
import DoneButton from "../Buttons/doneButton";

const db = firebase.firestore();
var uid_value = "error";

const Points = () => {
  const history = useHistory();

  const myOriginalSelection = {
    gatorade: 0,
    huel: 0,
    hydroflask: 0,
    massage: 0,
    banana: 0,
  };

  const [selection, setSelection] = useState(myOriginalSelection);
  const [scorepoints, setScorePoints] = useState("0");

  useEffect(() => {
    var user = firebase.auth().currentUser;
    if (user != null) {
      uid_value = user.uid;
      //console.log(uid_value);
      //console.log("uid boy");
    } else {
      console.log("error rror");
    }
    var scoreRef = db.collection("users").doc(uid_value);
    scoreRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          //console.log("Document data:", doc.data());
          //console.log("score" + doc.data().score);
          var initialscore = doc.data().score;
          setScorePoints(initialscore);
        } else {
          // doc.data() will be undefined in this case
          // console.log("No such document!");
        }
      })
      .catch(function (error) {
        //console.log("Error getting document:", error);
      });
  }, []);

  const updateSelection = (identifier, cost) => {
    const newVal = selection[identifier] ? 0 : 1;

    if (newVal) {
      if (cost <= scorepoints) {
        setScorePoints(scorepoints - cost);
        setSelection({ ...selection, [identifier]: newVal });
      } else {
        //console.log("you can't afford");
      }
    } else {
      setSelection({ ...selection, [identifier]: newVal });
      setScorePoints(scorepoints + cost);
    }
  };

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "50vw",
    height: "100vh",
  };

  const scoreTitle = "Points Available: " + scorepoints;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "#00000000",
    },
    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
      borderRadius: "40px!important",
    },
    tile: {
      borderRadius: "25px!important",
    },
    boldTitle: {
      color: "white",
      fontWeight: "bold",
      fontSize: "24px",
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

  const classes = useStyles();

  if (shouldRedirect()) {
    return <Redirect to="/" />;
  }

  const Container = displayFinalStyle.containerweight;
  const ExitButton = displayFinalStyle.exitButton;
  const Instruction = giftsFinalStyle.instruction;
  const DoneButtonStyle = displayFinalStyle.doneButton;
  const Selection = giftsFinalStyle.selection;
  const Title = giftsFinalStyle.title;

  const createBoughtItems = () => {
    const selToPush = [];
    const keys = Object.keys(selection);
    for (const key of keys) {
      if (selection[key] > 0) {
        selToPush.push(key);
      }
    }
    return selToPush;
  };

  const purchase = () => {
    db.collection("users")
      .doc(uid_value)
      .update({
        score: scorepoints,
        date: createDate(),
        items: createBoughtItems(),
      })
      .catch(function (error, data) {
        // console.log(error);
        // console.log(data);
      });
    // .then((res) => {
    //   console.log(`Document updated at ${res.updateTime}`);
    // });
    history.push("/");
    //if user buys twice in one day.
    // create new page saying that they should go to the attendant to pick up
    //that day only
    //fix signup login on how they get points
  };

  return (
    <Container>
      <StillBackground image={points} color="#2cb205" />
      <div>
        <Instruction>
          <h1>Collect Prizes at Desk</h1>
        </Instruction>
        <ExitButton>
          <CancelButton color="white"></CancelButton>
        </ExitButton>
        {/* //{scoreTitle} */}
        <Title>{scorepoints}</Title>
      </div>

      <Selection>
        <div className={classes.root}>
          <GridList cellHeight={300} className={classes.gridList} cols={3.5}>
            {gifts.map((tile) => {
              const myTitle = tile.title;
              return (
                <GridListTile
                  className={classes.tile}
                  key={tile.img}
                  onClick={() => updateSelection(tile.title, tile.value)}
                >
                  {selection[myTitle] === 1 ? (
                    <div style={styles}>
                      <BGImage bg={tile.img} tint="#2cb205" />
                    </div>
                  ) : (
                    <div style={styles}>
                      <BGImage bg={tile.img} tint="" />
                    </div>
                  )}

                  <GridListTileBar
                    title={tile.title + " - " + tile.value}
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
      <DoneButtonStyle>
        <DoneButton
          submitContinue={purchase}
          selection={selection}
          score={scorepoints}
        />
      </DoneButtonStyle>
    </Container>
  );
};

export default Points;
