import React, { useState, useEffect, useRef } from "react";
//import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import StyleData from "../../style/StyleData";
import { makeStyles } from "@material-ui/core/styles";
import "./Auth.css";
import { isValid } from "../../actions/AuthLogic";
import { Button } from "@material-ui/core";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import firebase from "../../store/firebase";

const myInformation = {
  firstName: {
    placeholder: "first name",
    value: "",
  },
  lastName: {
    placeholder: "last name",
    value: "",
  },
  email: {
    placeholder: "email adddress",
    value: "",
    valid: false,
  },
  passwordOne: {
    placeholder: "password",
    value: "",
    valid: false,
  },
  passwordTwo: {
    placeholder: "repeat password",
    value: "",
    valid: false,
  },
};

const validIdentifiers = new Set(["email", "passwordOne", "passwordTwo"]);

const Auth = () => {
  const [information, setInformation] = useState(myInformation);
  const [locator, setLocator] = useState(null);
  const [currentString, setCurrentString] = useState("");
  const keyboard = useRef();

  const useStyles = makeStyles(StyleData);
  const classes = useStyles();

  const onKeyChange = (input) => {
    console.log(input);
    setCurrentString(input);
  };

  useEffect(() => {
    const inputText = () => {
      if (!locator) {
        return;
      }

      console.log("useeffect" + locator);

      const updatedInformation = {
        ...information,
      };
      const updatedElement = {
        ...updatedInformation[locator],
      };
      updatedElement.value = currentString;

      updatedInformation[locator] = updatedElement;
      setInformation(updatedInformation);
      console.log(updatedElement.value);

      // console.log(currentString);
      // console.log(locator);
    };
    inputText();
  }, [currentString]);

  const setLocation = (data) => {
    keyboard.current.setInput(information[data].value);
    setLocator(data);
  };

  const onKeyPress = (button) => {
    //console.log("Button pressed", button);
  };

  const onChangeDataHandler = (event, inputIdentifier) => {
    const updatedInformation = {
      ...information,
    };
    const updatedElement = {
      ...updatedInformation[inputIdentifier],
    };
    updatedElement.value = event.target.value;

    console.log(inputIdentifier);
    if (validIdentifiers.has(inputIdentifier)) {
      updatedElement.valid = isValid(updatedElement.value, inputIdentifier);
    }

    updatedInformation[inputIdentifier] = updatedElement;
    setInformation(updatedInformation);
    console.log(updatedElement.value);
  };

  const elementsArray = [];
  for (let key in myInformation) {
    elementsArray.push({
      id: key,
      placeholder: myInformation[key].placeholder,
    });
  }

  const form = elementsArray.map((formElement) => {
    const isPassword = formElement.id.includes("password");
    console.log(isPassword);
    return (
      <TextField
        key={formElement.id}
        className={classes.inputStyle}
        id={formElement.id}
        label={formElement.placeholder}
        color="primary"
        value={information[formElement.id].value}
        onChange={(event) => onChangeDataHandler(event, formElement.id)}
        onFocus={() => setLocation(formElement.id)}
        type={isPassword ? "password" : null}
        InputProps={{
          className: classes.textInputStyle,
        }}
      />
    );
  });

  const submitSignUpHandler = (event) => {
    const email = information.email.value;
    const password = information.passwordOne.value;
    console.log(email);
    console.log(password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error, data) {
        console.log(error);
        console.log(data);
      })
      .then(console.log("sucessfully signed up user"));
  };

  return (
    <div>
      <div className="headerOverlay"></div>
      <div className="parentContainer">
        <div className="authContainer">
          <form className={classes.formStyle} noValidate autoComplete="off">
            {/* <TextField
            className={classes.inputStyle}
            id="passwordTwo"
            label="repeat password"
            color="primary"
            value={information["passwordTwo"].value}
            type="password"
            onChange={(event) => onChangeDataHandler(event, "passwordTwo")}
            onFocus={() => setLocation("passwordTwo")}
            // onBlur={() => clear()}
          />  */}
            {form}
            <Button
              className={classes.loginSignUpButtonStyle}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={submitSignUpHandler}
            >
              sign up
            </Button>
          </form>
        </div>
        <div className="keyBoardContainer">
          <Keyboard
            onChange={onKeyChange}
            onKeyPress={onKeyPress}
            inputName={"default"}
            keyboardRef={(r) => (keyboard.current = r)}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
