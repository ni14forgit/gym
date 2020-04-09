import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import StyleData from "../../../style/StyleData";
import { makeStyles } from "@material-ui/core/styles";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import firebase from "../../../store/firebase";
import { useStore } from "../../../store/store";
import { useHistory } from "react-router-dom";

const Login = () => {
  const useStyles = makeStyles(StyleData);
  const classes = useStyles();

  const temporarySetError = () => {
    setErrorMessage(true);
    setTimeout(function () {
      setErrorMessage(false);
    }, 4000);
  };

  const submitSignUpHandler = () => {
    const emailFirebase = information.email.value;
    const passwordFirebase = information.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(emailFirebase, passwordFirebase)
      .then((res) => {
        console.log("wemadeit");
        console.log(res);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        setInformation(myInformation);
        temporarySetError();
      });

    console.log(information);
  };

  const myInformation = {
    email: {
      placeholder: "email adddress",
      value: "",
      valid: true,
      helperText: null,
    },
    password: {
      placeholder: "password",
      value: "",
      valid: true,
      helperText: null,
    },
  };

  const email = "email";
  const password = "password";

  const [information, setInformation] = useState(myInformation);
  const [locator, setLocator] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  const setLocation = (data) => {
    // keyboard.current.setInput(information[data].value);
    setLocator(data);
  };

  const onChangeDataHandler = (event, inputIdentifier) => {
    const updatedInformation = {
      ...information,
    };
    const updatedElement = {
      ...updatedInformation[inputIdentifier],
    };

    updatedElement.value = event.target.value;
    //updatedInformation[inputIdentifier].value = event.target.value;

    //console.log(inputIdentifier);
    // const [helperString, validity, bothPassword] = validationAuth(
    //   updatedInformation,
    //   inputIdentifier
    // );

    //console.log("bothPassword" + bothPassword);

    // updatedElement.valid = validity;
    // updatedElement.displayValid = validity;
    // updatedElement.helperText = helperString;

    updatedInformation[inputIdentifier] = updatedElement;

    setInformation(updatedInformation);
    //console.log(updatedElement.value);
  };

  return (
    <div>
      <div className="headerAuthOverlay"></div>
      <div className="parentContainer">
        <div className="authContainer">
          <form className={classes.formStyle} noValidate autoComplete="off">
            <TextField
              key={email}
              className={classes.inputStyle}
              id={email}
              error={!information.email.valid}
              label={information.email.placeholder}
              color="primary"
              value={information.email.value}
              onChange={(event) => onChangeDataHandler(event, email)}
              onFocus={() => setLocation(email)}
              helperText={information.email.helperText}
              InputProps={{
                className: classes.textInputStyle,
              }}
            />

            <TextField
              key={password}
              className={classes.inputStyle}
              id={password}
              error={!information.password.valid}
              label={information.password.placeholder}
              color="primary"
              type={"password"}
              value={information.password.value}
              onChange={(event) => onChangeDataHandler(event, password)}
              onFocus={() => setLocation(password)}
              helperText={information.password.helperText}
              InputProps={{
                className: classes.textInputStyle,
              }}
            />

            <Button
              className={classes.AuthButtonStyle}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={submitSignUpHandler}
            >
              login
            </Button>
          </form>
          {errorMessage ? (
            <div className={classes.formStyle}>
              <h1>Incorrect login, please try again.</h1>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
