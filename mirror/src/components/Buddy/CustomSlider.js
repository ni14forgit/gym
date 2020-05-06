import React, { useState, useEffect } from "react";
import SmoothSlide from "./SliderForm";
import {
  FormControl,
  FormGroupLabel,
  FormControlLabel,
  Grid,
  FormGroup,
  Typography,
} from "@material-ui/core";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
import Options from "./MultiSelect";
import Switch from "./Switch";
import { SmoothSlider, DiscreteSlider } from "./SliderForm";
import RadioForm from "./RadioForm";
import buddyStyleFinal from "../../style/styled-css/buddy-style";

const SwitchAndSlider = (props) => {
  return (
    <div>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <Switch
            checked={props.isStudent}
            onChange={() => props.setIsStudent(!props.isStudent)}
            name="checkedB"
          />
        </Grid>
        <Grid item>Undergraduate</Grid>
        {/* <Divider color="#137cbd" /> */}
        {props.isStudent ? (
          <RadioForm
            title=""
            options={props.grades}
            select={props.grade}
            setSelect={props.setGrade}
          />
        ) : (
          <div>
            <Typography id="continuous-slider" gutterBottom>
              Age
            </Typography>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs>
                <SmoothSlider
                  disabled={props.isStudent}
                  defaultvalue={20}
                  value={props.age}
                  onChange={props.ageChange}
                  min={15}
                  max={80}
                />
              </Grid>
            </Grid>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default SwitchAndSlider;
