import React, { useState, useEffect, useRef } from "react";
//import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import {
  inputStyle,
  buttonStyle,
} from "../../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import { validationAuth } from "./AuthLogic";
import { Button } from "@material-ui/core";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import firebase from "../../../store/firebase";
import { useStore } from "../../../store/store";
import { useHistory } from "react-router-dom";
import authStyleFinal from "../../../style/styled-css/auth-style";
import { createDate } from "../../../actions/actions";

const db = firebase.firestore();

const KeyBoardContainer = authStyleFinal.keyBoardContainer;
const Overlay = authStyleFinal.overlay;
const ParentContainer = authStyleFinal.parentContainer;
const Container = authStyleFinal.container;

const Auth = () => {
  const myInformation = {
    firstName: {
      placeholder: "first name",
      value: "",
      valid: false,
      displayValid: true,
      helperText: null,
    },
    lastName: {
      placeholder: "last name",
      value: "",
      valid: false,
      displayValid: true,
      helperText: null,
    },
    email: {
      placeholder: "email adddress",
      value: "",
      valid: false,
      displayValid: true,
      helperText: null,
    },
    passwordOne: {
      placeholder: "password",
      value: "",
      valid: false,
      displayValid: true,
      helperText: null,
    },
    passwordTwo: {
      placeholder: "repeat password",
      value: "",
      valid: false,
      displayValid: true,
      helperText: null,
    },
  };

  const [state, dispatch] = useStore();
  const history = useHistory();

  const [information, setInformation] = useState(myInformation);
  const [locator, setLocator] = useState(null);
  const [currentString, setCurrentString] = useState("");
  const keyboard = useRef();

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  const inputstyle = makeStyles(inputStyle);
  const inputstyle_data = inputstyle();

  const onKeyChange = (input) => {
    setCurrentString(input);
  };

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
      updatedInformation[locator].value = currentString;

      const [helperString, validity, bothPassword] = validationAuth(
        updatedInformation,
        locator
      );

      updatedElement.valid = validity;
      updatedElement.displayValid = validity;
      updatedElement.helperText = helperString;

      updatedInformation[locator] = updatedElement;

      if (bothPassword) {
        updatedInformation["passwordOne"]["valid"] = true;
        updatedInformation["passwordTwo"]["valid"] = true;
        updatedInformation["passwordOne"]["displayValid"] = true;
        updatedInformation["passwordTwo"]["displayValid"] = true;
        updatedInformation["passwordOne"]["helperText"] = null;
        updatedInformation["passwordTwo"]["helperText"] = null;
      }

      setInformation(updatedInformation);
      //console.log(updatedElement.value);

      // console.log(currentString);
      // console.log(locator);
    };
    inputText();
  }, [currentString]);

  const onChangeDataHandler = (event, inputIdentifier) => {
    const updatedInformation = {
      ...information,
    };
    const updatedElement = {
      ...updatedInformation[inputIdentifier],
    };

    updatedElement.value = event.target.value;
    keyboard.current.setInput(event.target.value);
    updatedInformation[inputIdentifier].value = event.target.value;

    //console.log(inputIdentifier);
    const [helperString, validity, bothPassword] = validationAuth(
      updatedInformation,
      inputIdentifier
    );

    updatedElement.valid = validity;
    updatedElement.displayValid = validity;
    updatedElement.helperText = helperString;

    updatedInformation[inputIdentifier] = updatedElement;

    if (bothPassword) {
      updatedInformation["passwordOne"]["valid"] = true;
      updatedInformation["passwordTwo"]["valid"] = true;
      updatedInformation["passwordOne"]["displayValid"] = true;
      updatedInformation["passwordTwo"]["displayValid"] = true;
      updatedInformation["passwordOne"]["helperText"] = null;
      updatedInformation["passwordTwo"]["helperText"] = null;
    }

    setInformation(updatedInformation);
    //console.log(updatedElement.value);
  };

  const setLocation = (data) => {
    keyboard.current.setInput(information[data].value);
    setLocator(data);
  };

  const elementsArray = [];
  for (let key in information) {
    elementsArray.push({
      id: key,
      placeholder: information[key].placeholder,
      isValid: information[key].displayValid,
      helperText: information[key].helperText,
    });
  }

  const form = elementsArray.map((formElement) => {
    const isPassword = formElement.id.includes("password");
    //console.log(isPassword);
    return (
      <TextField
        key={formElement.id}
        className={inputstyle_data.input}
        id={formElement.id}
        error={!formElement.isValid}
        label={formElement.placeholder}
        color="primary"
        value={information[formElement.id].value}
        onChange={(event) => onChangeDataHandler(event, formElement.id)}
        onFocus={() => setLocation(formElement.id)}
        type={isPassword ? "password" : null}
        helperText={formElement.helperText}
        InputProps={{
          className: inputstyle_data.text,
        }}
      />
    );
  });

  const submitSignUpHandler = (event) => {
    //console.log(information);

    var isError = false;

    const updatedInformation = {
      ...information,
    };

    for (let key in information) {
      //console.log(key);
      if (information[key].valid !== information[key].displayValid) {
        const updatedElement = {
          ...updatedInformation[key],
        };
        updatedElement.displayValid = false;
        updatedElement.helperText = "please fill this input";

        updatedInformation[key] = updatedElement;
      }

      if (!information[key].valid) {
        isError = true;
      }
    }

    setInformation(updatedInformation);

    //console.log(information);

    if (isError) {
      //console.log("error occurred");
      return;
    }

    const email = information.email.value;
    const password = information.passwordOne.value;
    const firstName = information.firstName.value;
    const lastName = information.lastName.value;

    // console.log("this is myinformation" + myInformation["firstName"].value);
    // console.log("this is myinformation" + myInformation["lastName"].value);
    // console.log("this is myinformation" + myInformation["email"].value);
    // console.log("this is myinformation" + myInformation["passwordOne"].value);
    // console.log("this is myinformation" + myInformation["passwordTwo"].value);

    const emptyInformation = {
      ...information,
    };

    for (let key in emptyInformation) {
      const emptyElement = {
        ...emptyInformation[key],
      };
      emptyElement.value = "";
      emptyElement.valid = false;
      emptyElement.displayValid = true;
      emptyInformation[key] = emptyElement;
    }

    // console.log("empty NEW" + emptyInformation.firstName.value);

    setInformation(emptyInformation);

    //console.log(email);
    //console.log(password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error, data) {
        //console.log(error);
        //console.log(data);
      })
      .then((cred) => {
        //console.log("sucessfully signed up user");
        console.log(cred);
        return cred.user.uid;
      })
      .then((uid) => {
        db.collection("users")
          .doc(uid)
          .collection("attendance")
          .add({ date: createDate(), value: 1 });
        return;
      })
      .then(() => {
        var user = firebase.auth().currentUser;
        const x = user.updateProfile({
          displayName: firstName + " " + lastName,
        });
        //console.log(user.providerData.displayName);
        return x;
      })
      .then((something) => {
        history.push("/distributionsurvey");
        //history.push("/distributionsurvey");
      });
  };

  return (
    <div>
      <Overlay />
      <ParentContainer>
        <Container>
          <form className={inputstyle_data.form} noValidate autoComplete="off">
            {form}
            <Button
              className={buttonstyle_data.authpage}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={submitSignUpHandler}
            >
              sign up
            </Button>
          </form>
        </Container>
        <KeyBoardContainer>
          <Keyboard
            onChange={onKeyChange}
            inputName={"default"}
            keyboardRef={(r) => (keyboard.current = r)}
          />
        </KeyBoardContainer>
      </ParentContainer>
    </div>
  );
};

export default Auth;
