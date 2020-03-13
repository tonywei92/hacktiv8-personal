const cardsFound = [];
function generateBoard(num) {
  if (num < 4 || num > 8) {
    return console.log('wrong input');
  }
  const arr = [];
  Array(4).fill("").forEach(el => arr.push(Array(4).fill("*")));
  return arr;
}

function generateCoordinate(maxIndex = 4) {
  const lib = 'ABCD';
  const cards = [];
  for (let i = 0; i < maxIndex; i++) {
    let count = 0;
    while (count < 2) {
      let x = Math.floor(Math.random() * maxIndex);
      let y = Math.floor(Math.random() * maxIndex);
      let found = false;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].pos[0] === x && cards[i].pos[1] === y) {
          found = true;
        }
      }
      if (!found) {
        count++;
        cards.push({
          chara: lib[i],
          pos: [x, y]
        })
      }
    }
  }
  return cards;
}

function tebakHuruf(board, position) {

}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

const dummyBoard = [
  { chara: 'A', pos: [0, 0] },
  { chara: 'A', pos: [3, 2] },
  { chara: 'B', pos: [0, 1] },
  { chara: 'B', pos: [0, 3] },
  { chara: 'C', pos: [2, 2] },
  { chara: 'C', pos: [0, 2] },
  { chara: 'D', pos: [2, 3] },
  { chara: 'D', pos: [3, 0] }
] //dummyBoard is just for testing purpose only
console.log(generateCoordinate());
tebakHuruf(dummyBoard, ['3,0', '2,3', '3,3', '2,1', '2,0', '1,1'])


