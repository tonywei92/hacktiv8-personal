const db = require('../db/connection')

class Transaction {
  constructor(trx) {
    this.id = trx.id
    this.userId = trx.userId
    this.type = trx.type
    this.price = trx.price
    this.amount = trx.amount
    this.time = new Date(trx.time)
  }

  static create(trx, cb) {
    const query = `
      INSERT INTO Transactions (userId, type, price, amount, time)
      VALUES (?, ?, ?, ?, DATETIME('now', 'localtime'))`

    db.run(query, [trx.userId, trx.type, trx.price, trx.amount], function(err) {
      if (err) {
        cb(err)
      } else {
        cb(null)
      }
    })
  }

  static findAll(cb) {
    const query = `SELECT * FROM Transactions`

    db.all(query, function (err, transactions) {
      if (err) {
        cb(err)
      } else {
        cb(null, transactions.map(trx => new Transaction(trx)))
      }
    })
  }
}

module.exports = Transaction