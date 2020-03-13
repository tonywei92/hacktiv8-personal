const db = require("../connection")

class Order {
  static findOne(id, cb) {
    const queryFindOneCustomer = `
      SELECT * FROM orders WHERE id = ?
    `

    db.get(queryFindOneCustomer, [id], function(err, dataOrder) {
      if (err) {
        cb(err)
      } else {
        cb(null, dataOrder)
      }
    })
  }
  
  static findAll(customer, day, cb) {
    const queryFindAllOrder = `
      SELECT * FROM orders WHERE customerId = ? AND day = ?
    `
    db.all(queryFindAllOrder, [customer.id, day], function(err, dataOrders) {
      if (err) {
        cb (err)
      } else {
        cb(null,dataOrders)
      }
    })
  }

  static UpdateOrder(id, cb) {
    const queryUpdateOrder = `
      UPDATE orders SET status = "completed" WHERE id = ?
    `
    db.run(queryUpdateOrder, [id], function(err) {
      if (err) {
        cb(err)
      } else {
        cb(null)
      }
    })
  }

  static countMaxOrder (customerId, day, cb) {
    const queryMaxOrder = `
      SELECT SUM(quantity) AS quantity FROM orders WHERE customerId = ? AND day = ?
    `
    db.get(queryMaxOrder, [customerId, day], function(err, data) {
      if (err) {
        cb(err)
      } else {
        cb(null,data)
      }
    })
  }

  static createOrder()
}

module.exports = Order