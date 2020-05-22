import gymtrainer from "../../assets/media/people/gyminstructor.jpg";
import femaletrainer from "../../assets/media/people/femaletrainer.jpg";

const images = [
  gymtrainer,
  femaletrainer,
  gymtrainer,
  femaletrainer,
  gymtrainer,
  femaletrainer,
  femaletrainer,
  gymtrainer,
  femaletrainer,
];

const names = [
  "James Doe",
  "Samantha Doe",
  "Victor Doe",
  "Anica Doe",
  "Nick Doe",
  "Rebecca Doe",
  "Anica Doe",
  "Nick Doe",
  "Rebecca Doe",
];

const bios = [
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
  "James has been a part of the Wilson team for around 2 years. He graduated from Duke in 2015 and has started multiple programs. His specialties include back and neck exercises.",
];

const emails = [
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
  "fakeemail@duke.edu",
];

const TrainerData = [];
for (var i = 0; i < names.length; i++) {
  const trainer = {};
  trainer.image = images[i];
  trainer.name = names[i];
  trainer.bio = bios[i];
  trainer.id = i;
  trainer.email = emails[i];
  TrainerData.push(trainer);
}

export default TrainerData;
