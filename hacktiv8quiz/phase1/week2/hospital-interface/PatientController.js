const Patient = require("./models/Patient");
const View = require("./view");
class PatientController {
  static addPatient(name, diagnosis) {
    Patient.add(name, diagnosis, function(err, data) {
      if (err) {
        console.log(View.addPatientDenied());
      } else {
        console.log(View.successAddPatient(data));
      }
    });
  }
}

module.exports = PatientController;
