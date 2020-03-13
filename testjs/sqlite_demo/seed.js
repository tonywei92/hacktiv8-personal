const db = require("./connection");

db.serialize(() => {
  db.run(
    `INSERT INTO authors
                (name, address, age) 
                VALUES (?, ?, ?)`,
    ["Angga Bani", "Depok", 20],
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
});
