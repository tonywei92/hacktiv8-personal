var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

function create_and_seed() {
  db.serialize(function() {

    db.run(`CREATE TABLE IF NOT EXISTS Authors
      (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100),
      website_url VARCHAR(100), birthplace VARCHAR(100), birthyear INTEGER)`);

    db.run(`CREATE TABLE IF NOT EXISTS Books
      (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100),
      released INTEGER, genre VARCHAR(100),
      author_id INTEGER, FOREIGN KEY(author_id) REFERENCES Authors(id))`);

    db.run(`INSERT INTO Authors
      VALUES(null, 'Brown, Dan', 'danbrown.com', 'Exeter, New Hampshire, United States', '1964')`)
    db.run(`INSERT INTO Authors
      VALUES(null, 'Rowling, J.K.', 'https://www.jkrowling.com/', 'Yate, United Kingdom', '1965')`)
    db.run(`INSERT INTO Authors
      VALUES(null, 'James, E. L.', 'https://www.eljamesauthor.com/', 'London, United Kingdom', '1963')`)
    db.run(`INSERT INTO Authors
      VALUES(null, 'Meyer, Stephenie', 'https://stepheniemeyer.com/', 'Hartford, Connecticut, United States', '1973')`)


    db.run(`INSERT INTO Books VALUES(null,'Da Vinci Code,The', 2004, 'Crime, Thriller & Adventure', 1)`)
    db.run(`INSERT INTO Books VALUES(null,'Harry Potter and the Deathly Hallows', 2007, 'Children Fiction', 2)`)
    db.run(`INSERT INTO Books VALUES(null,'Harry Potter and the Philosophers Stone', 1997, 'Children Fiction', 2)`)
    db.run(`INSERT INTO Books VALUES(null,'Harry Potter and the Order of the Phoenix', 1997, 'Children Fiction', 2)`)
    db.run(`INSERT INTO Books VALUES(null,'Fifty Shades of Grey', 2012, 'Romance & Sagas', 3)`)
    db.run(`INSERT INTO Books VALUES(null,'Fifty Shades Darker', 2012, 'Romance & Sagas', 3)`)
    db.run(`INSERT INTO Books VALUES(null,'Twilight', 2006, 'Young Adult Fiction', 4)`)
    db.run(`INSERT INTO Books VALUES(null,'New Moon', 2007, 'Young Adult Fiction', 4)`)

  })
}

create_and_seed()
