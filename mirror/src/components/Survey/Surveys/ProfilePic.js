import React, { useState } from "react";
import Webcam from "react-webcam";
import profStyle from "../../../style/styled-css/profile-style";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import firebase from "../../../store/firebase";

const videoConstraints = {
  width: 550,
  height: 600,
  facingMode: "user",
};

const buttonstyle = {
  position: "relative",
  paddingRight: "1.5vw",
  paddingLeft: "1.5vw",
};

const Parent = profStyle.parent;
const ButtonRow = profStyle.buttonrow;

const ProfilePic = (props) => {
  var user = firebase.auth().currentUser;
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var userRef = storageRef.child(user.uid + ".jpg");

  const webcamRef = React.useRef(null);
  const [base64img, setBase64] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setBase64(imageSrc);
    setCanSubmit(true);
  }, [webcamRef]);

  const skip = () => {
    console.log("next page");
    props.increment();
    // Might need to store null value into Cloud Storage
  };

  const submit = () => {
    console.log(base64img);

    userRef
      .putString(base64img, "data_url", { contentType: "image/jpg" })
      .then(function (snapshot) {
        console.log("Uploaded a base64 string!");
        props.increment();
      });
  };

  return (
    <div>
      <Typography
        style={{ margin: "2vh", textAlign: "center", color: "#137cbd" }}
        variant="h4"
      >
        Set a Gym Profile Pic!
      </Typography>
      <Parent>
        <Webcam
          audio={false}
          height={600}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={550}
          videoConstraints={videoConstraints}
        />

        {base64img.length === 0 ? null : <img src={base64img}></img>}
      </Parent>

      <ButtonRow>
        <Button onClick={skip} style={buttonstyle}>
          <Typography style={{ color: "#137cbd" }} variant="h6">
            Skip
          </Typography>
        </Button>
        <Button style={buttonstyle} onClick={capture}>
          <Typography style={{ color: "#137cbd" }} variant="h6">
            Capture Photo
          </Typography>
        </Button>
        {canSubmit ? (
          <Button onClick={submit} style={buttonstyle}>
            <Typography
              style={{ fontWeight: "bold", color: "#137cbd" }}
              variant="h6"
            >
              Submit
            </Typography>
          </Button>
        ) : null}
      </ButtonRow>
    </div>
  );
};

export default ProfilePic;
