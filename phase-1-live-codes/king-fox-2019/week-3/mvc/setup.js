/*
  Customer has many Order
*/

const db = require("./connection");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        itemName TEXT,
        totalPrice INTEGER,
        quantity INTEGER,
        day INTEGER,
        customerId INTEGER,
        status TEXT)`,
    err => {
      if (err) console.log(err);
      else console.log("Success create orders table")
    }
  );
  db.run(`CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
  )`,err => {
      if (err) console.log(err);
      else console.log("Success create customers table")
    });
});