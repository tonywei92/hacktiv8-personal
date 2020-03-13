const sql = require('sqlite3').verbose()
const db = new sql.Database('database.db')
module.exports = {
  db: db
}