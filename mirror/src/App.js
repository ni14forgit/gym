import React, { useEffect } from "react";

import MainScreen from "./components/MainScreen";

import Metrics from "./components/Metrics/Metrics";
import Points from "./components/Points/Points";
import Events from "./components/Events/Events";
import Trainers from "./components/TrainersClasses/Trainers";
import Buddy from "./components/Buddy/Buddy";

import Auth from "./components/Auth/Auth";

import { Route, useHistory } from "react-router-dom";

import Retrieve from "./actions/retrieve";
import ProfilePic from "./components/Survey/Surveys/ProfilePic";

import SurveyPath from "./components/Survey/SurveyPath";

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
    //history.replace("/weightsurvey");
    // history.replace("/events");
    //history.replace("/signup");
    //history.replace("/points");
    //history.replace("/buddy");
    //history.replace("/auth");
    //history.push("/signsurveypath");
    // history.push("/metrics");
    //history.push("/trainers");
  }, []);

  // Can implement SWITCH Statements for ROUTES

  return (
    <div>
      <Route path="/buddy">
        <Buddy />
      </Route>

      <Route path="/trainers">
        <Trainers />
      </Route>

      <Route path="/metrics">
        <Metrics />
      </Route>

      <Route path="/retrieve">
        <Retrieve />
      </Route>

      <Route path="/events">
        <Events />
      </Route>

      <Route path="/signsurveypath">
        <SurveyPath surveytype="signup" counter={4} />
      </Route>

      <Route path="/logsurveypath">
        <SurveyPath surveytype="login" counter={2} />
      </Route>

      <Route path="/auth">
        <Auth />
      </Route>

      <Route path="/points">
        <Points />
      </Route>

      <Route exact path="/">
        <MainScreen />
      </Route>
    </div>
  );
};

export default App;
