const db = require('./connection.js')

class Student {

  constructor(args) {
    this.id = +args.id || null
    this.name = args.name
    this.username = args.username
    this.level = +args.level
    this.stage = args.stage
    this.totalCourse = +args.totalCourse
    this.SchoolId = +args.SchoolId
  }

  static findOne(whereQ, cb) {
    const {field, value} = whereQ
    let searchVal = `$${value}`
    const qFindOne = `
      SELECT * FROM Students WHERE ${field} = ${searchVal} 
    `
    db.get(qFindOne, {
      [searchVal]: value
    }, (err, row) => {
      if (err) {
        cb(err, null)
      } else {
        if (row) {
          cb(null, new Student(row))
        } else {
          cb(null, null)
        }
      }
    })
  }

  save(cb) {
    const inputObj = {}
    const keys = Object.keys(this)
    const inputKeys = keys.map((val) => `$${val}`)
    const insertQ = `
      INSERT OR REPLACE INTO Students (${keys.join(",")}) VALUES (${inputKeys.join(",")})
    `
    inputKeys.forEach((key) => { inputObj[key] = this[`${key.slice(1)}`] })
    db.run(insertQ, inputObj, (err) => {
      if (err) {
        cb(err)
      } else {
        cb(null)
      }
    })
  }

  static remove(deleteInp, cb) {
    const {field, value} = deleteInp
    const qDelete = `
      DELETE FROM Students WHERE ${field} = $${field} AND totalCourse = 0
    `
    db.run(qDelete, {
      [`$${field}`]: value
    }, function(err) {
      if (err) {
        cb(err)
      } else {
        cb(null, this)
      }
    })
  }
}

module.exports = Student