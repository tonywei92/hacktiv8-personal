const db = require("./connection");

db.serialize(() => {
  db.run(
    `INSERT INTO customers (name) VALUES (?), (?), (?), (?)`,
    ["Toni", "Stefani", "Isro", "Nadia"],
    err => {
      if (err) console.log(err);
      else console.log("success insert into customers")
    }
  );
});