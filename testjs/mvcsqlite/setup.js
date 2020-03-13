const db = require("./connection");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS authors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        address TEXT,
        age INTEGER
    )`,
    err => {
      if (err) console.log(err);
      else {
        console.log("success setup");
      }
    }
  );
});
