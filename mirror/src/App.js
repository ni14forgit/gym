import React, { useEffect, useState } from "react";

import Background from "./components/Background/Background";
import MainButtons from "./components/Buttons/MainButtons/MainButtons";
import BlueCover from "./components/BlueCover/BlueCover";

import MainScreen from "./components/MainScreen";

import Weight from "./components/Pages/Weight";
import Distribution from "./components/Pages/Distribution";
import Attendance from "./components/Pages/Attendance";

import AuthForm from "./components/Auth/SignUp/Auth";
import LoginForm from "./components/Auth/Login/Login";

import { Route, Link, useHistory } from "react-router-dom";

import { useStore } from "./store/store";

const App = () => {
  const history = useHistory();

  const [state, dispatch] = useStore();
  // const clickLogin = () => {
  //   // history.push("/login");
  // };

  useEffect(() => {
    history.replace("/main");
  }, []);

  return (
    <div>
      {/* <MainScreen login={clickLogin}></MainScreen> */}

      {/* <Route path="/login">
        <AuthForm />
      </Route> */}

      <Route path="/login">
        <LoginForm />
      </Route>

      <Route path="/main">
        <MainScreen />
      </Route>

      {/* <Route path="/weather" render={() => weather} /> */}
    </div>
  );
};

export default App;
