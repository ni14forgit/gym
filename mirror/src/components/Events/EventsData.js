import abs from "../../assets/media/workouts/abs.jpg";
import cardio from "../../assets/media/workouts/cardio.jpg";
import legs from "../../assets/media/workouts/legs.jpg";
import run from "../../assets/media/workouts/run.jpg";
import sports from "../../assets/media/workouts/sports.jpg";
import oldman from "../../assets/media/people/oldman.jpg";

const activity = [abs, cardio, legs, run, sports];
// const activity = [oldman, oldman, oldman, oldman, oldman];

const titles = [
  "Basketball 3 v. 3",
  "Spikeball Tournament",
  "Become A Certified Climbing Instructor!",
  "Fitness Session with Joe Smith",
  "Sample Event",
];

const dates = ["Jan 2-3", "Feb 2-3", "Feb 17-18", "April 4-5", "May 23"];

const descriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

const EventsData = [];
for (var i = 0; i < titles.length; i++) {
  const event = {};
  event.image = activity[i];
  event.title = titles[i];
  event.date = dates[i];
  event.id = i;
  event.description = descriptions[i];
  EventsData.push(event);
}

export default EventsData;
