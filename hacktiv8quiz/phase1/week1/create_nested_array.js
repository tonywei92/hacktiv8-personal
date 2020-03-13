function randLetter() {
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var letter = letters[Math.floor(Math.random() * letters.length)];
  return letter;
}

function createNestedArr(row, col) {
  let arr = [];
  for (let i = 0; i < row; i++) {
    arr.push([]);
    for (let j = 0; j < col; j++) {
      arr[i].push(randLetter());
    }
  }
  return arr;
}
console.log(createNestedArr(5, 3));

console.log(createNestedArr(4, 2));
