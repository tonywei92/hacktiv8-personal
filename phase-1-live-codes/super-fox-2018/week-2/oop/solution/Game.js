class Game {
  constructor (game) {
    this.name = game.name;
    this.price = game.price;
  }

  play () {
    console.log('Now playing ' + this.name + '...');
  }
}

module.exports = Game;
