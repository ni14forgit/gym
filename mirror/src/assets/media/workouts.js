import abs from "./workouts/abs.jpg";
import anotherman from "./workouts/anotherman.jpg";
import cardio from "./workouts/cardio.jpg";
import deadlift from "./workouts/deadlift.jpg";
import legs from "./workouts/legs.jpg";
import mandeadlift from "./workouts/mandeadlift.jpg";
import pull from "./workouts/pull.jpg";
import push from "./workouts/push.jpg";
import run from "./workouts/run.jpg";
import sports from "./workouts/sports.jpg";
import squat from "./workouts/squat.jpg";

const workouts = [
  { img: abs, title: "abs" },
  { img: anotherman, title: "general" },
  { img: cardio, title: "cardio" },
  { img: deadlift, title: "deadlift" },
  { img: legs, title: "legs" },
  { img: mandeadlift, title: "mandeadlift" },
  { img: pull, title: "pull" },
  { img: push, title: "push" },
  { img: run, title: "run" },
  { img: sports, title: "sports" },
  { img: squat, title: "squat" },
];

const myOriginalSelection = {};
for (var i = 0; i < workouts.length; i++) {
  //console.log(workouts[i].title);
  myOriginalSelection[workouts[i].title] = 0;
}

export { workouts };
