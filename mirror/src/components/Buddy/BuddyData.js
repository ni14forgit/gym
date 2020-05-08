import oldman from "../../assets/media/people/oldman.jpg";

const profiles = [oldman, oldman, oldman, oldman, oldman];

const names = [
  "Rahul Kotya",
  "Jennifer Holland",
  "Jameson Young",
  "Annie Wu",
  "Eric Mao",
];

const commonalities = [
  "Things you have in common: times you go to gym, goals, and types of workouts.",
  "Things you have in common: how often you go to the gym, year of experience going to gym, passion for soccer",
  "Things you have in common: times you go to gym, goals, and types of workouts.",
  "Things you have in common: how often you go to the gym, year of experience going to gym, passion for soccer",
  "Things you have in common: times you go to gym, goals, and types of workouts.",
];

const MatchesData = [];
for (var i = 0; i < profiles.length; i++) {
  const person = {};
  person.profile = profiles[i];
  person.name = names[i];
  person.common = commonalities[i];
  person.id = i;
  MatchesData.push(person);
}

export default MatchesData;
