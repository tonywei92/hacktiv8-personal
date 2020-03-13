const commands = process.argv;
const EmployeeController = require("./EmployeeController");
const PatientController = require("./PatientController");
switch (commands[2]) {
  case "register":
    EmployeeController.register(commands[3], commands[4], commands[5]);
    break;
  case "login":
    EmployeeController.login(commands[3], commands[4]);
    break;
  case "addPatient":
    PatientController.addPatient(commands[3], commands.slice(4));
    break;
  case "logout":
    EmployeeController.logout();
    break;
}
