import React, { useState } from "react";
import FinalStyle from "../../../style/styled-css/matches-style";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { buttonStyle } from "../../../style/material-styles/totalStyles";
import EmailIcon from "@material-ui/icons/Email";
import { match } from "../../../actions/email";
import io from "socket.io-client";

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

  const colorChange = "white";

  const [sentEmail, setSentEmail] = useState(false);

  const mutateListToString = (input) => {
    var mystring = "";
    for (var i = 0; i < input.length; i++) {
      mystring += input[i];
      mystring += "\n";
      mystring += "\n";
    }
    // console.log(mystring);
    return mystring;
  };

  return (
    <TotalProfile>
      <ImageBio>
        <Image>
          <img src={props.image}></img>
        </Image>
        <Background color="#137cbd">
          <Title color={colorChange}>
            <Typography style={{ fontWeight: "bold" }} variant="h6">
              {props.title}
            </Typography>
          </Title>
          <Description color={colorChange}>
            <Typography style={{ whiteSpace: "pre-line" }} variant="p1">
              {mutateListToString(props.description)}
            </Typography>
          </Description>
        </Background>
      </ImageBio>
      {sentEmail ? (
        <Typography style={{ margin: "auto" }}>Sent!</Typography>
      ) : (
        <Button
          // onClick={() => match(props.from, "toemail")}
          onClick={() => setSentEmail(true)}
          style={{ margin: "auto" }}
          variant="contained"
          className={buttonstyle_data.matchsendmessage}
          startIcon={<EmailIcon />}
        >
          <Typography> Send Prewritten Email to Buddy!</Typography>
        </Button>
      )}
    </TotalProfile>
  );
};

export default Person;
