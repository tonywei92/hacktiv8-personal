const db = require('../connection')

class Order {
  static keyParamsWhere(paramsWhere) {
    let keys = []
    Object.keys(paramsWhere).forEach(key => {
      keys.push(`${key} = ?`)
    })

    return keys.length ? 'WHERE ' + keys.join(' AND ') : ''
  }

  static keyParamsUpdate(paramsWhere) {
    let keys = []
    Object.keys(paramsWhere).forEach(key => {
      keys.push(`${key} = ?`)
    })

    return keys.join(', ') 
  }
 
  static log(query, paramsWhere){
    console.log("query ==>", query)
    console.log("paramsWhere ==> ",  paramsWhere)
    console.log("\n\n")

  }
  static findAll(paramsWhere, cb){
    const query = `SELECT * FROM orders ${this.keyParamsWhere(paramsWhere)}`
    this.log(query, paramsWhere)
    db.all(query, Object.values(paramsWhere), cb)
  }

  static findOne(paramsWhere, cb){
    const query = `SELECT * FROM orders WHERE ${Object.keys(paramsWhere)[0]} = ?`
    console.log("query==>", query)
    console.log("paramsWhere", paramsWhere)
    console.log("=========\n")

    db.get(query, Object.values(paramsWhere)[0], cb)
  }

  static countBy(paramsWhere, cb){
    const query = `
      SELECT SUM(quantity) as sumQuantity, SUM(totalPrice) as sumPrice, COUNT(*) as totalOrders 
        FROM orders ${this.keyParamsWhere(paramsWhere)}
    `
    this.log(query, paramsWhere)
    
    db.get(query, Object.values(paramsWhere), cb)
  }

  //params: customerId, day, itemName, menu.price*quantity, quantity
  static create(params, cb){
    const query = `INSERT INTO orders (${Object.keys(params).join(', ')}) VALUES (?,?,?,?,?,?)`

    this.log(query, params)

    db.run(query, Object.values(params), cb)
  }

  static update(paramsWhere, paramsUpdate, cb){
    const query = `
      UPDATE orders SET ${this.keyParamsUpdate(paramsUpdate)} ${this.keyParamsWhere(paramsWhere)} 
    `

    this.log(query, paramsUpdate)

    db.run(query, [...Object.values(paramsUpdate), ...Object.values(paramsWhere)], cb)
  }


  static delete(paramsWhere, cb){
    const query = `DELETE FROM orders WHERE ${Object.keys(paramsWhere)[0]} = ?`
    console.log("query==>", query)
    console.log("paramsWhere", paramsWhere)
    console.log("=========\n")

    db.run(query, Object.values(paramsWhere)[0], function(err){
      if(err) cb(err)
      else cb(null, this.changes)
    })
  }
}
 
module.exports = Order