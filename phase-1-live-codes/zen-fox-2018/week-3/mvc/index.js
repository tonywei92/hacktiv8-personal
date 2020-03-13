const command = process.argv.slice(2);
const Controller = require('./controllers/controller')

Controller.menu(command);
