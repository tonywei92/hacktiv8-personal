const db = require('./connection.js')

class School {

  constructor(args) {
    this.id = args.id
    this.name = args.name
    this.revenue = args.revenue
  }

  static findOne(whereQ, cb) {
    const {field, value} = whereQ
    let searchVal = `$${value}`
    const qFindOne = `
      SELECT * FROM Schools WHERE ${field} = ${searchVal}
    `
    db.get(qFindOne, {
      [searchVal]: value
    }, (err, row) => {
      if (err) {
        cb(err, null)
      } else {
        cb(null, new School(row))
      }
    })
  }

  static findAll(cb) {
    const selectQ = `
      SELECT Schools.name, Schools.id, Schools.revenue, Students.name AS studentName, Students.stage FROM Schools LEFT JOIN Students ON Students.SchoolId = Schools.id
    `
    const schoolObj = {}
    db.each(selectQ, (err, row) => {
      if (err) {
        cb(err)
      } else {
        if (!schoolObj[row.name]) {
          schoolObj[row.name] = []
        }
        if (row.studentName) {
          schoolObj[row.name].push({
            studentName: row.studentName,
            stage: row.stage
          }) 
        }
      }
    }, (count) => {
      cb(null, schoolObj)
    })
  }

  update(updateInput, cb) {
    const { field, value } = updateInput
    const qUpdate = `
      UPDATE Schools
      SET ${field} = $${field}
      WHERE id = $id
    `
    console.log(qUpdate)
    db.run(qUpdate, {
      "$id": this.id,
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

module.exports = School