var arr = [];
function createObj(name, phase, gender) {
  arr.push({ name, phase, gender });
}
createObj("Akbar", 1, "male");
createObj("Icha", 1, "female");
console.log(arr);

function getData(name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
  return "not found";
}

console.log(getData("Icha"));
