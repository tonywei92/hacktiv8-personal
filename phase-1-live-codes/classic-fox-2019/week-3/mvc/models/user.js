const db = require('../db/connection')
const Transaction = require('../models/transaction')

class User {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.phone = user.phone
    this.balance = {
      rupiah: user.rupiahBalance || 0,
      bitcoin: user.bitcoinBalance || 0
    }
    this.createdAt = new Date(user.createdAt)
  }

  save(cb) {
    const query = `
      UPDATE Users
      SET
        rupiahBalance = ${this.balance.rupiah},
        bitcoinBalance = ${this.balance.bitcoin}
      WHERE id = ${this.id}`
    
      db.run(query, function(err) {
        if (err) {
          cb(err)
        } else {
          cb(null)
        }
      })
  }

  static findAll(cb) {
    const query = `
      SELECT * FROM Users`

    db.all(query, function (err, users) {
      if (err) {
        cb(err)
      } else {
        users = users.map(user => new User(user))
        cb(null, users)
      }
    })
  }

  static findOne(condition, cb) {
    const query = `
      SELECT * FROM Users
      WHERE ${Object.keys(condition).map(key => `${key} = ?`).join(' AND ')}`

    db.get(query, Object.values(condition), function (err, user) {
      if (err) {
        cb(err)
      } else {
        if (user) {
          cb(null, new User(user))
        } else {
          cb(Error('User tidak ditemukan'))
        }
      }
    })
  }

  static create(user, cb) {
    const query = `
      INSERT INTO Users (name, email, phone, createdAt)
      VALUES ($name, $email, $phone, DATETIME('now', 'localetime'))`

    db.run(query, {$name: user.name, $email: user.email, $phone: user.phone}, cb)
  }
}

module.exports = User