const db = require('./connection')

db.serialize(function () {
  const createPricesTable = `
    CREATE TABLE IF NOT EXISTS Prices
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        time TEXT,
        buy INTEGER,
        sell INTEGER
      )`

  db.run(createPricesTable, function (err) {
    if (!err) {
      console.log('Prices table created');
    } else {
      console.log('ERR: ', err);
    }
  })


  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS Users
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT,
        rupiahBalance INTEGER DEFAULT 0,
        bitcoinBalance REAL DEFAULT 0
      )`

  db.run(createUsersTable, function (err) {
    if (!err) {
      console.log('Users table created');
    } else {
      console.log('ERR: ', err);
    }
  })

  let createTransactionsTable = `
    CREATE TABLE IF NOT EXISTS Transactions
      ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        type TEXT,
        price INTEGER,
        amount REAL,
        time TEXT,
        FOREIGN KEY (userId) REFERENCES Users(id)
      )`

  db.run(createTransactionsTable, function (err) {
    if (!err) {
      console.log('Transactions Table created');
    } else {
      console.log('ERR: ', err);
    }
  })
})