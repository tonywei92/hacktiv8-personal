const foundCard = [];
function generateBoard(num) {
  if (num < 4 && num > 8) {
    return console.log('invalid input')
  }
  const board = [];

  Array(num).fill(null).forEach(el => board.push(Array(num).fill("*")));
  return board;
}

function generateCoordinate(maxIndex = 4) {
  const cards = [];
  const lib = 'ABCD';
  for (let i = 0; i < 4; i++) {
    let count = 0;
    while (count < 2) {
      let found = false;
      const x = Math.floor(Math.random() * maxIndex);
      const y = Math.floor(Math.random() * maxIndex);
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].pos[0] === x && cards[i].length && cards[i].pos[1] === y) {
          found = true;
          break;
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

function tebakHuruf(coordinate, position) {
  for (let i = 0; i < position.length; i += 2) {
    let cardA = position[i].split(',');
    let cardB = position[i + 1].split(',');
    printBoard(coordinate, 4, cardA, cardB);
    let charaA = { chara: Math.random() };
    let charaB = { chara: Math.random() };
    for (let i = 0; i < coordinate.length; i++) {

      if (coordinate[i].pos[0] === Number(cardA[0]) && coordinate[i].pos[1] === Number(cardA[1])) {
        charaA = coordinate[i]
      }
      if (coordinate[i].pos[0] === Number(cardB[0]) && coordinate[i].pos[1] === Number(cardB[1])) {
        charaB = coordinate[i]
      }
    }
    if (charaA.chara === charaB.chara) {
      foundCard.push(charaA, charaB)
    }
  }
  printBoard(coordinate, 4, 0, 0, true)
}

function printBoard(coordinate, boardLength, cardA, cardB, last = false) {
  const board = generateBoard(boardLength);
  for (let i = 0; i < foundCard.length; i++) {
    let x = foundCard[i].pos[0];
    let y = foundCard[i].pos[1];
    board[x][y] = foundCard[i].chara;
  }
  console.log(board);
  sleep(1000);
  clearScreen();
  if (!last) {
    board[cardA[0]][cardA[1]] = getPoin(coordinate, cardA[0], cardA[1]);
    console.log(board);
    sleep(1000);
    clearScreen();
    board[cardB[0]][cardB[1]] = getPoin(coordinate, cardB[0], cardB[1]);
    console.log(board);
    sleep(1000);
    clearScreen();
  }


}

function getPoin(coordinate, x, y) {
  for (let i = 0; i < coordinate.length; i++) {
    if (coordinate[i].pos[0] === Number(x) && coordinate[i].pos[1] === Number(y)) {
      return coordinate[i].chara;
    }
  }
  return ' ';
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
  { chara: 'A', pos: [2, 0] },
  { chara: 'A', pos: [1, 1] },
  { chara: 'B', pos: [0, 1] },
  { chara: 'B', pos: [0, 3] },
  { chara: 'C', pos: [2, 2] },
  { chara: 'C', pos: [0, 2] },
  { chara: 'D', pos: [2, 3] },
  { chara: 'D', pos: [3, 0] }
] //dummyBoard is just for testing purpose only
// console.log(generateCoordinate(4))
tebakHuruf(dummyBoard, ['3,0', '2,3', '3,3', '2,1', '2,0', '1,1'])


