// Your code here
let argumentsTable = process.argv.splice(2);
let ships = [
  {
    name: "\u{1F6EB}",
    size: 5,
    hit: 0
  },
  {
    name: "\u{1F6A2}",
    size: 4,
    hit: 0
  },
  {
    name: "\u{1F6F3}",
    size: 3,
    hit: 0
  },
  {
    name: "\u{1F6F6}",
    size: 2,
    hit: 0
  }
];
function generateBoard() {
  let huruf = 65;
  let board = [];
  let nomor = 1;
  for (let i = 0; i <= 10; i++) {
    board.push([]);
    for (let j = 0; j <= 10; j++) {
      if (i === 0 && j !== 0) {
        board[i].push(String(nomor));
        nomor += 1;
      } else if (i !== 0 && j === 0) {
        board[i].push(String.fromCharCode(huruf));
        huruf += 1;
      } else {
        board[i].push(" ");
      }
    }
  }
  return board;
}

function random(size) {
  let safe = false;
  let random = {
    x: 0,
    y: 0
  };
  while (!safe) {
    random = {
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1
    };

    if (random.x + 1 <= 10 && random.y + size <= 10) {
      safe = true;
    }
  }
  console.log(random);
  return random;
}

function randomShip() {
  let randomCoor = Math.floor(Math.random() * 1);
  let board = generateBoard();
  for (let i = 0; i < ships.length; i++) {
    let randLoc = random(ships[i].size);
    let ship = ships[i];
    let empty = () => {
      //check empty position
      let x = randLoc.x;
      let y = randLoc.y;
      if (randomCoor === 0) {
        for (let i = 0; i <= ship.size; i++) {
          if (board[x][y] !== " ") {
            return false;
          }
          y++;
        }
      } else {
        for (let j = 0; j <= ship.size; j++) {
          if (board[y][x] !== " ") {
            return false;
          }
          x++;
        }
      }
      return true;
    };
    //generate ships
    if (empty) {
      if (randomCoor === 0) {
        for (let k = 0; k < ship.size; k++) {
          board[randLoc.x][randLoc.y] = ship.name;
          randLoc.y += 1;
        }
      } else {
        for (let l = 0; l < ship.size; l++) {
          board[randLoc.x][randLoc.y] = ship.name;
          randLoc.x += 1;
        }
      }
    }
  }
  return board;
}

function shots() {
  let input = argumentsTable;
  if (input.length === 0) {
    return `please input target! \n ex : A6,B6,etc.`;
  }
  let update = position => {
    for (let x = 0; x < ships.length; x++) {
      if (ships[x].name === position) {
        ships[x].hit++;
      }
    }
  };
  let score = 0;
  let board = randomShip();
  const col = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const row = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0; i < input.length; i++) {
    let lang = col.indexOf(input[i].split("")[1]) + 1;
    let lat = row.indexOf(input[i].split("")[0]) + 1;
    if (board[lat][lang] !== " ") {
      update(board[lat][lang]);
      score++;
      board[lat][lang] = "X";
    } else {
      board[lat][lang] = "/";
    }
  }
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join("  "));
  }
  for (let j = 0; j < ships.length; j++) {
    console.log(ships[j].name + " ===>" + ships[j].hit);
  }
  return `Score: ${score}`;
}
console.log(shots());

[[0, 1, 2, 4, 5], [0, 1, 2, 4, 5], [0, 1, 2, 4, 5]];
