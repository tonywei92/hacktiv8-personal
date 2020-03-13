"use strict"
const playerCount = +process.argv[2];
const trackLength = +process.argv[3];
const players = {};

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
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
        arr.push(' ');
    }
    arr[pos] = player;
    console.log(arr.join(' | '));
}

function advance(player) {
    const value = diceRoll();
    if (players[player] + value > trackLength - 1) {
        players[player] = trackLength - 1;
    }
    else {
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

}

function clearScreen() {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
}

function start() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < playerCount; i++) {
        players[alphabet[i]] = 0;
    }
    clearScreen();
    printBoard();
    sleep(500);
    clearScreen();
    while (!finished()) {
        for (let player in players) {
            advance(player)
            printBoard();
            sleep(500);
            clearScreen();
            if (finished()) {
                break;
            }
        }
    }
    printBoard();
}
start();