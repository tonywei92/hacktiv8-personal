const cardFound = [];

function generateBoard(num) {
  if (num < 4 || num > 8) {
    return console.log('invalid input');
  }

  const arr = [];
  Array(num).fill('').forEach(el => arr.push(Array(num).fill("*")));
  return arr;
}

function generateCoordinate(maxIndex = 4) {
  const lib = 'ABCD';
  const coordinate = [];
  for (let i = 0; i < maxIndex; i++) {
    let count = 0;
    while (count < 2) {
      let x = Math.floor(Math.random() * maxIndex);
      let y = Math.floor(Math.random() * maxIndex);
      let found = false;
      for (let j = 0; j < coordinate.length; j++) {
        if (coordinate[j].pos[0] === x && coordinate[j].pos[1] === y) {
          found = true;
          break;
        }
      }
      if (!found) {
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

function tebakHuruf(coordinate, position) {
  for (let i = 0; i < position.length; i += 2) {
    const cardA = position[i].split(',');
    const cardB = position[i + 1].split(',');
    print(coordinate, cardB, cardA);
    sleep(1000);
    clearScreen();
    let cardAfound = {
      chara: Math.random()
    };
    let cardBfound = {
      chara: Math.random()
    };
    for (let j = 0; j < coordinate.length; j++) {
      if (coordinate[j].pos[0] === Number(cardA[0])
        && coordinate[j].pos[1] === Number(cardA[1])) {
        cardAfound = coordinate[j]
      }
      if (coordinate[j].pos[0] === Number(cardB[0])
        && coordinate[j].pos[1] === Number(cardB[1])) {
        cardBfound = coordinate[j]
      }
    }
    if (cardAfound.chara === cardBfound.chara) {
      cardFound.push(cardAfound, cardBfound);
    }
  }
  // console.log(cardFound);
  print(coordinate, null, null, true);
}

function print(coordinate, cardA, cardB, last = false) {
  const board = generateBoard(4);
  for (let i = 0; i < cardFound.length; i++) {
    let x = cardFound[i].pos[0];
    let y = cardFound[i].pos[1];
    let chara = cardFound[i].chara;
    board[x][y] = chara;
  }
  console.log(board);
  sleep(1000);
  if (!last) {
    clearScreen();
    let x = Number(cardA[0]);
    let y = Number(cardA[1]);
    board[x][y] = getChar(coordinate, x, y);
    console.log(board);
    sleep(1000);
    clearScreen();

    x = Number(cardB[0]);
    y = Number(cardB[1]);
    board[x][y] = getChar(coordinate, x, y);
    console.log(board);
    sleep(1000);
  }

}

function getChar(coordinate, x, y) {
  for (let i = 0; i < coordinate.length; i++) {
    if (coordinate[i].pos[0] === x && coordinate[i].pos[1] === y) {
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
  { chara: 'A', pos: [0, 0] },
  { chara: 'A', pos: [3, 2] },
  { chara: 'B', pos: [0, 1] },
  { chara: 'B', pos: [0, 3] },
  { chara: 'C', pos: [2, 2] },
  { chara: 'C', pos: [0, 2] },
  { chara: 'D', pos: [2, 3] },
  { chara: 'D', pos: [3, 0] }
] //dummyBoard is just for testing purpose only
// console.log(generateCoordinate())
tebakHuruf(generateCoordinate(), ['3,0', '2,3', '3,3', '2,1', '0,0', '3,2'])


