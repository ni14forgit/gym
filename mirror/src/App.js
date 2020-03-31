import React from "react";
import "./App.css";
import { Button, CardMedia, Card, SvgIcon } from "@material-ui/core";
import gym from "./assets/media/gym.mp4";
import HomeIcon from "./assets/icons/homeicon";
import DumbellIcon from "./assets/icons/dumbellicon";
import PieIcon from "./assets/icons/pieicon";
import GraphIcon from "./assets/icons/graphicon";
import WeightIcon from "./assets/icons/weighticon";

import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles({
    buttonStyle: {
      width: "600px",
      height: "200px",
      borderWidth: "3px",
      borderRadius: "2%",
      color: "white",
      fontSize: "20px",
      outlinedPrimary: "white"
    },
    iconStyle: {
      width: 200,
      height: 200,
      fontSize: "large"
    }
  });

  const classes = useStyles();

  const styles = {
    media: {
      // height: 0,
      paddingTop: "56.25%", // 16:9
      "background-size": "cover"
    },
    card: {
      position: "relative"
    },
    overlay: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "black",
      backgroundColor: "white"
    }
  };

  return (
    <div>
      <div className="fullscreen-video-wrap">
        <video type="video/mp4" src={gym} autoPlay="true" loop="true"></video>
      </div>
      <div className="headerOverlay"></div>
      <div className="content-overlay">
        <div className="container">
          <div className="row">
            <div id="dateDiv0" className="column">
              <Button
                className={classes.buttonStyle}
                variant="outlined"
                color="primary"
                size="large"
                startIcon={
                  //<Barchart labelStyle={{ fontSize: "200%" }}></Barchart>
                  //<SvgIcon component={LogoIcon} viewBox="0 0 600 476.6" />
                  <GraphIcon style={{ fontSize: 100 }} />
                }
              ></Button>
            </div>
            <div id="chartDiv0" className="column">
              <Button
                className={classes.buttonStyle}
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<WeightIcon style={{ fontSize: 80 }} />}
              ></Button>
            </div>
          </div>
          <div className="row">
            <div id="dateDiv1" className="column">
              <Button
                className={classes.buttonStyle}
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<PieIcon style={{ fontSize: 80 }} />}
              ></Button>
            </div>
            <div id="chartDiv1" className="column">
              <Button
                className={classes.buttonStyle}
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<DumbellIcon style={{ fontSize: 100 }} />}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
