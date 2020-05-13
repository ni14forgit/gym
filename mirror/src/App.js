import React, { useEffect } from "react";

import MainScreen from "./components/MainScreen";

import Weight from "./components/Pages/Weight";
import Distribution from "./components/Pages/Distribution";
import Attendance from "./components/Pages/Attendance";
import Points from "./components/Pages/Points";
import Events from "./components/Events/Events";
import Buddy from "./components/Buddy/Buddy";

import Auth from "./components/Auth/Auth";

import { Route, useHistory } from "react-router-dom";

import Retrieve from "./actions/retrieve";

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
    //history.replace("/attendance");
    //history.replace("/weightsurvey");
    // history.replace("/events");
    //history.replace("/distribution");
    //history.replace("/weight");
    //history.replace("/signup");
    //history.replace("/points");
    //history.replace("/buddy");
    //history.replace("/auth");
    //history.push("/signsurveypath");
    //history.push("/retrieve");
  }, []);

  // Can implement SWITCH Statements for ROUTES

  return (
    <div>
      <Route path="/buddy">
        <Buddy />
      </Route>

      <Route path="/retrieve">
        <Retrieve />
      </Route>

      <Route path="/events">
        <Events />
      </Route>

      <Route path="/signsurveypath">
        <SurveyPath counter={3} />
      </Route>

      <Route path="/logsurveypath">
        <SurveyPath counter={2} />
      </Route>

      <Route path="/auth">
        <Auth />
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

      <Route path="/distribution">
        <Distribution></Distribution>
      </Route>

      <Route exact path="/">
        <MainScreen />
      </Route>

      {/* <Route path="/distributionsurvey">
        <DistributionSurvey />
      </Route> */}
    </div>
  );
};

export default App;
