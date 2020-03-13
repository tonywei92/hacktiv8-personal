const db = require('./models/connection')

db.serialize((err) => {
  if (err) {
    console.log(err)
  } else {
    const teams = [{ name: 'Arsenal', balance: 30000}, {name: 'Chelsea', balance: 45000}, {name: 'Liverpool', balance: 25000}]
    teams.forEach((team) => {
      db.run(`INSERT INTO teams VALUES (null, "${team.name}", ${team.balance})`, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("success insert data teams")
        }
      })
    })
  }
})
db.close()