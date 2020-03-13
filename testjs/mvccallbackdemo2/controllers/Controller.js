const Employee = require('../models/Employee');

class Controller {
    static login(username, password) {
        Employee.login(username, password, function (err, message) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(message)
            }
        })
    }
}

module.exports = Controller;