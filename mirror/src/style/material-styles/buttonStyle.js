import { grey } from "@material-ui/core/colors";
const buttonStyle = {
  mainoption: {
    width: "22vw",
    height: "26vh",
    borderWidh: "3px",
    borderRadius: "2%",
    color: "white",
    fontSize: "20px",
    outlinedPrimary: "white",
  },
  mainlabel: {
    flexDirection: "column",
    justifyContent: "spaceBetween",
  },
  authpage: {
    width: "10vw",
    // height: "8vh",
    color: "#9c9a9a",
    fontWeight: "bold",
    top: "20px",
  },
  icon: {
    width: 200,
    height: 200,
    fontSize: "large",
  },
  auth: {
    width: "10vw",
    // height: "8vh",
    // fontSize: "30px",
    textAlign: "center",
    color: "white",
  },
  points: {
    width: "250px",
    height: "80px",
    fontSize: "40px",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderWidth: "2px",
  },
  authBold: {
    width: "200px",
    height: "60px",
    fontSize: "30px",
    textAlign: "center",
    color: "white",
    background: "white",
  },
  buddy: {
    width: "10vw",
    height: "8vh",
    margin: "auto",
    color: "#137cbd",
  },
  matchsendmessage: {
    height: "5vh",
    backgroundColor: "#137cbd",
    color: "white",
    "&:hover": {
      border: "2px solid #137cbd",
      color: "#137cbd",
      backgroundColor: "#FCD8F4",
    },
  },
  trainer: {
    height: "5vh",
    backgroundColor: "white",
    border: "1px solid #137cbd",
    color: "#137cbd",
    "&:hover": {
      color: "white",
      backgroundColor: "#137cbd",
    },
  },
  yestrainer: {
    height: "5vh",
    backgroundColor: "#137cbd",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#137cbd",
    },
  },
  notrainer: {
    height: "5vh",
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
};

export default buttonStyle;
