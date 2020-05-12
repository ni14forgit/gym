import React, { useState, useEffect } from "react";
import SmoothSlide from "./Form/SliderForm";
import { Button, Typography, makeStyles, Paper } from "@material-ui/core";
import {
  createDate,
  withinMonth,
  createMonthDate,
} from "../../actions/actions";
import Options from "./Form/MultiSelect";
import Switch from "./Form/Switch";
import { SmoothSlider, DiscreteSlider } from "./Form/SliderForm";
import RadioForm from "./Form/RadioForm";
import buddyStyleFinal from "../../style/styled-css/buddy-style";
import { buttonStyle } from "../../style/material-styles/totalStyles";
import firebase from "../../store/firebase";
import { useStore } from "../../store/store";

const db = firebase.firestore();

const FRESHMAN = "Freshman";
const SOPHOMORE = "Sophomore";
const JUNIOR = "Junior";
const SENIOR = "Senior";
const GRADUATE = "Grad";

const NONBIN = "Non Binary";
const MALE = "Male";
const FEMALE = "Female";

const goals = [
  "get a beach bod",
  "eat healthier",
  "lift a certain amount",
  "reduce stress",
];

const characteristics = [
  "hardworking",
  "determined",
  "light",
  "comical",
  "strenuous",
];

// const genders = [NONBIN, MALE, FEMALE];
const grades = [FRESHMAN, SOPHOMORE, JUNIOR, SENIOR, GRADUATE];
const repetitions = [1, 2, 3, 4, 5, 6, 7];

const Form = (props) => {
  const [state, dispatch] = useStore();

  const convertDataToDict = (input) => {
    const len = input.length;
    const dict = {};
    for (var i = 0; i < len; i++) {
      dict[i] = false;
    }
    return dict;
  };

  const [isStudent, setIsStudent] = useState(true);
  const [grade, setGrade] = useState(FRESHMAN);
  const [experience, setExperience] = useState(2);
  const [age, setAge] = useState(20);
  const [repetition, setRepetition] = useState(3);
  const [goalsOptions, setGoalsOptions] = useState(convertDataToDict(goals));
  const [date, setDate] = useState(new Date());
  const [characterOptions, setCharacterOptions] = useState(
    convertDataToDict(characteristics)
  );
  const [mistake, setMistake] = useState(false);

  const Divider = buddyStyleFinal.divider;
  const RowContainer = buddyStyleFinal.rowContainer;
  const ColumnContainer = buddyStyleFinal.columnContainer;
  const HorizontalDivider = buddyStyleFinal.horizontalDivider;
  const ParentBackground = buddyStyleFinal.parentBackground;
  const Message = buddyStyleFinal.message;

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  var user = firebase.auth().currentUser;
  var uid_value = "error";

  if (user != null) {
    uid_value = user.uid;
    //console.log(uid_value);
  }

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

  const ageTitle = (number) => {
    if (number === 70) {
      return " 70+ years";
    }
    return String(number) + " years";
  };

  const ageChange = (event, newValue) => {
    console.log(newValue);
    setAge(newValue);
  };

  useEffect(() => {
    const convertFireBaseToDict = (input, firedata) => {
      const len = input.length;
      const dict = {};
      for (var i = 0; i < firedata.length; i++) {
        dict[firedata[i]] = true;
      }
      for (var i = 0; i < len; i++) {
        if (!(i in dict)) {
          dict[i] = false;
        }
      }
      return dict;
    };
    const profile = state.profile;
    setIsStudent(profile.studentStatus);
    setGrade(profile.gradeStatus);
    setExperience(profile.experienceStatus);
    setAge(profile.ageStatus);
    setRepetition(profile.repetitionStatus);
    setCharacterOptions(
      convertFireBaseToDict(characteristics, profile.characteristicStatus)
    );
    setGoalsOptions(convertFireBaseToDict(goals, profile.goalStatus));
    setDate(profile.profiledate);
  }, []);

  const DictToList = (input) => {
    const keys = Object.keys(input);
    var listToSend = [];
    for (const key of keys) {
      if (input[key]) {
        listToSend.push(key);
      }
    }
    return listToSend;
  };

  async function waitedMonth() {
    const result = await db
      .collection("users")
      .doc(uid_value)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          const myprofiledate = doc.data().profiledate;
          if (myprofiledate) {
            console.log("hehe");
            if (!withinMonth(myprofiledate)) {
              console.log(myprofiledate);
              console.log("lololol");
              return true;
            }
          } else {
            console.log("am i true");
            return true;
          }
        } else {
          console.log("No such document!");
        }
        return false;
      });

    return result;
  }

  async function submitForm() {
    const bool = await waitedMonth();
    if (bool) {
      console.log("happened");
      db.collection("users")
        .doc(uid_value)
        .update({
          studentStatus: isStudent,
          gradeStatus: grade,
          experienceStatus: experience,
          ageStatus: age,
          repetitionStatus: repetition,
          characteristicStatus: DictToList(characterOptions),
          goalStatus: DictToList(goalsOptions),
          profiledate: createDate(),
          filledForm: true,
        });
      props.sendToMain();
    } else {
      setMistake(true);
    }
  }

  return (
    <div
      style={{
        position: "relative",
        color: `${props.color}`,
      }}
    >
      <ColumnContainer color="">
        <Message>
          <Typography
            style={{ fontWeight: mistake ? "bold" : "normal" }}
            variant={mistake ? "h5" : "h6"}
          >
            {withinMonth(date)
              ? "Cannot Update Till: " + createMonthDate(date)
              : null}
          </Typography>
        </Message>
        <Typography variant="h4" style={{ margin: "auto" }}>
          About Yourself
        </Typography>
        <RowContainer>
          <Switch setIsProp={setIsStudent} isProp={isStudent} title="Student" />
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
              <Typography variant="h6" id="continuous-slider" gutterBottom>
                Age
              </Typography>
              <SmoothSlider
                disabled={isStudent}
                defaultvalue={20}
                value={age}
                onChange={ageChange}
                min={15}
                max={70}
              />
            </div>
          )}
          {isStudent ? null : (
            <h2 style={{ position: "relative", right: "-2vw" }}>
              {ageTitle(age)}
            </h2>
          )}
        </RowContainer>
        <RowContainer>
          {/* <RadioForm
          title="Gender"
          options={genders}
          select={gender}
          setSelect={setGender}
        /> */}
          {/* <Divider color="#137cbd" /> */}
          <RadioForm
            title="How many times a week do you workout?"
            options={repetitions}
            select={repetition}
            setSelect={setRepetition}
          />
          <Divider color="#137cbd" />
          <div>
            <Typography variant="h6" id="continuous-slider" gutterBottom>
              How long have you consistently worked out?
            </Typography>
            <div style={{ width: "20vw" }}>
              <DiscreteSlider
                step={1}
                max={5}
                min={0}
                defaultvalue={2}
                value={experience}
                onChange={experienceChange}
                disabled={false}
              />
            </div>
          </div>
          <h2 style={{ position: "relative", right: "-2vw" }}>
            {experienceTitle(experience)}
          </h2>
        </RowContainer>
        <Options
          data={goals}
          options={goalsOptions}
          setOptions={setGoalsOptions}
          title="Your Goals"
          backgroundnot="#FCD8F4"
          textnot="#137cbd"
        />
        <Options
          data={characteristics}
          options={characterOptions}
          setOptions={setCharacterOptions}
          title="Characteristics That Best Describe Yourself"
          backgroundnot="#FCD8F4"
          textnot="#137cbd"
        />

        <HorizontalDivider color="#137cbd" />

        <Typography variant="h6">
          Your profile along with other metrics are used to determine potential
          matches for workout partners!
        </Typography>
        <Typography variant="h6">
          You may only update your profile at most once every 30 days. Please
          note that we are a safe space and to be considerate of others!
        </Typography>
        <HorizontalDivider color="#137cbd" />
        <Button onClick={submitForm} className={buttonstyle_data.buddy}>
          <Typography style={{ fontWeight: "bold" }} variant="h5">
            Submit
          </Typography>
        </Button>
      </ColumnContainer>
    </div>
  );
};

export default Form;
