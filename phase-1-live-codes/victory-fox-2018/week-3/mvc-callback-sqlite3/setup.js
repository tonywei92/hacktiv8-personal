const sqlite3 = require('sqlite3').verbose();
const db      = new sqlite3.Database('ticket.db');

function initialSchema () {
  db.serialize(function () {

    const createMenusQuery = `
      CREATE TABLE IF NOT EXISTS Tickets
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL,
        schedule TEXT,
        isAvailable INTEGER
      )
    `;

    const createOrdersQuery = `
      CREATE TABLE IF NOT EXISTS Orders
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ticketId INTEGER,
        order_date TEXT,
        FOREIGN KEY(ticketId) REFERENCES Tickets(id)
      )
    `;

    db.run(createMenusQuery);
    console.log('Successfully created `Tickets` table');

    db.run(createOrdersQuery);
    console.log('Successfully created `Orders` table');

  });
}

initialSchema();
