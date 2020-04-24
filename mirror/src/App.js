import React, { useEffect } from "react";

import MainScreen from "./components/MainScreen";

import Weight from "./components/Pages/Weight";
import Distribution from "./components/Pages/Distribution";
import Attendance from "./components/Pages/Attendance";
import Points from "./components/Pages/Points";

import AuthForm from "./components/Auth/SignUp/Auth";
import LoginForm from "./components/Auth/Login/Login";

import { Route, useHistory } from "react-router-dom";

import DistributionSurvey from "./components/Survey/DistributionSurvey";
import WeightSurvey from "./components/Survey/WeightSurvey";

// import { useStore } from "./store/store";

const App = () => {
  const history = useHistory();

  // const [state, dispatch] = useStore();
  // // const clickLogin = () => {
  // //   // history.push("/login");
  // // };

  useEffect(() => {
    //history.replace("/main");
    //history.replace("/stillbackground");
    //history.replace("/distributionsurvey");
    //history.replace("/attendance");
    //history.replace("/weightsurvey");
    //history.replace("/distribution");
    //history.replace("/weight");
    //history.replace("/signup");
    history.replace("/points");
  }, []);

  // Can implement SWITCH Statements for ROUTES

  return (
    <div>
      <Route path="/signup">
        <AuthForm />
      </Route>

      <Route path="/points">
        <Points />
      </Route>

      <Route path="/weight">
        <Weight />
      </Route>

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

      <Route exact path="/">
        <MainScreen />
      </Route>

      <Route path="/distributionsurvey">
        <DistributionSurvey />
      </Route>
    </div>
  );
};

export default App;
