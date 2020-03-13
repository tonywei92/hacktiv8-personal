const { Employee, Patient } = require("./model");
const View = require("./view");
const Session = require("./session");

class EmployeeController {
  static register(username, password, position) {
    const employee = new Employee("", position, username, password);
    employee.save((err, msg) => {
      if (err) {
        console.log(View.error(err));
      } else {
        Employee.count((err, count) => {
          if (err) {
            console.log(View.error(err));
          } else {
            console.log(View.employeeAddSuccess(msg, count));
          }
        });
      }
    });
  }

  static login(username, password) {
    Employee.checkAuth(username, password, (err, data) => {
      if (err) {
        console.log(View.error(err));
      } else {
        if (!data) {
          console.log(View.msg("username / password wrong"));
        } else {
          Session.setLogin(data);
          console.log(View.loginSuccess(data));
        }
      }
    });
  }

  static logout() {
    Session.clear();
  }
}

class PatientController {
  static add(name, diagnosis) {
    if (Session.getData().position !== "dokter") {
      return console.log(View.error("tidak memiliki akses untuk add patient"));
    }
    const patient = new Patient("", name, diagnosis);
    patient.save((err, data) => {
      if (err) {
        console.log(View.error(err));
      } else {
        Patient.count((err, count) => {
          if (err) {
            console.log(View.error(err));
          } else {
            console.log(View.patientAddSuccess(data, count));
          }
        });
      }
    });
  }
}

module.exports = {
  EmployeeController,
  PatientController
};
