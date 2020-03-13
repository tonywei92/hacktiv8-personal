"use strict";
var playerCount = process.argv[2];
var trackLength = Number(process.argv[3]);
var trackObstacle = [];
var players = [];
function diceRoll() {
  const MIN = 1;
  const MAX = 6;
  return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function getPlayerName(num) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  return letters[num];
}

function printBoard() {
  const tracks = [];
  for (let i = 0; i < playerCount; i++) {
    tracks.push([]);
    for (let j = 0; j < trackLength; j++) {
      if (players[i] === j) {
        tracks[i].push(getPlayerName([i]));
      } else {
        if (trackObstacle[i] === j) {
          tracks[i].push("x");
        } else {
          tracks[i].push(" ");
        }
      }
    }
    tracks[i] = "|" + tracks[i].join("|");
  }
  console.log(tracks.join("\n"));
}

function printLine(player, pos) {}

function advance(player) {
  const roll = diceRoll();
  if (players[player] === trackObstacle[player]) {
    trackObstacle[player] = null;
  } else if (players[player] + roll > trackLength - 1) {
    players[player] = trackLength - 1;
  } else {
    players[player] += roll;
  }
}

function finished() {
  for (let i = 0; i < players.length; i++) {
    if (players[i] === trackLength - 1) {
      return true;
    }
  }
  return false;
}

function winner() {
  let winner = -1;
  for (let i = 0; i < players.length; i++) {
    if (players[i] === trackLength - 1) {
      winner = i;
    }
  }
  if (winner > -1) {
    console.log("Player " + getPlayerName(winner) + " is the winner");
  }
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function main() {
  clearScreen();
  for (let i = 0; i < playerCount; i++) {
    players.push(0);
    trackObstacle.push(Math.floor(Math.random() * (29 - 0 + 1) + 0));
  }
  loop1: while (true) {
    for (let i = 0; i < players.length; i++) {
      printBoard();
      if (finished()) {
        break loop1;
      }
      sleep(100);
      clearScreen();
      advance(i);
    }
  }
  console.log(winner());
}

main();
// console.log(diceRoll());
