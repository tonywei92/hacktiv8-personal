const db = require("./connection");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS instructors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name INTEGER,
        maxslots INTEGER)`,
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table instructors done setup");
      }
    }
  );
  db.run(
    `CREATE TABLE IF NOT EXISTS lectures (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title INTEGER,
        done INTEGER,
        instructor_id INTEGER,
        created_at DATE
    )
  `,
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table lectures done setup");
      }
    }
  );
});