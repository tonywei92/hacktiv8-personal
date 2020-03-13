const DB = require('./connection')

class Team {
  constructor(team) {
    this.id = team.id || null
    this.name = team.name
    this.balance = team.balance
  }

  static findAll(cb) {
    DB.all(`SELECT * FROM Teams`, function(err, data) {
      cb(null, data)
    })
  }

  static findOne(options, cb) {
    const { whereField, whereValue } = options
    const qry = `SELECT * FROM Teams WHERE ${whereField} = ?`
    DB.get(qry, [whereValue], function(err, data) {
      if(err) {
        cb(err)
      } else {
        if(!data) {
          cb(null)
        } else {
          let team = new Team(data)
          cb(null, team)
        }
      }
    })
  }

  static update(options, cb) {
    let { whereField, whereValue, updatedField, updatedValue } = options
    const qry = `UPDATE Teams SET ${updatedField} = ? WHERE ${whereField} = ?`
    DB.run(qry, [updatedValue, whereValue], function (err) {
      if(err) {
        cb(err)
      } else {
        cb(null)
      }
    })
  }

  static totalSalary(id, cb) {
    DB.all(`SELECT SUM(monthlySalary) as totalSalary FROM Players GROUP BY TeamId HAVING TeamId = ${id}`, (err, data) => {
      if(err) {
        cb(err)
      } else {
        cb(null, data)
      }
    })
  }
}

module.exports = Team