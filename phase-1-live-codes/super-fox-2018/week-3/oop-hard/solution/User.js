const Repository = require('./Repository');

class User {
  constructor (userObject) {
    this._fullName = userObject.fullName;
    this._username = userObject.username;
    this._password = userObject.password;
    this._repositories = [];
  }

  get fullname () {
    return this._fullName;
  }

  get username () {
    return this._username;
  }

  get password () {
    return this._password;
  }

  get repositories () {
    return this._repositories;
  }

  createRepository (repositoryName) {
    this._repositories.push(new Repository(repositoryName));
  }
}

module.exports = User;
