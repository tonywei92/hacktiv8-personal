const command = process.argv[2];
const arguments = process.argv.slice(3);
const Controller = require('./controllers/Controller');

switch (command) {
    case "student:all":
        Controller.getStudents();
        break;
    case "student:add":
        Controller.addStudent(arguments[0], arguments[1]);
        break;
}