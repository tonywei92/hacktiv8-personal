const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')

db.serialize(function() {
  const createMoviesQuery = `
      CREATE TABLE IF NOT EXISTS Movies
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        duration INTEGER,
        releasedDate TEXT,
        nowPlaying INTEGER
      )
    `
  const createReviewsQuery = `
    CREATE TABLE IF NOT EXISTS Reviews
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        movieId INTEGER,
        description TEXT,
        rating INTEGER,
        FOREIGN KEY(movieId) REFERENCES Movies(id)
      )
  `
  db.run(createMoviesQuery, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("success create movies table")
    }
  })

  db.run(createReviewsQuery, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("success create reviews table")
    }
  })
})
 
db.close()