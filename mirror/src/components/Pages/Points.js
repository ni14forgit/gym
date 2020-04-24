import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { shouldRedirect } from "../../actions/actions";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import CancelButton from "../Buttons/cancelButton";
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

const Points = () => {
  const history = useHistory();

  var user = firebase.auth().currentUser;
  var uid_value = "error";
  if (user != null) {
    uid_value = user.uid;
    console.log(uid_value);
    //console.log("uid boy");
  } else {
    console.log("error rror");
  }

  const myOriginalSelection = {
    gatorade: 0,
    huel: 0,
    hydroflask: 0,
    massage: 0,
    banana: 0,
  };

  const [selection, setSelection] = useState(myOriginalSelection);
  const [scorepoints, setScorePoints] = useState(10);

  const updateSelection = (identifier, cost) => {
    const newVal = selection[identifier] ? 0 : 1;

    if (newVal) {
      if (cost <= scorepoints) {
        setScorePoints(scorepoints - cost);
        setSelection({ ...selection, [identifier]: newVal });
      } else {
        console.log("you can't afford");
      }
    } else {
      setSelection({ ...selection, [identifier]: newVal });
      setScorePoints(scorepoints + cost);
    }
  };

  var scoreRef = db.collection("users").doc(uid_value);
  scoreRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log("score" + doc.data().score);
        setScorePoints(doc.data().score);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setScorePoints("WRONG");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });

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

  // if (shouldRedirect()) {
  //   return <Redirect to="/" />;
  // }

  const Container = displayFinalStyle.containerweight;
  const ExitButton = displayFinalStyle.exitButton;
  const HeaderStyleCool = displayFinalStyle.headerstylecool;
  const DoneButtonStyle = displayFinalStyle.doneButton;
  const Selection = giftsFinalStyle.selection;
  const Title = giftsFinalStyle.title;

  const purchase = () => {
    //purchase items, update firebase with items, new points
    // create new page saying that they should go to the attendant to pick up
    //that day only
  };

  return (
    <Container>
      <StillBackground image={points} color="#2cb205" />
      <div>
        <HeaderStyleCool>
          <h1>Click to Redeem!</h1>
        </HeaderStyleCool>
        <ExitButton>
          <CancelButton></CancelButton>
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
