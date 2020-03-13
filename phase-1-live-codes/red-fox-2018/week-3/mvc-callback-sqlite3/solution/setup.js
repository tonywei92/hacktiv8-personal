var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

function create_and_seed() {
  db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS Songs
      (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100),
      released INTEGER, genre VARCHAR(100))`);

    db.run(`CREATE TABLE IF NOT EXISTS Singers
      (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100),
      origin VARCHAR(100), label VARCHAR(100), debuted_year INTEGER, song_id INTEGER, FOREIGN KEY(song_id) REFERENCES Contacts(id))`);

    db.run(`INSERT INTO Songs VALUES(null, 'Feeling Good', 1965, 'Easy Listening, Pop')`)
    db.run(`INSERT INTO Songs VALUES(null, 'More than Words', '1990', 'Pop' )`)
    db.run(`INSERT INTO Songs VALUES(null, 'The Edge Of Heaven', '1986', 'Pop' )`)

    db.run(`INSERT INTO Singers VALUES(null, 'Nina Simone', 'California', 'Legacy Recordings', '1993', 1)`)
    db.run(`INSERT INTO Singers VALUES(null, 'Muse', 'England', 'Maverick', '1994', 1)`)
    db.run(`INSERT INTO Singers VALUES(null, 'Michael Bubble', 'Canada', 'Reprise', '1996', 1)`)
    db.run(`INSERT INTO Singers VALUES(null, 'Extreme', 'Boston', 'A&M', '1985', 2)`)
    db.run(`INSERT INTO Singers VALUES(null, 'Westlife', 'Ireland', 'Sony BMG', '1997', 2)`)
    db.run(`INSERT INTO Singers VALUES(null, 'michael Jackson', 'Indiana', 'MJJ Productions', '1958', 1)`)
    db.run(`INSERT INTO Singers VALUES(null, 'George MiChAeL', 'London', 'Sony', '1981', 3)`)

  })
}

create_and_seed()
