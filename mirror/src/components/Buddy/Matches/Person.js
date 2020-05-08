import React from "react";
import FinalStyle from "../../../style/styled-css/matches-style";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { buttonStyle } from "../../../style/material-styles/totalStyles";
import EmailIcon from "@material-ui/icons/Email";

const Person = (props) => {
  const Image = FinalStyle.image;
  const Background = FinalStyle.background;
  const Title = FinalStyle.title;
  const Email = FinalStyle.email;
  const Description = FinalStyle.description;
  const ImageBio = FinalStyle.imageBio;
  const TotalProfile = FinalStyle.totalProfile;

  const buttonstyle = makeStyles(buttonStyle);
  const buttonstyle_data = buttonstyle();

  return (
    <TotalProfile>
      <ImageBio>
        <Image>
          <img src={props.image}></img>
        </Image>
        <Background color="#137cbd">
          <Title color="#137cbd">
            <Typography style={{ fontWeight: "bold" }} variant="h6">
              {props.title}
            </Typography>
          </Title>
          <Description color="#137cbd">
            <Typography variant="p1">{props.description}</Typography>
          </Description>
        </Background>
      </ImageBio>
      <Button
        style={{ margin: "auto" }}
        variant="contained"
        className={buttonstyle_data.matchsendmessage}
        startIcon={<EmailIcon />}
      >
        <Typography>Send Prewritten Email to Buddy!</Typography>
      </Button>
    </TotalProfile>
  );
};

export default Person;
