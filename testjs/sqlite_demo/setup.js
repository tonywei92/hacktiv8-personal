const db = require("./connection");

db.serialize(function() {
  db.run(`CREATE TABLE IF NOT EXISTS authors
              (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT,
                  address TEXT,
                  age INTEGER)`);

  db.run(`CREATE TABLE IF NOT EXISTS authors
              (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT,
                  address TEXT,
                  age INTEGER)`);
});

var keywordSearch = "angga'; DELETE * FROM users;'"`SELECT * FROM authors WHERE name LIKE 'angga'; DELETE * FROM users;''`;

db.run(
  `INSERT INTO authors (name, address)
  VALUES('Elizabeth', ?)`,
  ["Jln Merdeka"],
  function(err) {}
)`SELECT * FROM authors WHERE name = 'Elizabeth'``INSERT INTO books (name, price, author_id)
  VALUES('Catatan kaki', 50000, ?)`;
