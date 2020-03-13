const db = require('./connection');

db.serialize(function() {
  let qTableAudience =
    ` CREATE TABLE IF NOT EXISTS Audiences
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName VARCHAR(50),
        lastName VARCHAR(50),
        age INTEGER,
        email VARCHAR(100),
        type VARCHAR(7),
        balance REAL
      )
    `

    db.run(qTableAudience, function(err) {
      if (!err) {
        console.log('Table Audiences created');
      } else {
        console.log('ERR: ', err);
      }
    })


    let qTableShows =
          `
            CREATE TABLE IF NOT EXISTS Shows
             (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               show VARCHAR(100),
               schedule TEXT,
               price REAL
             )
          `

    db.run(qTableShows, function(err) {
      if (!err) {
        console.log('Table Shows created');
      } else {
        console.log('ERR: ', err);
      }
    })

    let qTableTickets =
          `
            CREATE TABLE IF NOT EXISTS Tickets
            (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              ticketNumber VARCHAR(10),
              amountOfTicket INTEGER,
              totalInvoice REAL,
              audienceId INTEGER,
              FOREIGN KEY (audienceId) REFERENCES Audiences(id)
            )
          `
    db.run(qTableTickets, function(err) {
      if (!err) {
        console.log('Table Tickets created');
      } else {
        console.log('ERR: ', err);
      }
    })

    //ALTER TABLE
    //add email unique => table audiences
      // HINT: https://stackoverflow.com/questions/15497985/how-to-add-unique-constraint-in-already-made-table-in-sqlite-ios
    //add default value for isAvailable to 1 => table shows

    let qCreateUniqueEmail = `CREATE UNIQUE INDEX email_audiences ON Audiences(email);`

    db.run(qCreateUniqueEmail, function(err) {
      if (!err) {
        console.log('add column email success');
      } else {
        console.log('ERR: ', err);
      }
    })

    let qDefaultValue =
          `
            ALTER TABLE Shows
            ADD COLUMN isAvailable BOOLEAN
            CONSTRAINT isAvailable DEFAULT 0;
          `
    db.run(qDefaultValue, function(err) {
      if (!err) {
        console.log('add column isAvailable success');
      } else {
        console.log('ERR: ', err);
      }
    })
})
