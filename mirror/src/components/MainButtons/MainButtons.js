import React from "react";
import "./MainButtons.css";
import { Button } from "@material-ui/core";
import {
  DumbellIcon,
  PieIcon,
  GraphIcon,
  WeightIcon
} from "../../assets/icons/icons";
import StyleData from "../../style/StyleData";
import { makeStyles } from "@material-ui/core/styles";

const MainButtons = () => {
  const useStyles = makeStyles(StyleData);

  const classes = useStyles();

  return (
    <div>
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
                  <GraphIcon style={{ fontSize: 100, color: "#6e10e5" }} />
                }
              ></Button>
            </div>
            <div id="chartDiv0" className="column">
              <Button
                className={classes.buttonStyle}
                variant="outlined"
                color="primary"
                size="large"
                startIcon={
                  <WeightIcon style={{ fontSize: 80, color: "#f68b27" }} />
                }
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
                startIcon={
                  <PieIcon style={{ fontSize: 80, color: "#2cb205" }} />
                }
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
};

export default MainButtons;
