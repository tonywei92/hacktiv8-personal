class Repository {
  constructor (name) {
    this._name = name;
    this._commits = 0;
  }

  get name () {
    return this._name;
  }

  get commits () {
    return this._commits;
  }

  commit () {
    this._commits++;
  }
}

module.exports = Repository;
