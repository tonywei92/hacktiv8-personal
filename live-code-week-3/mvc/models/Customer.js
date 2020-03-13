const db = require("../connection")

class Customer {
  static findById(id, cb) {
    const queryFindOneCustomer = `
      SELECT * FROM customers WHERE id = ?
    `

    db.get(queryFindOneCustomer, [id], function(err, dataCustomer) {
      if (err) {
        cb(err)
      } else {
        cb(null, dataCustomer)
      }
    })
  }
  static findOne(name, cb) {
    const queryFindOneCustomer = `
      SELECT * FROM customers WHERE name = ?
    `

    db.get(queryFindOneCustomer, [name], function(err, dataCustomer) {
      if (err) {
        cb(err)
      } else {
        cb(null, dataCustomer)
      }
    })
  }
}

module.exports = Customer