const symbol = ["←", "↓", "↑", "→"];
function generateBoard(rows, cols) {
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      result[i].push(symbol[Math.round(Math.random() * 3)]);
    }
  }
  return result;
}

function whoMeetWhom(board, maxSteps) {
  const original = copy2dArr(board);
  let posA = [0, 0];
  let posB = [0, board[0].length - 1];
  let posC = [board.length - 1, 0];
  let posD = [board.length - 1, board[0].length - 1];

  for (let i = 0; i < maxSteps; i++) {
    let prevA = [...posA];
    let resposA = move(original, board, posA);
    if (resposA.collides) {
      return `${resposA["1"]} meets ${resposA["2"]} after ${i + 1} steps`;
    }
    posA = resposA;
    board[prevA[0]][prevA[1]] = original[prevA[0]][prevA[1]];
    board[posA[0]][posA[1]] = "A";

    let prevB = [...posB];
    let resposB = move(original, board, posB);
    if (resposB.collides) {
      return `${resposB["1"]} meets ${resposB["2"]} after ${i + 1} steps`;
    }
    posB = resposB;
    board[prevB[0]][prevB[1]] = original[prevB[0]][prevB[1]];
    board[posB[0]][posB[1]] = "B";

    let prevC = [...posC];
    let resposC = move(original, board, posC);
    if (resposC.collides) {
      return `${resposC["1"]} meets ${resposC["2"]} after ${i + 1} steps`;
    }
    posC = resposC;
    board[prevC[0]][prevC[1]] = original[prevC[0]][prevC[1]];
    board[posC[0]][posC[1]] = "C";

    let prevD = [...posD];
    let resposD = move(original, board, posD);
    if (resposD.collides) {
      return `${resposD["1"]} meets ${resposD["2"]} after ${i + 1} steps`;
    }
    posD = resposD;
    board[prevD[0]][prevD[1]] = original[prevD[0]][prevD[1]];
    board[posD[0]][posD[1]] = "D";
  }

  return board;
}

function getPos(board, value) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === value) {
        return [i, j];
      }
    }
  }
  return false;
}

function move(original, board, pos) {
  let nextVal = 0;
  let nextPos = [...pos];
  let isMoved = true;
  if (original[pos[0]][pos[1]] === "←") {
    nextVal = pos[1] - 1;
    if (!(nextVal < 0)) {
      nextPos = [pos[0], nextVal];
    }
    else{
      isMoved = false;
    }
  }

  if (original[pos[0]][pos[1]] === "→") {
    nextVal = pos[1] + 1;
    if (!(nextVal >= original[0].length)) {
      nextPos = [pos[0], nextVal];
    }else{
      isMoved = false;
    }
  }

  if (original[pos[0]][pos[1]] === "↓") {
    nextVal = pos[0] + 1;
    if (!(nextVal >= original.length)) {
      nextPos = [nextVal, pos[1]];
    }
    else{
      isMoved = false;
    }
  }

  if (original[pos[0]][pos[1]] === "↑") {
    nextVal = pos[0] - 1;
    if (!(nextVal < 0)) {
      nextPos = [nextVal, pos[1]];
    }
    else{
      isMoved = false;
    }
  }
  
  let coll = collides(board, nextPos);
  if (coll && isMoved) {
    const data = {
      collides: true,
      1: board[pos[0]][pos[1]],
      2: coll
    };
    return data;
  } else {
    return nextPos;
  }
}

function collides(board, pos) {
  const boardValue = board[pos[0]][pos[1]];
  if (
    boardValue === symbol[0] ||
    boardValue === symbol[1] ||
    boardValue === symbol[2] ||
    boardValue === symbol[3]
  ) {
    return false;
  } else {
    return boardValue;
  }
}

function copy2dArr(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push([]);
    for (let j = 0; j < arr[i].length; j++) {
      result[i].push(arr[i][j]);
    }
  }
  return result;
}

let board1 = generateBoard(5, 4);
console.log(board1);
// output
/*

[ [ '←', '↑', '↑', '→' ],
  [ '↓', '←', '↓', '←' ],
  [ '←', '↑', '←', '←' ],
  [ '←', '←', '←', '←' ],
  [ '→', '↓', '↑', '↓' ] ]

*/

console.log(whoMeetWhom(board1, 6));
// output
// No one meets each other

// testing with dummy board

let board2 = [
  ["↓", "←", "→", "↑"],
  ["→", "↓", "←", "→"],
  ["↓", "↓", "↑", "↓"],
  ["←", "↑", "→", "↑"],
  ["←", "↑", "←", "←"]
];

// whoMeetWhom(board2, 6);
// output
// A meets D after 4 steps
