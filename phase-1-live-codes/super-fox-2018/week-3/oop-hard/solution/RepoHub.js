const User = require('./User');

class RepoHub {
  constructor () {
    this._users = [];
  }

  auth (username, password) {
    for (let i = 0; i < this._users.length; i++) {
      const user = this._users[i];
      if  (user.username === username && user.password === password) {
        return i;
      }
    }
    return -1;
  }

  findRepository (userIndex, repositoryName) {
    const repositories = this._users[userIndex].repositories;
    for (let i = 0; i < repositories.length; i++) {
      const repository = repositories[i];
      if (repository.name === repositoryName) {
        return i;
      }
    }
    return -1;
  }

  createUser (userObject) {
    this._users.push(new User(userObject));
  }

  createRepository (username, password, repositoryName) {
    const userIndex = this.auth(username, password);
    if (userIndex !== -1) {
      this._users[userIndex].createRepository(repositoryName);
    } else {
      console.log('Incorrect Username/Password');
    }
  }

  deleteRepository (username, password, repositoryName) {
    const userIndex = this.auth(username, password);
    if (userIndex !== -1) {
      const repositoryIndex = this.findRepository(userIndex, repositoryName);
      if (repositoryIndex !== -1) {
        this._users[userIndex].repositories.splice(repositoryIndex, 1);
      } else {
        console.log('Repository doesn\'t exist');
      }
    } else {
      console.log('Incorrect Username/Password');
    }
  }

  userCommit (username, password, repositoryName) {
    const userIndex = this.auth(username, password);
    if (userIndex !== -1) {
      const repositoryIndex = this.findRepository(userIndex, repositoryName);
      if (repositoryIndex !== -1) {
        this._users[userIndex].repositories[repositoryIndex].commit();
      } else {
        console.log('Repository doesn\'t exist');
      }
    } else {
      console.log('Incorrect Username/Password');
    }
  }
}

module.exports = RepoHub;
