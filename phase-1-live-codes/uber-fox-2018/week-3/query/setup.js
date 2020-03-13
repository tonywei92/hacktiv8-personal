const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('tokox.db');

db.serialize(function() {
  let qTableCustomer = `CREATE TABLE
                   Customers
                   (
                     id INTEGER PRIMARY KEY AUTOINCREMENT,
                     name VARCHAR,
                     gender VARCHAR(8),
                     age INTEGER,
                     email VARCHAR,
                     phoneNumber VARCHAR(13)
                   )`

   let qTableItem = `CREATE TABLE
                    Items
                    (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      itemName VARCHAR,
                      price REAL
                    )`

    let qTableTrans = `CREATE TABLE
                     Transactions
                     (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       quantity INTEGER,
                       paymentMethod VARCHAR,
                       itemId INTEGER,
                       customerId INTEGER,
                       FOREIGN KEY (itemId) REFERENCES Items(id),
                       FOREIGN KEY (customerId) REFERENCES Customers(id)
                     )`

  db.run(qTableCustomer, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Tabel Customer sukses dibuat');
    }
  })

  db.run(qTableItem, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Tabel Item sukses dibuat');
    }
  })

  db.run(qTableTrans, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Tabel Transactions sukses dibuat');
    }
  })
})
