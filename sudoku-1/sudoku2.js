"use strict"

function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// 60fps ~ 1000/60 => 16.6666666667
function animatic(milliseconds = 16.667) {
  sleep(milliseconds);
  console.clear();
}

function startTimer() {
  let dt = new Date();

}

class Sudoku {
  constructor(board_string) {
    this.zeros = 0;
    this.makeBoard();
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

    this.depth = 0;

    // grand y and x shows the root recursive caller
    this.grandY = 0;
    this.grandX = 0;

    // last y and x shows the last 0 coord
    this.lastY = 0;
    this.lastX = 0;
    
    this.skip = 0;
    this.grandMoved = -1;
  }

  solve(skip = 0) {
    let coord = this.getNextBlank(skip);

    if(this.depth == 0) { // update grandparent
      this.grandY = coord[0];
      this.grandX = coord[1];
      this.grandMoved++;
    }

    console.log(`recursive depth: ${this.depth} | grandY: ${this.grandY} | grandX: ${this.grandX}\n`
    + `grandParent coord has moved: ${this.grandMoved} times`);

    // when coord's value is boolean false, the board is filled
    if(!coord) return true;

    for(let i = 1; i <= 9; i++) {
      if(this.ok(i, coord[0], coord[1])) {
        // safe to put
        animatic();
        this.sudoBoard[coord[0]][coord[1]] = i;
        console.table(this.sudoBoard);
        
        //based on this placement, we go in next
        // the return true here will only be called the very last when the board has been fully filled
        this.depth++;

        if(this.solve()) {
          return true;
        }

        this.depth--;
        // if the recursive above failed, the step come to this line, the caller instance, means: the solve called failed to put any number 1 to 9 in the next 0 position.
        // therefore, we put back zero to current coord and let the loop try the next possible i

        animatic();
        this.sudoBoard[coord[0]][coord[1]] = 0;
        console.table(this.sudoBoard);
      }
    }
    // back to grandparent, but not tried till starting from the last 0
    if(this.depth == 0 && this.grandX != this.lastX && this.grandY != this.lastY) {
      this.skip++;
      this.solve(this.skip);
    }
    // either not in grandparent location or all possibilities have been tried;
    else return false;
  }

  // returns next 0 coordinate or both yx -f if board is filled
  getNextBlank(skip = 0) {
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(skip > 0) { // program have failed the recursive for 'skip' times
          skip--;
          continue;
        }

        if(this.sudoBoard[i][j] == 0) {
          // zero is found, return the coordinate
          return [i, j];
        }
      }
    }

    return false;
  }

  ok(num, y, x) {
    if(this.vPossible(num, x) && this.xPossible(num, y) && this.boxPossible(num, y, x)) return true;
    else return false;
  }

  // check vertically
  vPossible(num, x) {
    for(let i = 0; i < 9; i++) {
      if(this.sudoBoard[i][x] == num) return false;
    }

    return true;
  }

  // check horizontally
  xPossible(num, y) {
    for(let j = 0; j < 9; j++) {
      if(this.sudoBoard[y][j] == num) return false;
    }

    return true;
  }

  boxPossible(num, y, x) {
    let box = this.boxcoordToXYobj(this.getBoxIndex(y, x));

    for(let i = box.yMin; i <= box.yMax; i++) {
      for(let j = box.xMin; j <= box.xMax; j++) {
        // if in current mini box the same num is found, return false
        if(this.sudoBoard[i][j] == num) return false;
      }
    }

    return true;
  }

  // returns the index of the mini box
  getBoxIndex(y, x) {
    if(y < 3 && x < 3) return 0;
    if(y < 3 && x < 6) return 1;
    if(y < 3 && x < 9) return 2;
    if(y < 6 && x < 3) return 3;
    if(y < 6 && x < 6) return 4;
    if(y < 6 && x < 9) return 5;
    if(y < 9 && x < 3) return 6;
    if(y < 9 && x < 6) return 7;
    if(y < 9 && x < 9) return 8;
  }
  
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
    let displayBoard = [];
    let y = 0;
    let x = 0;

    for(let i = 0; i < 11; i++) {
      displayBoard.push([]);

      for(let j = 0; j <= 11; j++) {
        if(j == 3 || j == 7) displayBoard[i].push('|');
        else if(i == 3 || i == 7) {
          if(j == 10) {
            displayBoard[i].push('-');
            break;
          }
          displayBoard[i].push('-');
        }
        else {
          if(j == 11) {
            y++;
            x = 0;
          }
          else {
            displayBoard[i].push(this.sudoBoard[y][x]);
            x++;
          }
        }
      }
    }

    displayBoard = this.stringBoard(displayBoard);

    return displayBoard;
  }

  stringBoard(board) {
    let strBoard = '';

    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[i].length; j++) {
        strBoard += ` ${board[i][j]} `;
      }

      strBoard += '\n';
    }

    return strBoard;
  }

  // make sudoBoard and add up zeros for the instance according to the total of zeros in the board
  // also set the last zero location to this.lastY and this.lastX
  makeBoard() {
    let board = [];

    for(let i = 0; i < 9; i++) {
      board.push([]);

      for(let j = 0; j < 9; j++) {
        board[i].push(board_string[(i*9)+j]);
        if(board_string[(i*9)+j] == 0) {
          this.zeros++;
          this.lastY = i;
          this.lastX = j;
        }
      }
    }

    this.sudoBoard = board;
  }
}

let boardNo = 0;

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('./set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[boardNo]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
let stopwatch = (new Date).getTime();
game.solve()
let diff = (new Date).getTime()-stopwatch;
diff /= 1000;

console.log(`\n${game.board()}\nUsing Game board no: ${boardNo} | game was solved in: ${diff}s`);