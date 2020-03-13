const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hospital.db");

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id;
    this.name = name;
    this.diagnosis = diagnosis;
  }

  save(cb) {
    db.run(
      "INSERT INTO patients (name, diagnosis) VALUES (?,?)",
      [this.name, this.diagnosis.join(",")],
      err => {
        if (err) {
          cb(err);
        } else {
          cb(null, { name: this.name, diagnosis: this.diagnosis });
        }
      }
    );
  }

  static count(cb) {
    db.get(`SELECT count(*) as count FROM patients`, (err, row) => {
      if (err) {
        cb(err);
      } else {
        cb(null, row.count);
      }
    });
  }
}

class Employee {
  constructor(name, position, username, password) {
    this.name = name;
    this.position = position;
    this.username = username;
    this.password = password;
  }

  static count(cb) {
    db.get(`SELECT count(*) as count FROM employees`, (err, row) => {
      if (err) {
        cb(err);
      } else {
        cb(null, row.count);
      }
    });
  }

  static checkAuth(username, password, cb) {
    db.get(
      "SELECT * FROM employees WHERE username = ? AND password = ?",
      [username, password],
      (err, row) => {
        if (err) {
          cb(err);
        } else {
          cb(null, row);
        }
      }
    );
  }

  static get(field, value, cb) {
    db.all(
      "SELECT * FROM employees WHERE ? = ?",
      [field, value],
      (err, rows) => {
        if (err) {
          cb(err);
        } else {
          cb(null, rows);
        }
      }
    );
  }

  save(cb) {
    db.run(
      `INSERT INTO employees (username, position, password) VALUES (?,?,?)`,
      [this.username, this.position, this.password],
      err => {
        if (err) {
          cb(err);
        } else {
          cb(null, {
            username: this.username,
            position: this.position,
            password: this.password
          });
        }
      }
    );
  }
}

module.exports = {
  Employee,
  Patient
};
