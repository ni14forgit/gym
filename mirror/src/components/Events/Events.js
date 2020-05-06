import React, { useState } from "react";
import EventsData from "./EventsData";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import FinalStyle from "../../style/styled-css/events-style";
import {
  LikeButton,
  RemoveButton,
  CancelButton,
} from "../Buttons/MaterialButton";

const Image = FinalStyle.image;
const Background = FinalStyle.background;
const Title = FinalStyle.title;
const DateDiv = FinalStyle.date;
const Like = FinalStyle.like;
const Description = FinalStyle.description;
const ExitButton = FinalStyle.exitbutton;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    margin: "auto",
    overflow: "hidden",
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
  const addEvent = (id) => {
    for (var i = 0; i < events.length; i++) {
      console.log(events[i].id);
      console.log(id);
      if (events[i].id === id) {
        return;
      }
    }

    setEvents((old) => [...old, EventsData[id]]);
    console.log(id);
    console.log(events);
  };
  const removeEvent = (id) => {
    function notElement(compare_event) {
      return id !== compare_event.id;
    }
    const newevents = events.filter(notElement);
    setEvents(newevents);
    console.log(id);
    console.log(events);
  };
  const GeneralEvent = (props) => {
    console.log(props.id);
    return (
      // <div style={style}>
      <Background color="#81EBFA">
        <Image>
          <img src={props.image}></img>
        </Image>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <DateDiv>
          <b>{props.date}</b>
        </DateDiv>
        <Like>
          <LikeButton color="white" id={props.id} likefunc={addEvent} />
        </Like>
      </Background>
      // </div>
    );
  };

  const LikedEvent = (props) => {
    console.log(props.id);
    return (
      // <div style={style}>
      <Background color="#76C7F5">
        <Image>
          <img src={props.image}></img>
        </Image>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <DateDiv>
          <b>{props.date}</b>
        </DateDiv>
        <Like>
          <RemoveButton color="white" id={props.id} removefunc={removeEvent} />
        </Like>
      </Background>
      // </div>
    );
  };

  return (
    <div style={{ backgroundColor: "", position: "absolute" }}>
      <ExitButton>
        <CancelButton color="#81EBFA"></CancelButton>
      </ExitButton>
      <h1 style={{ color: "#76C7F5", fontSize: "70px", textAlign: "center" }}>
        Liked
      </h1>
      <GridList className={classes.root}>
        {events.map((tile) => {
          return (
            <LikedEvent
              id={tile.id}
              image={tile.image}
              title={tile.title}
              date={tile.date}
              description={tile.description}
            />
          );
        })}
      </GridList>
      <h1 style={{ color: "#81EBFA", fontSize: "70px", textAlign: "center" }}>
        Open
      </h1>
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
