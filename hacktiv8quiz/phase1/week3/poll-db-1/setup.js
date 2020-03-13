//your code here
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('poll.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected to poll.db");
    }
});

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS politicians (
        "id"    INTEGER PRIMARY KEY AUTOINCREMENT,
        "name"	TEXT,
        "party"	TEXT,
        "location"	TEXT,
        "grade_current"	NUMERIC
    );`, function (err) {
            if (err) console.log(err);
            else {
                console.log('Tabel \'poiliticians\' berhasil dibuat')
            }
        })
    db.run(`
        CREATE TABLE IF NOT EXISTS voters (
          "id" INTEGER PRIMARY KEY AUTOINCREMENT,
          "first_name"	TEXT,
          "last_name"	TEXT,
          "gender"	    TEXT,
          "age"	        INT
        );`, function (err) {
            if (err) console.log(err);
            else {
                console.log('Tabel \'voters\' berhasil dibuat')
            }
        })
    db.run(`CREATE TABLE IF NOT EXISTS votes(voterId INTEGER,politicianId INTEGER, FOREIGN KEY (voterId) REFERENCES voters(id), FOREIGN KEY (politicianId) REFERENCES politicians(id))`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Table \'votes\' berhasil dibuat')
        }
    });
});

db.close((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('Close the database connection');
});