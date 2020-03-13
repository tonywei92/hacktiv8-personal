class Account {
  constructor (account) {
    this._name = account.name;
    this._email = account.email;
    this._balance = 0;
    this._games = [];
  }

  get balance () {
    return this._balance;
  }

  increaseBalance (by) {
    this._balance += by;
  }

  buyGame (game) {
    if (game.price <= this._balance) {
      this._games.push(game);
      this._balance -= game.price;
      console.log('Successfully bought ' + game.name + '!');
    } else {
      console.log('Your balance is not enough to buy ' + game.name + '!');
    }
  }

  findGameIndex (gameName) {
    for (let i = 0; i < this._games.length; i++) {
      const game = this._games[i];
      if (game.name === gameName) {
        return i;
      }
    }
    return -1;
  }

  pauseGame (gameName) {
    const gameIndex = this.findGameIndex(gameName);
    const game = this._games[gameIndex];
    if (game) {
      return game.pause();
    }
    return console.log('You don\'t have that game!');
  }

  playGame (gameName) {
    const gameIndex = this.findGameIndex(gameName);
    const game = this._games[gameIndex];
    if (game) {
      return game.play();
    }
    return console.log('You don\'t have that game!');
  }

  sellGame (gameName) {
    const gameIndex = this.findGameIndex(gameName);
    const game = this._games[gameIndex];
    if (game) {
      if (game.price > 0) {
        this.increaseBalance(game.price / 2);
        return console.log(game.name + ' sold for ' + (game.price / 2));
      }
      return console.log('You can\'t sell a free game!');
    }
    return console.log('You don\'t have that game!');
  }
}

module.exports = Account;
