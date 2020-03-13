const Employee = require("./models/Employee");
const Session = require("./models/Session");
const View = require("./view");
class EmployeeController {
  static register(username, password, role) {
    Employee.create({ username, password, role }, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(View.successReg(data));
      }
    });
  }
  static login(username, password) {
    Session.getInfo(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        if (Object.keys(data).length > 0) {
          console.log(View.alreadyLoggedIn(data));
        } else {
          Session.login(username, password, function(err, data) {
            if (err) {
              console.log(View.failedLogin(username));
            } else {
              console.log(View.successLogin(username));
            }
          });
        }
      }
    });
  }

  static logout() {
    Session.logout(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(View.logoutSuccess());
      }
    });
  }
}

module.exports = EmployeeController;
