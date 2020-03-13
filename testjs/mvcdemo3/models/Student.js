const fs = require('fs');
const file = './students.json';

class Student {
    static all() {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    }

    static add(name, age) {
        const students = this.all();
        students.push({
            name: name,
            age: age
        })
        this.save(students);
    }

    static save(data) {
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
}
module.exports = Student;