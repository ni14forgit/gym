const colors = [
  "hsl(176, 70%, 50%)",
  "hsl(207, 70%, 50%)",
  "hsl(247, 70%, 50%)",
  "hsl(38, 70%, 50%)",
  "hsl(199, 70%, 50%)",
];

const PieData = (data) => {
  var counter = 0;
  var masterList = [];
  for (let key in data) {
    const x = {};
    x.id = key;
    x.label = key;
    x.value = data[key];
    x.color = colors[counter % colors.length];
    counter += 1;
    masterList.push(x);
  }
  return masterList;
};
export default PieData;
