const db = require("../connection");
const tableName = "movies";
class Movie {
  static findById(id, cb) {
    db.get(`SELECT * FROM ${tableName} WHERE id = ?`, id, (err, row) => {
      if (err) {
        cb(err);
      } else {
        cb(null, row);
      }
    });
  }
}

module.exports = Movie;
