import React, { useState } from "react";
import authstyle from "../../style/styled-css/auth-style";
import { Typography, Button } from "@material-ui/core";
import LoginForm from "./Login/Login";
import SignupForm from "./SignUp/Signup";
import { CancelButton } from "../Buttons/MaterialButton";

const Auth = () => {
  const NavBar = authstyle.navBar;
  const Overlay = authstyle.overlay;
  const ExitButton = authstyle.exitButton;
  const [login, setLogin] = useState(true);
  return (
    <div>
      <Overlay>
        <NavBar>
          <Button onClick={() => setLogin(true)}>
            <Typography
              style={{
                color: "white",
                padding: "1vh",
                fontWeight: `${login ? "bold" : "normal"}`,
              }}
              variant="h5"
            >
              Log In
            </Typography>
          </Button>
          <Button onClick={() => setLogin(false)}>
            <Typography
              style={{
                color: "white",
                padding: "1vh",
                fontWeight: `${!login ? "bold" : "normal"}`,
              }}
              variant="h5"
            >
              Sign Up
            </Typography>
          </Button>
        </NavBar>
        <ExitButton>
          <CancelButton color="white"></CancelButton>
        </ExitButton>
        {login ? <LoginForm /> : <SignupForm />}
      </Overlay>
    </div>
  );
};

export default Auth;
