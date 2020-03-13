const db = require("./models/connection")
const fs = require("fs")
const trainers = [{
  firstName: "Wika",
  lastName: "Silo",
  username: "wikanyaa"
}, {
  firstName: "Armedi",
  lastName: "",
  username: "armedi123"
}, {
  firstName: "Suprayogi",
  lastName: "Yoki",
  username: "yudistirayoks"
}]
const monsters = fs.readFileSync("./monsters.csv", "utf8").split("\n")
db.serialize(() => {
  trainers.forEach((trainer) => {
    const { firstName, lastName, username } = trainer
    const insertQ = `
      INSERT INTO Trainers
      (firstName, lastName, username)
      VALUES (?, ?, ?)
    `
    db.run(insertQ, [
      firstName, lastName, username
    ], function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Success create new user with name ${firstName} ${lastName} and id ${this.lastID}`)
      }
    })
  })
  console.log(monsters)
  monsters.forEach((monster) => {
    const [
      species,
      level,
      hp,
      attack,
      speed,
      type,
      experience,
      TrainerId
    ] = monster.split(",")
    const insertQ = `
      INSERT INTO Monsters
      (
        species,
        level,
        hp,
        attack,
        speed,
        type,
        experience,
        TrainerId
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `
    const values = [
      species,
      level,
      hp,
      attack,
      speed,
      type,
      experience,
      TrainerId
    ]

    db.run(insertQ, values, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Success create new monster with id ${this.lastID}`)
      }
    })
  })
})

db.close()