import React, { useState } from "react";
import FinalStyle from "../../style/styled-css/trainers-style";
import { buttonStyle } from "../../style/material-styles/totalStyles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

import { trainer } from "../../actions/email";

const colorChange = "white";

const Image = FinalStyle.image;
const Background = FinalStyle.background;
const Title = FinalStyle.title;
const ImageBio = FinalStyle.imageBio;
const TotalProfile = FinalStyle.totalProfile;
const Description = FinalStyle.description;
const YesNoDiv = FinalStyle.yesno;

const TrainerProfile = (props) => {
  const [message, setMessage] = useState(false);
  const [show, setShow] = useState(0);

  const YesNo = () => {
    return (
      <YesNoDiv>
        <Button
          style={{ marginTop: "1vh" }}
          variant="contained"
          className={buttonstyle_data.yestrainer}
          onClick={emailTrainer}
        >
          Confirm
        </Button>
        <Button
          style={{ marginTop: "1vh" }}
          variant="contained"
          className={buttonstyle_data.notrainer}
          onClick={() => setShow(0)}
        >
          Never Mind
        </Button>
      </YesNoDiv>
    );
  };

  const ButtonOptions = () => {
    switch (show) {
      case 0:
        return (
          <Button
            onClick={() => setShow(1)}
            style={{ margin: "auto", marginTop: "1vh" }}
            variant="contained"
            className={buttonstyle_data.trainer}
            startIcon={<EmailIcon />}
          >
            <Typography>Interest Email to {props.name}!</Typography>
          </Button>
        );
      case 1:
        return <YesNo />;
      default:
        return message ? (
          <Typography
            style={{
              fontWeight: "bold",
              color: "#137cbd",
              margin: "auto",
              marginTop: "1.5vh",
            }}
          >
            Sent! They'll reach back to you!
          </Typography>
        ) : (
          <YesNoDiv>
            <Button
              style={{ marginTop: "1vh" }}
              variant="contained"
              className={buttonstyle_data.yestrainer}
              onClick={props.login}
            >
              Log In First!
            </Button>
          </YesNoDiv>
        );
    }
  };

  const emailTrainer = () => {
    if (props.loggedin) {
      //   trainer(props.fromemail, props.toemail);
      //   setMessage("Sent! They'll reach back!");
      setMessage(true);
    } else {
      setMessage(false);
    }
    setShow(2);
  };

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();
  return (
    <TotalProfile>
      <ImageBio>
        <Image>
          <img src={props.image}></img>
        </Image>
        <Background color="#137cbd">
          <Title color={colorChange}>
            <Typography style={{ fontWeight: "bold" }} variant="h6">
              {props.name}
            </Typography>
          </Title>
          <Description color={colorChange}>
            <Typography style={{ whiteSpace: "pre-line" }} variant="p1">
              {props.bio}
            </Typography>
          </Description>
        </Background>
      </ImageBio>
      <ButtonOptions />
    </TotalProfile>
  );
};

export default TrainerProfile;
