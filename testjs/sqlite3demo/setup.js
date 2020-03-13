const db = require("./connection");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS authors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      alamat TEXT,
      age INTEGER
  )`,
    err => {
      if (err) {
        console.log(err);
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      quantity INTEGER,
      price INTEGER
  )`,
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
});
