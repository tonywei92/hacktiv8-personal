const command = process.argv[2];
const { EmployeeController, PatientController } = require("./controller");
switch (command) {
  case "register":
    {
      let username = process.argv[3];
      let password = process.argv[4];
      let position = process.argv[5];
      EmployeeController.register(username, password, position);
    }
    break;
  case "login":
    {
      let username = process.argv[3];
      let password = process.argv[4];
      EmployeeController.login(username, password);
    }
    break;
  case "addPatient":
    {
      let name = process.argv[3];
      let diagnosis = process.argv.slice(5);
      PatientController.add(name, diagnosis);
    }
    break;
  case "logout": {
    EmployeeController.logout();
  }
  break;
}
