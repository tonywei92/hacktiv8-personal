const Student = require('../models/Student');
const StudentView = require('../views/StudentView');
const GeneralView = require('../views/GeneralView');

class Controller {
    static getStudents() {
        const students = Student.all();
        StudentView.showMany(students);
    }

    static addStudent(name, age) {
        Student.add(name, age);
        GeneralView.showSuccess('Success add student: ' + name)
    }
}

module.exports = Controller;