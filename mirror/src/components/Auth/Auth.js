import React, { useState, useEffect } from "react";
//import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import StyleData from "../../style/StyleData";
import { makeStyles } from "@material-ui/core/styles";
import "./Auth.css";
import { isValid } from "../../actions/AuthLogic";
import { Button } from "@material-ui/core";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
let mykeyboard;

const myInformation = {
  firstName: {
    placeholder: "first name",
    value: ""
  },
  lastName: {
    placeholder: "last name",
    value: ""
  },
  email: {
    placeholder: "email adddress",
    value: "",
    valid: false
  },
  passwordOne: {
    placeholder: "password",
    value: "",
    valid: false
  },
  passwordTwo: {
    placeholder: "password",
    value: "",
    valid: false
  }
};

const validIdentifiers = new Set(["email", "passwordOne", "passwordTwo"]);

const Auth = () => {
  const [information, setInformation] = useState(myInformation);
  const [locator, setLocator] = useState("email");

  const useStyles = makeStyles(StyleData);
  const classes = useStyles();

  // setLocation method not working :( )

  const onKeyChange = input => {
    //console.log("Input changed", input);
    console.log(locator);
    if (!locator) {
      return;
    }
    const updatedInformation = {
      ...information
    };
    const updatedElement = {
      ...updatedInformation[locator]
    };
    updatedElement.value = input;
    updatedInformation[locator] = updatedElement;
    setInformation(updatedInformation);
  };

  const setLocation = (event, data) => {
    console.log(data);
    setLocator(data);
    console.log(locator);
  };

  const onKeyPress = button => {
    //console.log("Button pressed", button);
  };

  const onChangeDataHandler = (event, inputIdentifier) => {
    const updatedInformation = {
      ...information
    };
    const updatedElement = {
      ...updatedInformation[inputIdentifier]
    };
    updatedElement.value = event.target.value;

    console.log(inputIdentifier);
    if (validIdentifiers.has(inputIdentifier)) {
      //console.log("has element!");
      updatedElement.valid = isValid(updatedElement.value, inputIdentifier);
    }

    updatedInformation[inputIdentifier] = updatedElement;
    setInformation(updatedInformation);
    //console.log(information["email"].value);
    console.log(updatedElement.value);
  };

  const clear = () => {
    mykeyboard.clearInput();
    // setLocator(null);
  };

  const submitHandler = event => {
    console.log(information);
  };

  return (
    <div className="parentContainer">
      <div className="authContainer">
        <form className={classes.formStyle} noValidate autoComplete="off">
          <TextField
            className={classes.inputStyle}
            id="firstName"
            label="first name"
            color="primary"
            value={information["lastName"].value}
            onChange={event => onChangeDataHandler(event, "firstName")}
            onFocus={event => setLocation(event, "firstName")}
            onBlur={() => clear()}
          />
          <TextField
            className={classes.inputStyle}
            id="lastName"
            label="last name"
            value={information["lastName"].value}
            color="primary"
            onChange={event => onChangeDataHandler(event, "lastName")}
            onFocus={() => setLocation("lastName")}
            onBlur={() => clear()}
          />
          <TextField
            className={classes.inputStyle}
            id="email"
            label="duke email"
            color="primary"
            value={information["email"].value}
            onChange={event => onChangeDataHandler(event, "email")}
            onFocus={() => setLocation("email")}
            onBlur={() => clear()}
          />
          <TextField
            className={classes.inputStyle}
            id="passwordOne"
            label="password"
            color="primary"
            value={information["passwordOne"].value}
            type="password"
            onChange={event => onChangeDataHandler(event, "passwordOne")}
            onFocus={() => setLocation("passwordOne")}
            onBlur={() => clear()}
          />
          <TextField
            className={classes.inputStyle}
            id="passwordTwo"
            label="repeat password"
            color="primary"
            value={information["passwordTwo"].value}
            type="password"
            onChange={event => onChangeDataHandler(event, "passwordTwo")}
            onFocus={() => setLocation("passwordTwo")}
            onBlur={() => clear()}
          />
          <Button
            className={classes.loginSignUpButtonStyle}
            variant="outlined"
            color="primary"
            size="medium"
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          {/* <Button
            className={classes.loginSignUpButtonStyle}
            variant="outlined"
            color="primary"
            size="medium"
            onClick={clear}
          ></Button> */}
        </form>
      </div>
      <div className="keyBoardContainer">
        <Keyboard
          onChange={onKeyChange}
          onKeyPress={onKeyPress}
          inputName={"default"}
          keyboardRef={r => (mykeyboard = r)}
        />
      </div>
    </div>
  );
};

export default Auth;
