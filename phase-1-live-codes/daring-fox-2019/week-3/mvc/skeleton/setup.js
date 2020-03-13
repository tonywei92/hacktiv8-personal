/*
Trainer
    - firstName
    - lastName
    - username
    - gold

  Monster
    - nickname
    - TrainerId
    - level
    - hp
    - attack
    - speed
    - type

*/
const db = require("./models/connection")

db.serialize(function() {
  const createTableTrainers = `
    CREATE TABLE IF NOT EXISTS Trainers
    (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      lastName TEXT,
      username TEXT
    )
  `

  const createTableMonsters = `
    CREATE TABLE IF NOT EXISTS Monsters 
    (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      species TEXT,
      level INTEGER,
      hp INTEGER,
      attack INTEGER,
      speed INTEGER,
      type varchar(10),
      experience INTEGER,
      TrainerId INTEGER,
      FOREIGN KEY (TrainerId) REFERENCES Trainers(id)
    )
  `
  db.run(createTableTrainers, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Success Create Table Trainers")
    }
  })

  db.run(createTableMonsters, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Success create table Monsters")
    }
  })
})
 
db.close()