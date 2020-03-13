"use strict"

class trace {
  constructor(num, x, y) {
    this.num = num;
    this.x = x;
    this.y = y;
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function animatic(milliseconds = 1) {
  sleep(milliseconds);
  console.clear();
}

class Sudoku {
  constructor(board_string) {
    this.makeBoard(); // variable name = board
    this.backStack = [];
    this.bannedStack = [];
    this.boxCoordsStack = [
      ['0,0', '2,2'],
      ['0,3', '2,5'],
      ['0,6', '2,8'],
      ['3,0', '5,2'],
      ['3,3', '5,5'],
      ['3,6', '5,8'],
      ['6,0', '8,2'],
      ['6,3', '8,5'],
      ['6,6', '8,8'],
    ];
    this.skip = this.getZeros();
    this.restart = 1;
  }

  makeBoard() {
    let board = [];

    for (let i = 0; i < 9; i++) {
      board.push([]);

      for (let j = 0; j < 9; j++) {
        board[i].push(board_string[(i * 9) + j]);
      }
    }

    this.sudoBoard = board;
  }

  solve() {

    let iteration = 1;

    while (!this.isSolved()) {

      if (iteration > 1) {
        // do something with backtrack
        console.log(`restart: ${this.restart} until ${this.skip} | backStack length: ${this.backStack.length} | iteration: ${iteration}`);

        this.recall();

        if (this.backStack.length == 0 && this.restart >= this.skip) {
          console.log(iteration);
          console.log(`Can't solve`);
          return;
        }
      }
      else this.fillSudoBoard();

      iteration++;
    }
  }

  recall() {
    let lastStack = this.backStack.pop();

    if (lastStack) {
      let lastCoord = this.stringToCoord(lastStack.coord);

      // delete last entry
      animatic();
      this.sudoBoard[lastCoord[0]][lastCoord[1]] = 0;
      console.table(this.sudoBoard);

      // refill the board after backtrack
      this.fillSudoBoard(lastCoord[0], lastCoord[1], lastStack.nodeNum + 1);
    } else {
      if (this.restart < this.skip) {
        this.fillSudoBoard(0, 0, 1, this.restart); // restart from next
        this.fillSudoBoard(); // try to refill the skipped part after the fill function before
        this.restart++;
      }
    }
  }

  getZeros() {
    let zeros = 0;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.sudoBoard[i][j] == 0) zeros++;
      }
    }

    return zeros;
  }

  fillSudoBoard(y = 0, x = 0, lastNum = 1, skip = 0) {
    if (lastNum > 9) {
      // console.log('here');
      return;
    }

    for (let i = y; i < 9; i++) {
      for (let j = x; j < 9; j++) {

        if (skip > 0) skip--;
        else if (this.sudoBoard[i][j] == 0) {
          this.insertNum(i, j, lastNum)
        }
      }
    }
  }

  insertNum(y, x, lastNum = 1) {
    for (let num = lastNum; num <= 9; num++) {
      let vPos = true;
      let xPos = true;
      let bPos = true;
      // console.log(y);
      // console.log(x);
      vPos = this.verticalPossibility(x, num);
      xPos = this.horizontalPossibility(y, num);
      bPos = this.boxPossibility(y, x, num);

      if (vPos && xPos && bPos) {
        // let backArr = [];
        let backNode = {
          nodeNum: num,
          coord: y + ',' + x,
        }

        // backArr.push(backNode);
        this.backStack.push(backNode);

        animatic();
        this.sudoBoard[y][x] = num;
        console.table(this.sudoBoard);
        // console.table(this.sudoBoard);
      }
    }
  }

  verticalPossibility(x, num) {
    for (let i = 0; i < 9; i++) {
      if (this.sudoBoard[i][x] == num) return false;
    }

    return true;
  }

  horizontalPossibility(y, num) {
    for (let j = 0; j < 9; j++) {
      if (this.sudoBoard[y][j] == num) return false;
    }

    return true;
  }

  boxPossibility(y, x, num) {
    let boxIndex = this.getBoxIndex(y, x);
    let coord = this.boxcoordToXYobj(boxIndex);

    for (let i = coord.yMin; i <= coord.yMax; i++) {
      for (let j = coord.xMin; j <= coord.xMax; j++) {
        if (this.sudoBoard[i][j] == num) return false;
      }
    }

    return true;
  }

  coordToString(y, x) {
    return y + ',' + x;
  }

  stringToCoord(str) {
    // let coord = [];
    // let y = +str[0];
    // let x = +str[2];

    // coord.push(y);
    // coord.push(x);
    return [+str[0], +str[2]];
  }

  // done
  isSolved() {
    // check if all boards is filled
    let solved = false;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.sudoBoard[i][j] == 0) return false;
      }
    }

    return true;
  }

  getBoxIndex(y, x) {
    if (y < 3 && x < 3) return 0;
    if (y < 3 && x < 6) return 1;
    if (y < 3 && x < 9) return 2;
    if (y < 6 && x < 3) return 3;
    if (y < 6 && x < 6) return 4;
    if (y < 6 && x < 9) return 5;
    if (y < 9 && x < 3) return 6;
    if (y < 9 && x < 6) return 7;
    if (y < 9 && x < 9) return 8;
  }

  // done
  getBoxVector(num) {
    let coordLimit = this.boxcoordToXYobj(num);
    let vectorBox = [];

    for (let i = coordLimit.yMin; i <= coordLimit.yMax; i++) {

      for (let j = coordLimit.xMin; j <= coordLimit.xMax; j++) {
        vectorBox.push(this.sudoBoard[i][j]);
      }
    }

    return vectorBox;
  }

  // done
  boxcoordToXYobj(num) {
    let min = this.boxCoordsStack[num][0];
    let max = this.boxCoordsStack[num][1];

    let coord = {
      yMin: Number(min[0]),
      yMax: Number(max[0]),
      xMin: Number(min[2]),
      xMax: Number(max[2])
    }

    return coord;
  }

  // Returns a string representing the current state of the board
  board() {
    return this.sudoBoard;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[1];

var game = new Sudoku(board_string);

// Remember: this will just fill out what it can and not "guess"
game.solve();

console.table(game.board());
