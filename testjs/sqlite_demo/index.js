const db = require("./connection");

function getAuthor(id, cb) {
  db.get("SELECT * FROM authors WHERE id = ?", [id], (err, row) => {
    if (err) {
      cb(err);
    } else {
      if (row) {
        cb(null, row);
      } else {
        cb();
      }
    }
  });
}
