const command = process.argv[2];
const arguments = process.argv.slice(3);
const Controller = require('./controllers/Controller');
switch (command) {
    case 'students:all':
        Controller.getAllStudent();
        break;
    case 'students:add':
        Controller.addStudent(arguments[0], Number(arguments[1]));
        break;
}