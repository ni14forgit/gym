import React, { useEffect, useState } from "react";

import MainScreen from "./components/MainScreen";

import Weight from "./components/Pages/Weight";
import Distribution from "./components/Pages/Distribution";
import Attendance from "./components/Pages/Attendance";

import AuthForm from "./components/Auth/SignUp/Auth";
import LoginForm from "./components/Auth/Login/Login";

import StillBackground from "./components/Background/StillBackground";

import { Route, Link, useHistory } from "react-router-dom";

import DistributionSurvey from "./components/Survey/DistributionSurvey";
import WeightSurvey from "./components/Survey/WeightSurvey";

import { useStore } from "./store/store";

const App = () => {
  const history = useHistory();

  const [state, dispatch] = useStore();
  // const clickLogin = () => {
  //   // history.push("/login");
  // };

  useEffect(() => {
    history.replace("/main");
    //history.replace("/stillbackground");
    //history.replace("/distributionsurvey");
    //history.replace("/attendance");
    //history.replace("/weightsurvey");
    //history.replace("/distribution");
    //history.replace("/weight");
    //history.replace("/signup");
  }, []);

  return (
    <div>
      {/* <MainScreen login={clickLogin}></MainScreen> */}

      <Route path="/signup">
        <AuthForm />
      </Route>

      <Route path="/weight">
        <Weight />
      </Route>

      {/* <Route path="/stillbackground">
        <StillBackground image={i} color="#6e10e5" />
      </Route> */}

      <Route path="/attendance">
        <Attendance />
      </Route>

      <Route path="/weightsurvey">
        <WeightSurvey />
      </Route>

      <Route path="/distribution">
        <Distribution></Distribution>
      </Route>

      <Route path="/login">
        <LoginForm />
      </Route>

      <Route path="/main">
        <MainScreen />
      </Route>

      <Route path="/distributionsurvey">
        <DistributionSurvey />
      </Route>

      {/* <Route path="/weather" render={() => weather} /> */}
    </div>
  );
};

export default App;
