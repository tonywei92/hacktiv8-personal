const db = require('./connection')

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT NOT NULL,
        name TEXT NOT NULL,
        price INTEGER NOT NULL,
        maxSeats INTEGER NOT NULL,
        status TEXT NOT NULL
    )`)

  db.run(`CREATE TABLE IF NOT EXISTS movieTickets(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        movieId INTEGER NOT NULL,
        ticketCode TEXT NOT NULL,
        customerName TEXT NOT NULL,
        phoneNumber TEXT NOT NULL,
        FOREIGN KEY (movieId) REFERENCES movies(id) ON DELETE CASCADE
    )`)
})
