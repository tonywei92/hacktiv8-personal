const db = require('./models/connection')

db.serialize((err) => {
  if (err) {
    console.log(err)
  } else {
    const schools = ["Hogwarts", "Berlin School", "Woll Street", "Gutee"]
    schools.forEach((school) => {
      db.run(`INSERT INTO Schools VALUES (null, "${school}", 0)`, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("success insert data schools")
        }
      })
    })
  }
})
db.close()