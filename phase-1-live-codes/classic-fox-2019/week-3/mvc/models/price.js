const db = require('../db/connection')

class Price {
  constructor(id, time, buy, sell) {
    this.id = id
    this.time = time
    this.buy = buy
    this.sell = sell
  }

  static findAll(cb) {
    const query = `
      SELECT *
      FROM Prices
    `
    db.all(query, function(err, data) {
      if (err) {
        cb(err)
      } else {
        cb(null, data.map(row => new Price(row.id, new Date(row.time), row.buy, row.sell)))
      }
    })
  }

  static create(buy, sell, cb) {
    const query = `
      INSERT INTO Prices ("time", "buy", "sell")
      VALUES (DATETIME("now", "localetime"), $buy, $sell)
    `
    db.run(query, { $buy: buy, $sell: sell }, cb)
  }
}

module.exports = Price