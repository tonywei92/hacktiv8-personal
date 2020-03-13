var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('foods.db');



module.exports = db