import React from "react";
import FinalStyle from "../../../style/styled-css/matches-style";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { buttonStyle } from "../../../style/material-styles/totalStyles";
import EmailIcon from "@material-ui/icons/Email";
import io from "socket.io-client";
let endpoint = "http://localhost:5000";
let socket = io.connect(`${endpoint}`);

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

  // useEffect(() => {
  //   socket.on("weight", (weightArg) => {
  //     if (Object.keys(weights).length < 3) {
  //       wiiDetected(weightArg);
  //     }
  //   });
  //   title();
  //   setFinalWeight(weights[3] + MARGIN_OF_ERROR);
  // }, [weights, myTitle]);

  const sendEmail = () => {
    const emailcontent = {
      fromemail: "ni14@duke.edu",
      toemail: "iyengar.nish@gmail.com",
      subject: "test email",
      contents: "This is a test message",
    };

    fetch("http://localhost:5000/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailcontent),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    console.log("make restful call to flask to send email? ");
  };

  const mutateListToString = (input) => {
    var mystring = "";
    for (var i = 0; i < input.length; i++) {
      mystring += input[i];
      mystring += "\n";
      mystring += "\n";
    }
    console.log(mystring);
    return mystring;
  };

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
            <Typography style={{ whiteSpace: "pre-line" }} variant="p1">
              {mutateListToString(props.description)}
            </Typography>
          </Description>
        </Background>
      </ImageBio>
      <Button
        onClick={sendEmail}
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
