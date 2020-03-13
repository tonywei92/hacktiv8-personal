const command = process.argv[2];
const arguments = process.argv.slice(3);
const Controller = require('./controllers/Controller')

switch (command) {
    case "login":
        Controller.login(arguments[0], arguments[1])
        break;
}