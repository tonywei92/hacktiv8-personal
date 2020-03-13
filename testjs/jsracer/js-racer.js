"use strict";

let playersCount = process.argv[2];
let trackLength = process.argv[3];

const players = {};
const obstacles = {};
function diceRoll() {
  return Math.ceil(Math.random() * 6);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function printBoard() {
  for (let player in players) {
    printLine(player, players[player]);
  }
}

function printLine(player, pos) {
  let arr = [];
  for (let i = 0; i < trackLength; i++) {
    arr.push(" ");
  }
  arr[obstacles[player]] = "x";
  arr[pos] = player;
  console.log(arr.join(" | "));
}

function advance(player) {
  let value = diceRoll();
  if (players[player] + value > trackLength - 1) {
    players[player] = trackLength - 1;
  } else {
    players[player] += value;
  }
}

function finished() {
  for (let player in players) {
    if (players[player] === trackLength - 1) {
      return true;
    }
  }
  return false;
}

function winner() {
  for (let player in players) {
    if (players[player] === trackLength - 1) {
      console.log("Winner is " + player);
    }
  }
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function checkObstacle(player) {
  if (obstacles[player] === players[player]) {
    players[player] = 0;
    return true;
  }
  return false;
}

function start(playersCount) {
  const playersLetter = "abcde";
  for (let i = 0; i < playersCount; i++) {
    players[playersLetter[i]] = 0;
  }

  for (let i = 0; i < playersCount; i++) {
    obstacles[playersLetter[i]] =
      Math.floor(Math.random() * (trackLength - 4)) + 2;
  }

  clearScreen();
  printBoard();
  sleep(500);
  clearScreen();

  let finish = false;
  while (!finish) {
    for (let player in players) {
      advance(player);
      printBoard();
      sleep(500);
      clearScreen();

      if (checkObstacle(player)) {
        printBoard();
        sleep(500);
        clearScreen();
      }

      finish = finished();
      if (finish) {
        break;
      }
    }
  }
  printBoard();
  winner();
}

start(playersCount);
