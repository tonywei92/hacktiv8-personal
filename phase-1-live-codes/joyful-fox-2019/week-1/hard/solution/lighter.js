function generateBoard(h, w) {
  let board = [];
  for (let i = 0; i < h; i++) {
    board.push([]);
    for (let j = 0; j < w; j++) {
      board[i].push(" ");
    }
  }
  return board;
}

function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(""));
  }
}

function createLighter(width, extraHeight = 0, step = 0) {
  let arrW = width * 2 - 1;
  let arrH = arrW + 2 + extraHeight;
  // draw the bottom

  let board = generateBoard(arrH, arrW);
  let posY = board.length - 1;
  for (let i = 0; i < board[0].length; i++) {
    if (i !== 0 && i !== board[0].length - 1) {
      board[posY - 1][i] = "x";
    }
    board[posY][i] = "=";
  }
  posY -= 2;
  for (let i = 0; i < width + step; i++) {
    board[posY - i][0] = "x";
    board[posY - i][board[0].length - 1] = "x";
  }
  posY -= width + step;
  for (let i = width - 2; i >= 0; i--) {
    let x = posY - i;
    board[x][i + 1] = "x";
  }
  for (let i = 0; i < width - 2; i++) {
    let x = posY - i;
    board[x][width * 2 - i - 3] = "x";
  }

  for (let i = 0; i < Math.ceil((width + step) / 2); i++) {
    board[board.length - 3 - i][width - 1] = "x";
  }
  printBoard(board);
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function animate(size = 3) {
  let status = ['Nyala', 'Tidak Nyala', 'Macet', 'Gas nya kecil']
  let start = Math.floor(Math.random() * 4);
  if (start !== 0) {
    console.log(`CTEK! ${status[start]}`);
    return;
  }
  clearScreen();
  size = Number(size);
  let times = 10;
  let counter = 0;
  let frame = 3;
  while (counter < times) {
    for (let i = 0 - frame; i < frame; i++) {
      createLighter(size, frame, Math.abs(i));
      sleep(100);
      clearScreen();
    }
    counter++;
  }
}

const size = process.argv[2];
if (!size) {
  console.log("silahkan input ukurannya");
  return;
}

if (size < 3) {
  console.log("input minimal 3");
  return;
}

if (!Number(size)) {
  console.log("input harus angka");
  return;
}
animate(size);
