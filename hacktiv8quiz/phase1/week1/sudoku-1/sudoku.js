"use strict"
class Sudoku {
  board_string = [[]];
  constructor(board_string) {
    for (let i = 0; i < board_string.length; i++) {
      this.board_string[this.board_string.length - 1].push(Number(board_string[i]));
      if ((i + 1) % 9 === 0 && i < board_string.length - 1) {
        this.board_string.push([]);
      }
    }
  }

  solve() {
    let row = -1, col = -1, isEmpty = true;
    for (let i = 0; i < this.board_string.length; i++) {
      for (let j = 0; j < this.board_string.length; j++) {
        if (this.board_string[i][j] === 0) {
          row = i;
          col = j;
          isEmpty = false;
          break;
        }
      }
      if (!isEmpty) {
        break;
      }
    }
    if (isEmpty) {
      return true;
    }
    for (let num = 1; num <= this.board_string.length; num++) {
      if (this.isSafe(row, col, num)) {
        this.board_string[row][col] = num;
        if (this.solve()) {
          return true;
        }
      }
      else {
        this.board_string[row][col] = 0;
      }
    }
    return false;
  }

  isSafe(row, col, num) {

    for (let i = 0; i < this.board_string.length; i++) {
      if (this.board_string[row][i] === num) {
        return false;
      }
    }

    for (let i = 0; i < this.board_string.length; i++) {
      if (this.board_string[i][col] === num) {
        return false;
      }
    }

    const root = Math.sqrt(this.board_string.length);
    let rowStart = row - row % root;
    let colStart = col - col % root;
    for (let i = rowStart; i < rowStart + root; i++) {
      for (let j = colStart; j < colStart + root; j++) {
        if (this.board_string[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  }
  // Returns a string representing the current state of the board
  board() {
    console.table(this.board_string);
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var path = require('path');
var board_string = fs.readFileSync(path.resolve(__dirname, 'set-01_sample.unsolved.txt'))
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board())
