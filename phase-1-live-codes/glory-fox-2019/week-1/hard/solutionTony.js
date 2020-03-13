let board = [];
let revealed = [];
function generateBoard(num) {
  if (!(num >= 4 && num <= 8)) return 'Invalid input parameter';
  const board = [];
  for (let i = 0; i < num; i++) {
    board.push([]);
    for (let j = 0; j < num; j++) {
      board[i].push('*')
    }
  }
  return board;
}

function generateRevealedBoard(length, coordinate) {
  const board = generateBoard(length);
  for (let i = 0; i < coordinate.length; i++) {
    board[coordinate[i].pos[0]][coordinate[i].pos[1]] = coordinate[i].chara;
  }
  return board;
}

function generateCoordinate(pairsNumber, maxIndex = 4) {
  const lib = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const coordinate = []
  for (let i = 0; i < 4; i++) {
    let count = 0;
    while (count < 2) {
      let found = false;
      let x = Math.floor(Math.random() * pairsNumber);
      let y = Math.floor(Math.random() * pairsNumber);
      for (let j = 0; j < coordinate.length; j++) {
        if (coordinate[j].pos[0] === x && coordinate[j].pos[1] === y) {
          found = true;
          break;
        }
      }
      if (found === false) {
        count++;
        coordinate.push({
          chara: lib[i],
          pos: [x, y]
        })
      }
    }
  }
  return coordinate;
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
]

function tebakHuruf(position) {
  clearScreen();

  const length = 4;
  let point = 0;
  const coordinate = generateCoordinate(length);
  board = generateBoard(length)
  const revealedBoard = generateRevealedBoard(length, coordinate);

  for (let i = 0; i < position.length; i += 2) {
    const pos1 = position[i].split(',');
    const pos2 = position[i + 1].split(',');
    let charaA = revealedBoard[pos1[0]][pos1[1]];
    let charaB = revealedBoard[pos2[0]][pos2[1]];
    printBoard(length, coordinate, pos1, pos2);
    if (charaA === charaB && charaA !== "*") {
      revealed.push(
        {
          pos: pos1,
          chara: charaA
        }, {
          pos: pos2,
          chara: charaB
        })
      point++;
    }
  }

  console.log(`point: ${point}`)
}

function printBoard(length, coordinate, pos1, pos2) {
  let board = generateBoard(length);
  const revealedBoard = generateRevealedBoard(length, coordinate);
  const charaA = revealedBoard[pos1[0]][pos1[1]];
  const charaB = revealedBoard[pos2[0]][pos2[1]];
  for (let i = 0; i < revealed.length; i++) {
    board[revealed[i].pos[1]][revealed[i].pos[1]] = revealed[i].chara;
  }
  if (charaA === "*") {
    board[pos1[0]][pos1[1]] = ' ';
  }
  else {
    board[pos1[0]][pos1[1]] = charaA;
  }

  clearScreen();
  console.log(board);
  sleep(500);

  if (charaB === "*") {
    board[pos2[0]][pos2[1]] = ' ';
  }
  else {
    board[pos2[0]][pos2[1]] = charaB;
  }
  clearScreen();
  console.log(board);
  sleep(500);
  board = generateBoard(length);
  for (let i = 0; i < revealed.length; i++) {
    board[revealed[i].pos[1]][revealed[i].pos[1]] = revealed[i].chara;
  }
  clearScreen();
  console.log(board);
  sleep(500);

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


tebakHuruf(['3,0', '2,3', '3,3', '2,1', '2,0', '1,1'])


