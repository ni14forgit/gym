import abs from "./abs.jpg";
import anotherman from "./anotherman.jpg";
import cardio from "./cardio.jpg";
import deadlift from "./deadlift.jpg";
import legs from "./legs.jpg";
import mandeadlift from "./mandeadlift.jpg";
import pull from "./pull.jpg";
import push from "./push.jpg";
import run from "./run.jpg";
import sports from "./sports.jpg";
import squat from "./squat.jpg";

const workouts = [
  { img: abs, title: "abs" },
  { img: anotherman, title: "idk" },
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
  console.log(workouts[i].title);
  myOriginalSelection[workouts[i].title] = 0;
}

export { myOriginalSelection, workouts };
