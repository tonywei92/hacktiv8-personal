function numToLetter(num) {
  return String.fromCharCode(num + 96).toUpperCase();
}

function letterToNum(letter) {
  letter = letter.toLowerCase();
  return letter.charCodeAt(0) - 96;
}
const firePosition = [];
const regx = /^((?<PosX>([A-j]|[a-j]))(?<PosY>([1-9]|10)))$/;

for (let i = 2; i < process.argv.length; i++) {
  if (!regx.test(process.argv[i])) {
    console.log("Wrong format, use a1 to j10");
    return;
  }
  let groups = process.argv[i].match(regx).groups;
  console.log([letterToNum(groups.PosX), Number(groups.PosY)]);
  firePosition.push([letterToNum(groups.PosX), Number(groups.PosY)]);
}

const ships = {
  AIRCRAFT_CARRIER: 5,
  BATTLESHIP: 4,
  CRUISER: 3,
  DESTROYER: 2
};

const shipsStatus = {
  [ships.AIRCRAFT_CARRIER]: {
    perDamage: 20,
    hp: 100,
    position: []
  },
  [ships.BATTLESHIP]: {
    perDamage: 25,
    hp: 100,
    position: []
  },
  [ships.CRUISER]: {
    perDamage: 33,
    hp: 100,
    position: []
  },
  [ships.DESTROYER]: {
    perDamage: 20,
    hp: 100,
    position: []
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBoard() {
  const board = [];
  for (let i = 0; i <= 10; i++) {
    board.push([` ${numToLetter(i)} `]);
    for (let j = 0; j <= 10; j++) {
      if (j > 0) {
        board[0][j] = ` ${j} `.substr(0, 3);

        board[i][j] = "   ";
      } else {
        board[0][j] = "   ";
      }
    }
  }
  return board;
}
function printBoard(board) {
  let str = "";
  for (let i = 0; i < board.length; i++) {
    if (i === 0) str += "------".repeat(board[i].length) + "-\n";
    str += "| " + board[i].join(" | ") + " | \n";
    if (i === 0) str += "------".repeat(board[i].length) + "-\n";
    if (i === board.length - 1) str += "------".repeat(board[i].length) + "-";
  }
  console.log(str);
}

function randomTrueFalse() {
  return Math.round(Math.random());
}

function addShip(board, size) {
  let added = false;
  while (!added) {
    let start = [getRandomInt(1, 8), getRandomInt(1, 8)];
    if (randomTrueFalse()) {
      // vertical
      let doit = true;
      for (let i = 0; i < size; i++) {
        if (
          start[0] + i > 10 ||
          start[1] > 10 ||
          board[start[0] + i][start[1]] === " 0 "
        ) {
          doit = false;
        }
      }
      if (doit) {
        for (let i = 0; i < size; i++) {
          board[start[0] + i][start[1]] = " 0 ";
          shipsStatus[size].position.push([start[0] + i, start[1]]);
        }
        added = true;
      }
    } else {
      //horizontal
      let doit = true;
      for (let i = 0; i < size; i++) {
        if (
          start[0] > 10 ||
          start[1] + i > 10 ||
          board[start[0]][start[1] + i] === " 0 "
        ) {
          doit = false;
        }
      }
      if (doit) {
        for (let i = 0; i < size; i++) {
          board[start[0]][start[1] + i] = " 0 ";
          shipsStatus[size].position.push([start[0], start[1] + i]);
        }
        added = true;
      }
    }
  }
}

function fire(board) {
  for (let i = 0; i < firePosition.length; i++) {
    console.log(`|${board[firePosition[i][0]][firePosition[i][1]]}|`);
    if (board[firePosition[i][0]][firePosition[i][1]] === " 0 ") {
      for (let x in shipsStatus) {
        for (let j = 0; j < shipsStatus[x].position.length; j++) {
          console.log('ff', shipsStatus[x].position[j][0], firePosition[i][0], shipsStatus[x].position[j][1], firePosition[i][1])
          if (shipsStatus[x].position[j][0] === firePosition[i][0] && shipsStatus[x].position[j][1] === firePosition[i][1]) {
            console.log('overlap')
            shipsStatus[x].hp -= shipsStatus[x].perDamage;
            shipsStatus[x].position[i] = [0, 0];
          }
        }
      }
    }
    board[firePosition[i][0]][firePosition[i][1]] = " x ";
  }
}

function main() {
  const board = generateBoard();
  // console.log(board[8][4]);
  addShip(board, ships.AIRCRAFT_CARRIER);
  addShip(board, ships.BATTLESHIP);
  addShip(board, ships.CRUISER);
  addShip(board, ships.DESTROYER);
  fire(board);
  printBoard(board);
  console.log(shipsStatus)
}

main();
