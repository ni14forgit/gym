import React, { useState, useRef, useEffect } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  inputStyle,
  buttonStyle,
} from "../../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import firebase from "../../../store/firebase";
import { useStore } from "../../../store/store";
import { useHistory } from "react-router-dom";
import authStyleFinal from "../../../style/styled-css/auth-style";
import { createDate } from "../../../actions/actions";
import CancelButton from "../../Buttons/cancelButton";

const KeyBoardContainer = authStyleFinal.keyBoardContainer;
const Overlay = authStyleFinal.overlay;
const ParentContainer = authStyleFinal.parentContainer;
const Container = authStyleFinal.container;
const Error = authStyleFinal.error;
const ExitButton = authStyleFinal.exitButton;

const Login = () => {
  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  const inputstyle = makeStyles(inputStyle);
  const inputstyle_data = inputstyle();

  const [state, dispatch] = useStore();
  const history = useHistory();

  const keyboard = useRef();

  const onKeyChange = (input) => {
    setCurrentString(input);
  };

  const db = firebase.firestore();

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
        //console.log("wemadeit");
        //console.log(res);
        return res.user.uid;
      })
      .then((uid) => {
        dispatch("SET_UID_USER", uid);
        db.collection("users")
          .doc(uid)
          .collection("attendance")
          .add({ date: createDate(), value: 1 });

        //history.push("/main");
        history.push("/distributionsurvey");
        return;
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log(errorCode);
        //console.log(errorMessage);

        setInformation(myInformation);
        temporarySetError();
      });

    //console.log(information);
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
  const [currentString, setCurrentString] = useState("");

  useEffect(() => {
    const inputText = () => {
      if (!locator) {
        return;
      }

      //console.log("useeffect" + locator);

      const updatedInformation = {
        ...information,
      };
      const updatedElement = {
        ...updatedInformation[locator],
      };
      updatedElement.value = currentString;

      updatedInformation[locator] = updatedElement;
      setInformation(updatedInformation);
      //console.log(updatedElement.value);

      // console.log(currentString);
      // console.log(locator);
    };
    inputText();
  }, [currentString]);

  const setLocation = (data) => {
    keyboard.current.setInput(information[data].value);
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

    updatedInformation[inputIdentifier] = updatedElement;

    setInformation(updatedInformation);
    //console.log(updatedElement.value);
  };

  return (
    <div>
      <Overlay>
        <ExitButton>
          <CancelButton></CancelButton>
        </ExitButton>
        <ParentContainer>
          <Container>
            <form
              className={inputstyle_data.form}
              noValidate
              autoComplete="off"
            >
              <TextField
                key={email}
                className={inputstyle_data.input}
                id={email}
                error={!information.email.valid}
                label={information.email.placeholder}
                color="primary"
                value={information.email.value}
                onChange={(event) => onChangeDataHandler(event, email)}
                onFocus={() => setLocation(email)}
                helperText={information.email.helperText}
                InputProps={{
                  className: inputstyle_data.text,
                }}
              />

              <TextField
                key={password}
                className={inputstyle_data.input}
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
                  className: inputstyle_data.text,
                }}
              />

              <Button
                className={buttonstyle_data.authpage}
                variant="outlined"
                color="primary"
                size="medium"
                onClick={submitSignUpHandler}
              >
                login
              </Button>
            </form>
            {errorMessage ? (
              <Error>
                <h1>Incorrect login, please try again.</h1>
              </Error>
            ) : null}
          </Container>
          <KeyBoardContainer>
            <Keyboard
              onChange={onKeyChange}
              inputName={"default"}
              keyboardRef={(r) => (keyboard.current = r)}
            />
          </KeyBoardContainer>
        </ParentContainer>
      </Overlay>
    </div>
  );
};

export default Login;
