"use strict"
const Controller = require('./controllers');
var argv = process.argv

let feature = argv[2];
let command = argv[3];
let option = argv.slice(4);

Controller.manageCommand(feature, command, option)
