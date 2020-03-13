const Student = require('../models/Student');
const GeneralView = require('../views/GeneralView');
class Controller {
    static getAllStudent() {
        Student.all(
            function (err, data) {
                if (err) {
                    GeneralView.showMessage('ERROR', err)
                }
                else {
                    GeneralView.showMessage('RESULT', data);
                }
            }
        );
    }

    static addStudent(name, age) {
        Student.add(name, age, function (err, jumlahStudent) {
            if (err) {
                GeneralView.showMessage('ERROR', err)
            }
            else {
                GeneralView.showMessage('SUCCESS', 'Student added', jumlahStudent)
            }
        })
    }

}

module.exports = Controller;