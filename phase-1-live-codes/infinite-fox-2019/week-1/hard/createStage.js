function makeString(arr) {
  let result = '';
  arr.forEach(line => {
    line.forEach(spot => {
      spot = spot === ' ' ? 'o' : spot
      result += spot;
    })
  })
  return result;
}

const stage1 = [
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "]
]

const stage2 = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", "x", " ", " "]
]

const stage3 = [
  [" ", "x", " "],
  [" ", "x", " "],
  [" ", "x", " "],
  [" ", "x", " "]
]

const stage4 = [
  [" ", " ", " ", " ", " ",  " ", " " ],
  [" ", " ", " ", "x", " ",  " ", " " ],
  [" ", " ", " ", "x", "x",  " ", " " ],
  [" ", " ", "x", "x", "x",  " ", " " ],
  [" ", " ", "x", "x", "x",  " ", " " ],
  [" ", "x", "x", "x", "x",  "x", " " ],
]

const stage5 = [
  [" ", " ", " ", " ", " ",  " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ",  " ", "x", "x", " ", " "],
  [" ", " ", " ", " ", "x",  "x", " ", " ", " ", " "],
  [" ", " ", " ", " ", "x",  "x", " ", "x", " ", " "],
  [" ", " ", "x", " ", " ",  " ", " ", " ", "x", " "],
  [" ", "x", "x", " ", " ",  "x", "x", " ", "x", " "],
]

const stage6 = [
  [" ", " ", " ", " ", " ",  " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ",  " ", "x", "x", " ", " "],
  [" ", " ", " ", " ", "x",  "x", " ", " ", " ", " "],
  [" ", " ", " ", " ", "x",  "x", " ", "x", " ", " "],
  [" ", " ", "x", " ", " ",  " ", " ", " ", "x", " "],
  [" ", "x", "x", " ", " ",  "x", "x", " ", " ", " "],
]

// console.log(makeString(stage1));
// console.log(makeString(stage2));
// console.log(makeString(stage3));
// console.log(makeString(stage4));
// console.log(makeString(stage5));
// console.log(makeString(stage6));

console.log(stage1)
console.log(stage2)
console.log(stage3)


