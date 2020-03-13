const db = require('../connection')

class Customer {
  static all(cb){
    const query = `SELECT * from customers`
    db.all(query, cb)
  }

  static findOne(paramsWhere, cb){
    const query = `SELECT * FROM customers WHERE ${Object.keys(paramsWhere)[0]} = ?`
    console.log("query==>", query)
    console.log("paramsWhere", paramsWhere)
    console.log("=========\n")

    db.get(query, Object.values(paramsWhere)[0], cb)
  }

  static delete(paramsWhere, cb){
    const query = `DELETE FROM customers WHERE ${Object.keys(paramsWhere)[0]} = ?`
    console.log("query==>", query)
    console.log("paramsWhere", paramsWhere)
    console.log("=========\n")

    db.run(query, Object.values(paramsWhere)[0], function(err){
      if(err) cb(err)
      else cb(null, this.changes)
    })
  }
}

module.exports = Customer