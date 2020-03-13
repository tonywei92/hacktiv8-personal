const fs = require("fs");
class Student {
  constructor(id, name, umur) {
    this.id = id;
    this.name = name;
    this.umur = umur;
  }

  getDescription() {
    return `nama: ${this.name}, umur: ${this.umur}`;
  }

  static all(cb) {
    fs.readFile("./students.json", "utf8", function(err, data) {
      if (err) {
        cb(err);
      } else {
        let students = JSON.parse(data);
        let studentsObj = [];
        for (let i = 0; i < students.length; i++) {
          studentsObj.push(
            new Student(students[i].id, students[i].name, students[i].umur)
          );
        }
        cb(null, studentsObj);
      }
    });
  }

  // paramsObj = {
  //   where: {
  //     key: "name",
  //     value: "Edison"
  //   }
  // };
  static findAll(paramsObj, cb) {
    this.all((err, students) => {
      if (err) {
        cb(err);
      } else {
        const result = [];
        for (let i = 0; i < students.length; i++) {
          if (students[i][paramsObj.where.key] === paramsObj.where.value) {
            result.push(students[i]);
          }
        }
        cb(null, result);
      }
    });
  }

  static findOne(paramsObj, cb) {
    this.findAll(paramsObj, (err, students) => {
      if (err) {
        cb(err);
      } else {
        cb(null, students[0]);
      }
    });
  }

  static findById(id, cb) {
    this.findOne(
      {
        where: {
          key: "id",
          value: Number(id)
        }
      },
      function(err, student) {
        if (err) {
          cb(err);
        } else {
          cb(null, student);
        }
      }
    );
  }

  static update(objParam, cb) {
    this.all(objParam, function(err, students) {
      // process
      Student.save(students, cb);
    });
  }

  static create(objData, cb) {
    this.all((err, students) => {
      if (err) {
        cb(err);
      } else {
        let id = students[students.length - 1].id + 1;
        objData.id = id;
        students.push(new Student(objData.id, objData.name, objData.umur));
        this.save(students, cb);
      }
    });
  }

  static save(data, cb) {
    fs.writeFile("./students.json", JSON.stringify(data), err => {
      if (err) {
        cb(err);
      } else {
        cb();
      }
    });
  }
}

module.exports = Student;
