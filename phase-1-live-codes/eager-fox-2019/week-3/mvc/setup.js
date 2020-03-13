
const db = require('./models/connection')

db.serialize((err) => {
  if (err) {
    console.log(err)
  } else {
    const qCreateTableTeams = `
      CREATE TABLE IF NOT EXISTS Teams
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        balance INTEGER
      )
    `
    const qCreateTablePlayers = `
      CREATE TABLE IF NOT EXISTS Players
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        position TEXT,
        contractDuration INTEGER,
        monthlySalary INTEGER,
        rating INTEGER,
        TeamId INTEGER,
        FOREIGN KEY (TeamId) REFERENCES Teams
      )
    `
    db.run(qCreateTableTeams, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("success create table teams")
      }
    })
    db.run(qCreateTablePlayers, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Success create table players")
      }
    })
  }
})

db.close()