var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

function createTable() {
  db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS Contacts
      (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100),
      company VARCHAR(100), phone VARCHAR(100), email VARCHAR(100))`);

    db.run(`CREATE TABLE IF NOT EXISTS Addresses
      (id INTEGER PRIMARY KEY AUTOINCREMENT, street VARCHAR(100),
      city VARCHAR(100), zip_code VARCHAR(100), contact_id INTEGER, FOREIGN KEY(contact_id) REFERENCES Contacts(id))`);


    db.run(`INSERT INTO Contacts VALUES(null, 'ryan', 'hacktiv8 teknologi indonesia', '1234567', 'ryan@example.com')`)
    db.run(`INSERT INTO Contacts VALUES(null, 'vanessa', 'pondok indah office', '3456789', 'vanessa@example.com')`)
    db.run(`INSERT INTO Contacts VALUES(null, 'devi', 'hacktiv8 teknologi indonesia', '987654', 'devi@example.com')`)

    db.run(`INSERT INTO Addresses VALUES(null, 'jl.dago 1', 'bandung', '1212', 1)`)
    db.run(`INSERT INTO Addresses VALUES(null, 'jl. otista 88 ', 'bandung', '1414', 1)`)
    db.run(`INSERT INTO Addresses VALUES(null, 'jl. iskandar muda 9 ', 'dki jakarta', '9898', 2)`)
    db.run(`INSERT INTO Addresses VALUES(null, 'jl. gandaria 7', 'jakarta ', '9898', 2)`)
    db.run(`INSERT INTO Addresses VALUES(null, 'jl. kemayoran 10', 'jakarta', '3456', 3)`)

  })
}

createTable()
