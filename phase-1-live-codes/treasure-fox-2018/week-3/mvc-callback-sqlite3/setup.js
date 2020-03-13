const sqlite3 = require('sqlite3').verbose();
const db      = new sqlite3.Database('restaurant.db');

function initialSchema () {
  db.serialize(function () {

    const createMenusQuery = `
      CREATE TABLE IF NOT EXISTS menus
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL,
        isAvailable INTEGER
      )
    `;

    const createOrdersQuery = `
      CREATE TABLE IF NOT EXISTS orders
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        menu_id INTEGER,
        order_date TEXT,
        FOREIGN KEY(menu_id) REFERENCES menus(id)
      )
    `;

    db.run(createMenusQuery);
    console.log('Successfully created `menus` table');

    db.run(createOrdersQuery);
    console.log('Successfully created `orders` table');

  });
}

initialSchema();
