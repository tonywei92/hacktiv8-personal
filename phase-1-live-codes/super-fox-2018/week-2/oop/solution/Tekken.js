const Game = require('./game');

class Tekken extends Game {
  constructor (game) {
    super(game);
    this._started = false;
  }

  play () {
    super.play();
    this._started = true;
    console.log('Make sure you have plugged in your joystick!');
  }

  pause () {
    if (this._started)
      console.log('Tekken 7 paused...');
    else
      console.log("You haven't started the game yet");
  }
}

module.exports = Tekken;
