'use strict';

function lompatanKuda(move) {
  let board = createBoard();
  setKnight(board, move);

  let possibleMove = 0;

  possibleMove += moveL(0, 0, 0, board, move); // vert up left
  possibleMove += moveL(0, 0, 1, board, move); // vert up right
  possibleMove += moveL(0, 1, 0, board, move); // vert down left
  possibleMove += moveL(0, 1, 1, board, move); // vert down right
  possibleMove += moveL(1, 0, 0, board, move); // hz left up
  possibleMove += moveL(1, 0, 1, board, move); // hz left down
  possibleMove += moveL(1, 1, 0, board, move);
  possibleMove += moveL(1, 1, 1, board, move);
}

function createBoard() {
  let board = [];

  for (let i = 0; i < 8; i++) {
    board.push([]);

    for (let j = 0; j < 8; j++) {
      board[i].push(' ');
    }
  }

  return board;
}

function setKnight(board, move) {
  let coord = getCoord(move);
  board[coord['y']][coord['x']] = 'K';
}

// vertHz = 0 vert, 1 horizontal
// direction = 0 up or left, 1 down or right
// direction2 = 0 left or up, 1 right or down
function moveL(vertHz, direction, direction2, board, move) {
  let yMult = 0;
  let xMult = 0;
  if (vertHz == 0 && direction == 0) { // up
    yMult = -1;
  }
  else if (vertHz == 0 && direction == 1) yMult = 1;

  if (vertHz == 1 && direction == 0) xMult = -1;
  else if (vertHz == 1 && direction == 1) xMult = 1;
}

// returns object x, y in number
function getCoord(move) {
  // let coord = {
  //   x = move.charCodeAt(0)-65;
  //   y = 8-Number(move[1]);
  // };

  // return coord;
}


console.log(lompatanKuda('C4')) // 8
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('A1')) // 2