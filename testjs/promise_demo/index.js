function pembagian(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("error angka tidak boleh 0");
    } else {
      setTimeout(() => {
        resolve(a / b);
      }, 1000);
    }
  });
}

function pengurangan(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("salah satu angka 0");
    }
    setTimeout(() => {
      resolve(a - b);
    }, 1000);
  });
}

pembagian(4, 2)
  .then(hasil => {
    console.log(hasil);
    return pengurangan(hasil, 1);
  })
  .then(hasil => {
    console.log(hasil);
    return pengurangan(hasil, 2);
  })
  .then(hasil => {
    if (hasil < 0) {
      throw "hasil kurang dari 0";
    } else {
      console.log(hasil);
    }
  })
  .catch(err => {
    console.log(err);
  });

const fs = require("fs");

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      fs.readFile("./students.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

Student.all()
  .then(data => {
    console.log(data);
    return Student.findOne(1);
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data.db");

function all() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM students", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
all()
  .then(data => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i]);
    }
    return filtering(arr);
  })
  .then()
  .catch(err => {
    console.log(err);
  });

class Employee {
  static find(param) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT * FROM employee WHERE ${param.where.key} = ?`,
        param.where.value,
        function(err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }
}

class EmployeeController {
  login(username, password) {
    Employee.find({
      where: {
        key: "login",
        value: 1
      }
    })
      .then(employee => {
        if (employee) {
          throw "sudah ada yang login";
        } else {
          return Employee.find({
            where: {
              key: "username",
              value: username
            }
          });
        }
      })
      .then(employee => {
        if (employee) {
          if (employee.password === password) {
            return Employee.update({
              where: {
                key: "username",
                value: "username"
              },
              update: {
                key: "login",
                value: 1
              }
            });
          } else {
            throw "Salah password";
          }
        } else {
          throw "Employee tidak ditemukan";
        }
      })
      .then(() => {
        console.log("berhasil");
      })
      .catch(err => {
        DataView.error(err);
      });
  }
}
