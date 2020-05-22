import React, { useState } from "react";
import EventsData from "./EventsData";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import FinalStyle from "../../style/styled-css/events-style";
import {
  LikeButton,
  RemoveButton,
  CancelButton,
} from "../Buttons/MaterialButton";
import StillBackground from "./../Background/StillBackground";
import { distribution } from "./../../assets/media/backgrounds";

const Image = FinalStyle.image;
const Background = FinalStyle.background;
const Title = FinalStyle.title;
const DateDiv = FinalStyle.date;
const Tint = FinalStyle.tint;
const Description = FinalStyle.description;
const ExitButton = FinalStyle.exitbutton;
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "left",

    paddingLeft: "4vw",
    paddingRight: "4vw",
    paddingTop: "2vh",
    position: "relative",
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "25wh",
    // height: "50vh",
  },
  gridTile: {
    borderRadius: "50%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Events = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  const GeneralEvent = (props) => {
    console.log(props.id);
    return (
      // <div style={style}>
      <Background>
        <Tint />
        <Image>
          <img src={props.image}></img>
        </Image>
        <Title>
          <Typography style={{ fontWeight: "bold" }} variant="h5">
            {props.title}
          </Typography>
        </Title>
        <Description>
          <Typography style={{ fontWeight: "bold" }} variant="body1">
            {props.description}
          </Typography>
        </Description>
        <DateDiv>
          <Typography style={{ fontWeight: "bold" }} variant="body1">
            {props.date}
          </Typography>
        </DateDiv>
      </Background>
      // </div>
    );
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#137cbd" }}>
      <Typography
        style={{
          paddingTop: "2vh",
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
        variant="h4"
      >
        Upcoming Events!
      </Typography>
      <ExitButton>
        <CancelButton color="white"></CancelButton>
      </ExitButton>
      <GridList className={classes.root}>
        {EventsData.map((tile) => {
          return (
            <GeneralEvent
              id={tile.id}
              image={tile.image}
              title={tile.title}
              description={tile.description}
              date={tile.date}
            />
          );
        })}
      </GridList>
    </div>
  );
};

export default Events;
