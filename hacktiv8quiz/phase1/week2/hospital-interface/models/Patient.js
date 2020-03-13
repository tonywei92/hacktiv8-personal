const fs = require("fs");
const Session = require("./Session");
const View = require("../view");
class Patient {
  constructor(name, diagnosis, id, _new = true) {
    this.id = id;
    this.name = name;
    this.diagnosis = diagnosis;
    this._new = _new;
  }

  static findAll(cb) {
    fs.readFile("./data/patient.json", "utf8", function(err, data) {
      if (err) {
        cb(err);
      } else {
        const parsed = JSON.parse(data);
        const patients = [];
        for (let i = 0; i < parsed.length; i++) {
          patients.push(new Patient(parsed.id, parsed.name, parsed.diagnosis));
        }
      }
    });
  }

  static add(name, diagnosis, cb) {
    Session.canAddPatients(function(err, data) {
      if (err) {
        cb(new Error("Tidak memiliki akses untuk patient"));
      } else {
        let patient = new Patient(name, diagnosis);
        patient.save(cb);
      }
    });
  }

  findAll(cb) {
    fs.readFile("./data/patient.json", "utf8", function(err, data) {
      if (err) {
        cb(err);
      } else {
        const parsed = JSON.parse(data);
        const patients = [];
        for (let i = 0; i < parsed.length; i++) {
          patients.push(
            new Patient(
              parsed[i].name,
              parsed[i].diagnosis,
              parsed[i].id,
              false
            )
          );
        }
        cb(null, patients);
      }
    });
  }

  save(cb) {
    const self = this;
    this.findAll(function(err, data) {
      if (err) {
        cb(err);
      } else {
        if (self._new) {
          const newId = data.length === 0 ? 1 : data[data.length - 1].id + 1;
          data.push({
            id: newId,
            name: self.name,
            diagnosis: self.diagnosis
          });
        }

        fs.writeFile(
          "./data/patient.json",
          JSON.stringify(data, null, 2),
          function(err) {
            if (err) {
              cb(err);
            } else {
              cb(new Error("Not authorized"), data);
            }
          }
        );
      }
    });
  }
}

module.exports = Patient;
