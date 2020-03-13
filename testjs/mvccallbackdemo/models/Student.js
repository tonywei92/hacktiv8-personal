const fs = require('fs');
const file = './students.json';
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    static all(cb) {
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) {
                cb(err)
            }
            else {
                cb(null, JSON.parse(data))
            }
        })
    }

    static add(name, age, cb) {
        Student.all(function (err, students) {
            if (err) {
                cb(err)
            }
            else {
                students.push({
                    name: name,
                    age: age
                })
                Student.save(students, function (err, jumlahStudent) {
                    if (err) {
                        cb(err)
                    }
                    else {
                        cb(null, jumlahStudent)
                    }
                })
                return true;
            }
        })
    }

    static save(data, cb) {
        fs.writeFile(file, JSON.stringify(data, null, 2), function (err) {
            if (err) {
                cb(err)
            }
            else {
                cb(null, data.length)
            }
        })
    }
}
module.exports = Student;