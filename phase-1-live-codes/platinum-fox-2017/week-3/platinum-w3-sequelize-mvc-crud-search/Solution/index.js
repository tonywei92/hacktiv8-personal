/*
node index.js menu list
node index.js menu add [name] [price] [ingredients]
node index.js menu update [id] [column] [value]
node index.js menu delete [id]

node index.js store list
node index.js store add [name] [city] [country] [rating] 
node index.js store update [id] [column] [value]
node index.js store delete [id]
*/

"use strict"
const Controller = require('./controllers');
var argv = process.argv

let feature = argv[2];
let command = argv[3];
let option = argv.slice(4);

Controller.manageCommand(feature, command, option)
