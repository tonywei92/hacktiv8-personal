const Game = require('./Game');
const Tekken = require('./Tekken');
const Account = require('./Account');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const dota2 = new Game({ name: 'Dota 2', price: 0 });
const tekken7 = new Tekken({ name: 'Tekken 7', price: 460000 });

const dimitri = new Account({ name: 'Dimitri', email: 'dim@itri.com' });

dimitri.buyGame(dota2);
// Successfully bought Dota 2!

dimitri.buyGame(tekken7);
// Your balance is not enough to buy Tekken 7!

dimitri.increaseBalance(460000);

dimitri.buyGame(tekken7);
// Successfully bought Tekken 7!

dimitri.playGame('Dota 2');
// Now playing Dota 2...

dimitri.playGame('Tekken 7');
// Now playing Tekken 7...
// Make sure you have plugged in your joystick!

dimitri.pauseGame('Tekken 7');
// Tekken 7 paused...

dimitri.sellGame('Dota 2');
// You can't sell a free game!
dimitri.sellGame('Tekken');
// You don't have that game!
dimitri.sellGame('Tekken 7');
// Tekken 7 sold for 230000

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
