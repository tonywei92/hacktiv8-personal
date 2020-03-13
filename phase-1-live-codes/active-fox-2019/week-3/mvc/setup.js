const db = require('./models/connection')

db.serialize((err) => {
  if (err) {
    console.log(err)
  } else {
    const qCreateTableSchool = `
      CREATE TABLE IF NOT EXISTS Schools
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text,
        revenue INTEGER
      )
    `
    const qCreateTableStudent = `
      CREATE TABLE IF NOT EXISTS Students
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text,
        username varchar(30),
        level INTEGER,
        totalCourse INTEGER,
        stage varchar(30),
        SchoolId INTEGER,
        FOREIGN KEY (SchoolId) REFERENCES Schools(id)
      )
    `
    db.run(qCreateTableStudent, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("success create table student")
      }
    })
    db.run(qCreateTableSchool, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Success create table schools")
      }
    })
  }
})

db.close()