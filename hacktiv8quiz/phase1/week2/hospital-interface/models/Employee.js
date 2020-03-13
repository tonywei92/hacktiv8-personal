const fs = require("fs");
class Employee {
  constructor(username, role, password, _new = true) {
    this.username = username;
    this.role = role;
    this.password = password;
    this._new = _new;
  }

  static findOne(username, cb) {
    const self = this;
    this.findAll(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        let found = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i].username === username) {
            found = true;
            return cb(
              null,
              new self(data[i].username, data[i].role, data[i].password)
            );
          }
        }
        if (!found) {
          return cb(new Error("username not found"));
        }
      }
    });
  }

  static findAll(cb) {
    fs.readFile("./data/employee.json", "utf8", function(err, data) {
      if (err) {
        cb(err);
      } else {
        cb(null, JSON.parse(data));
      }
    });
  }

  findAll(cb) {
    fs.readFile("./data/employee.json", "utf8", function(err, data) {
      if (err) {
        cb(err);
      } else {
        cb(null, JSON.parse(data));
      }
    });
  }

  static create(input, cb) {
    let employee = new Employee(input.username, input.role, input.password);
    employee.save(function(err, data) {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  }

  static save(data, cb) {
    fs.writeFile(
      "./data/employee.json",
      JSON.stringify(data, null, 2),
      function(err) {
        if (err) cb(err);
        else cb(null, data);
      }
    );
  }

  save(cb) {
    const self = this;
    this.findAll(function(err, data) {
      if (err) {
        cb(err);
      } else {
        if (self._new) {
          data.push({
            username: self.username,
            password: self.password,
            role: self.role
          });
        } else {
          for (let i = 0; i < data.length; i++) {
            if (data[i].username === self.username) {
              data[i].password = self.password;
              data[i].role = self.role;
            }
          }
        }
        fs.writeFile(
          "./data/employee.json",
          JSON.stringify(data, null, 2),
          function(err) {
            if (err) cb(err);
            else cb(null, data);
          }
        );
      }
    });
  }
}

module.exports = Employee;
