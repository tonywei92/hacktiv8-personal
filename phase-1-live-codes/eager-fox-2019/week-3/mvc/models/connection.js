
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./models/database_football.db")

module.exports = db