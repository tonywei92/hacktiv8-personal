const fs = require("fs");

class Session {
  static data = {};
  static _loadData() {
    this.data = JSON.parse(fs.readFileSync("session.json", "utf8"));
  }

  static _persist() {
    fs.writeFileSync("session.json", JSON.stringify(this.data), "utf8");
  }

  static getData() {
    this._loadData();
    return this.data;
  }

  static setLogin(data) {
    this._loadData();
    this.data.user = data.username;
    this.data.position = data.position;
    this._persist();
  }

  static clear() {
    this.data = {};
    this._persist();
  }
}

module.exports = Session;
