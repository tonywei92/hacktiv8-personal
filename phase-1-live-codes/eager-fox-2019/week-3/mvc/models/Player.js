const { getContractDuration } = require('../helpers')
const DB = require('./connection')

class Player {
  constructor(player) {
    this.id = player.id || null
    this.name = player.name
    this.position = player.position
    this.contractDuration = getContractDuration(player.rating)
    this.monthlySalary = player.monthlySalary
    this.rating = player.rating
    this.TeamId = player.TeamId
  }

  static create(player, cb) {
    const newPlayer = new Player(player)
    const fields = Object.keys(newPlayer).join(',')
    const values = Object.values(newPlayer)

    const qry = `INSERT INTO Players (${fields}) VALUES (?, ?, ?, ?, ?, ?, ?)`
    DB.run(qry, values, function (err) {
      if (err) {
        cb(err)
      } else {
        newPlayer.id = this.lastID
        cb(null, newPlayer)
      }
    })
  }

  static findOne(options, cb) {
    const { whereField, whereValue } = options
    const qry = `SELECT * FROM Players WHERE ${whereField} = ?`
    DB.get(qry, [whereValue], function (err, data) {
      if (err) {
        cb(err)
      } else {
        cb(null, data)
      }
    })
  }

  static update(options, cb) {
    let { whereField, whereValue, updatedField, updatedValue } = options
    const qry = `UPDATE Players SET ${updatedField} = ? WHERE ${whereField} = ?`
    DB.run(qry, [updatedValue, whereValue], function (err) {
      if (err) {
        cb(err)
      } else {
        cb(null)
      }
    })
  }

  static findAll(cb) {
    DB.all(`SELECT * FROM Players`, (err, data) => {
      cb(null, data)
    })
  }

}

module.exports = Player