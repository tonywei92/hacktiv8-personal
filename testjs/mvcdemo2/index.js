const command = process.argv[2];
const parameters = process.argv.slice(3);
const EmployeeController = require('./Controllers/EmployeeController');
switch(command){
    case "login":
        EmployeeController.login(parameters[0], parameters[1])
        break;
    case "ubahjabatan":
        EmployeeController.ubahJabatan(parameters[0], parameters[1])
        break;
    case "register":
        EmployeeController.register(parameters[0], parameters[1], parameters[2])
}


















