"use strict";
const words = require("./data");

const TrieNode = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};

const Trie = function() {
  this.root = new TrieNode();
  this.add = function(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new TrieNode());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return {
      valid: node.keys.has(word),
      word: node.keys.has(word) && node.keys.get(word).isEnd()
    };
  };
};

class Boggle {
  constructor(lib) {
    this.lib = lib;
    this.buildTrie();
  }

  buildTrie() {
    this.trie = new Trie();
    for (let i = 0; i < this.lib.length; i++) {
      this.trie.add(this.lib[i]);
    }
  }

  isSafe(i, j, visited) {
    return (
      i >= 0 &&
      i < this.board.length &&
      j >= 0 &&
      j < this.board.length &&
      !visited[i][j]
    );
  }

  searchWord(root, board, i, j, visited, str) {
    if (root.isEnd() === true) console.log(str);

    if (this.isSafe(i, j, visited)) {
      visited[i][j] = true;

      for (let key of root.keys.keys()) {
        if (this.isSafe(i + 1, j + 1, visited) && board[i + 1][j + 1] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i + 1,
            j + 1,
            visited,
            str + key
          );
        }

        if (this.isSafe(i, j + 1, visited) && board[i][j + 1] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i,
            j + 1,
            visited,
            str + key
          );
        }

        if (this.isSafe(i - 1, j + 1, visited) && board[i - 1][j + 1] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i - 1,
            j + 1,
            visited,
            str + key
          );
        }

        if (this.isSafe(i + 1, j, visited) && board[i + 1][j] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i + 1,
            j,
            visited,
            str + key
          );
        }
        if (this.isSafe(i + 1, j - 1, visited) && board[i + 1][j - 1] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i + 1,
            j - 1,
            visited,
            str + key
          );
        }
        if (this.isSafe(i, j - 1, visited) && board[i][j - 1] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i,
            j - 1,
            visited,
            str + key
          );
        }
        if (this.isSafe(i - 1, j - 1, visited) && board[i - 1][j - 1] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i - 1,
            j - 1,
            visited,
            str + key
          );
        }

        if (this.isSafe(i - 1, j, visited) && board[i - 1][j] == key) {
          this.searchWord(
            root.keys.get(key),
            board,
            i - 1,
            j,
            visited,
            str + key
          );
        }
      }
      visited[i][j] = false;
    }
  }

  solve(board) {
    this.board = board;
    let root = this.trie.root;
    let visited = [...Array(board.length)].map(arr =>
      Array(board.length).fill(false)
    );
    let pChild = root;

    let str = "";

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (pChild.keys.has(board[i][j])) {
          str = str + board[i][j];
          this.searchWord(
            pChild.keys.get(board[i][j]),
            board,
            i,
            j,
            visited,
            str
          );
          str = "";
        }
      }
    }
  }
}

const boggle = new Boggle(words);
boggle.solve([
  ["S", "A", "Y", "A"],
  ["M", "A", "K", "A"],
  ["J", "O", "I", "N"],
  ["D", "R", "N", "N"]
]);
