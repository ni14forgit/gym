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
import CustomSlider from "./CustomSlider";

const FRESHMAN = "Freshman";
const SOPHOMORE = "Sophomore";
const JUNIOR = "Junior";
const SENIOR = "Senior";
const GRADUATE = "Grad";

const NONBIN = "Non Binary";
const MALE = "Male";
const FEMALE = "Female";

const genders = [NONBIN, MALE, FEMALE];
const grades = [FRESHMAN, SOPHOMORE, JUNIOR, SENIOR, GRADUATE];
const repetitions = [1, 2, 3, 4, 5, 6, 7];

const Buddy = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [grade, setGrade] = useState(FRESHMAN);
  const [gender, setGender] = useState(NONBIN);
  const [experience, setExperience] = useState(2);
  const [age, setAge] = useState(20);
  const [repetition, setRepetition] = useState(3);

  const Divider = buddyStyleFinal.divider;
  const RowContainer = buddyStyleFinal.rowContainer;

  const experienceChange = (event, newValue) => {
    console.log(newValue);
    setExperience(newValue);
  };

  const experienceTitle = (number) => {
    if (number === 0) {
      return "< 1 years";
    } else if (number === 5) {
      return "> 4 years";
    }
    return String(number) + " years";
  };

  const ageChange = (event, newValue) => {
    console.log(newValue);
    setAge(newValue);
  };

  useEffect(() => {
    setIsStudent(false);
    console.log("age is changed!");
  }, [age]);

  return (
    <div style={{ padding: "2vw" }}>
      <RowContainer>
        <Switch
          checked={isStudent}
          onChange={() => setIsStudent(!isStudent)}
          name="checkedB"
        />
        <Divider color="#137cbd" />
        {isStudent ? (
          <RadioForm
            title=""
            options={grades}
            select={grade}
            setSelect={setGrade}
          />
        ) : (
          <div style={{ width: "20vw" }}>
            <Typography id="continuous-slider" gutterBottom>
              Age
            </Typography>
            <SmoothSlider
              disabled={isStudent}
              defaultvalue={20}
              value={age}
              onChange={ageChange}
              min={15}
              max={80}
            />
          </div>
        )}
      </RowContainer>

      <RadioForm
        title="Gender"
        options={genders}
        select={gender}
        setSelect={setGender}
      />
      <RadioForm
        title="How many times a week do you workout?"
        options={repetitions}
        select={repetition}
        setSelect={setRepetition}
      />

      {/* {isStudent ? null : (
        <div style={{ width: "50vw" }}>
          <Typography id="continuous-slider" gutterBottom>
            age good
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs>
              <SmoothSlider
                disabled={isStudent}
                defaultvalue={20}
                value={age}
                onChange={ageChange}
                min={15}
                max={80}
              />
            </Grid>
          </Grid>
        </div>
      )} */}
      <div style={{ width: "50vw" }}>
        <Typography id="continuous-slider" gutterBottom>
          Years of Experience
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs>
            <DiscreteSlider
              step={1}
              max={5}
              min={0}
              defaultvalue={2}
              value={experience}
              onChange={experienceChange}
              disabled={false}
            />
          </Grid>
          <Grid>
            <h1 style={{ position: "relative", right: "-1vw", top: "-1vh" }}>
              {experienceTitle(experience)}
            </h1>
          </Grid>
        </Grid>
      </div>
      <Options title="Select Your Goals" />
      <Options title="Select Characteristics That Best Describe Yourself" />
    </div>
  );
};

export default Buddy;
