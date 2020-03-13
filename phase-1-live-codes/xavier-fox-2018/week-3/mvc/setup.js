const sqlite3 = require('sqlite3').verbose(),
  db = new sqlite3.Database('./database.db')

db.serialize(function() {
  db.run(
    `CREATE TABLE IF NOT EXISTS users 
      ( id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name varchar(255), 
        username varchar(255),
        password varchar(255)
      )
    `,
    function(err) {
      if (err) console.error(err.message)
    }
  )

  db.run(
    `CREATE TABLE IF NOT EXISTS tweets 
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description text,
        tweet_date text,
        userId INTEGER, 
        FOREIGN KEY (userId) REFERENCES users(id)
      )`,
    function(err) {
      if (err) console.error(err.message)
    }
  )
})

db.close()

// 1. register user  + validation (email unique tidak boleh dari schema)
// 2. post new tweet + validation (max char)
// 3. update dan delete
// 4. search tweet (menggunakan db.each)
