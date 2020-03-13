const fs = require("fs");
const Employee = require("./Employee");
class Session {
  static login(username, password, cb) {
    const self = this;
    Employee.findOne(username, function(err, data) {
      if (err) {
        cb(err);
      } else {
        if (data.password === password) {
          self.persist(data, cb);
        } else {
          cb(new Error("Wrong password"));
        }
      }
    });
  }

  static getInfo(cb) {
    fs.readFile("./data/session.json", "utf8", function(err, data) {
      if (err) {
        cb(err);
      } else {
        cb(null, JSON.parse(data));
      }
    });
  }

  static isLoggedIn(cb) {
    this.getInfo(function(err, data) {
      if (err) {
        cb(err);
      } else {
        cb(null, !!Object.keys(data).length);
      }
    });
  }

  static persist(data, cb) {
    fs.writeFile(
      "./data/session.json",
      JSON.stringify({ username: data.username, role: data.role }, null, 2),
      function(err, data) {
        if (err) {
          cb(err);
        } else {
          cb(null, data);
        }
      }
    );
  }

  static canAddPatients(cb) {
    fs.readFile("./data/session.json", "utf8", function(err, data) {
      if (err) {
        cb(err);
      } else {
        const session = JSON.parse(data);
        if (session.role === "dokter") {
          cb(null, true);
        } else {
          cb(null, false);
        }
      }
    });
  }
  static logout(cb) {
    fs.writeFile("./data/session.json", JSON.stringify({}), function(err) {
      if (err) {
        cb(err);
      } else {
        cb(null, "logged out");
      }
    });
  }
}

module.exports = Session;
