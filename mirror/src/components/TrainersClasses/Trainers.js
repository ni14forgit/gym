import React, { useState, useEffect } from "react";
import FinalStyle from "../../style/styled-css/trainers-style";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import TrainerProfile from "./TrainerProfile";
import TrainerData from "./TrainerData";
import { CancelButton } from "../Buttons/MaterialButton";
import firebase from "../../store/firebase";
import { useHistory } from "react-router-dom";

const colorChange = "white";
const ExitButton = FinalStyle.exitButton;

const Trainers = () => {
  const [loggedin, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("error@duke.edu");
  const history = useHistory();

  useEffect(() => {
    const db = firebase.firestore();
    var user = firebase.auth().currentUser;
    if (user) {
      setLoggedIn(true);
      setEmail(user.email);
    }
  }, []);
  return (
    <div>
      <Typography
        style={{
          textAlign: "center",
          color: "#137cbd",
          marginBottom: "2vh",
          marginTop: "2vh",
        }}
        variant="h4"
      >
        Wilson Trainers!
      </Typography>
      <ExitButton>
        <CancelButton color="#137cbd"></CancelButton>
      </ExitButton>
      <Grid justify="center" spacing={0} container xs={12}>
        {TrainerData.map((value) => {
          return (
            <Grid item>
              <TrainerProfile
                image={value.image}
                name={value.name}
                toemail={value.email}
                fromemail={email}
                bio={value.bio}
                login={() => history.push("/auth")}
                loggedin={loggedin}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Trainers;
