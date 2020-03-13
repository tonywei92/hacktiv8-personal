const db = require('../config/config').db
class Model{

  static add(data, cb){
    let columns = [], values = []
    for(let key in data){
      columns.push(key)
      values.push('$'+key)
      data['$'+key] = data[key]
      delete data[key]
    }
    let sql = `INSERT INTO ${this.table}  (${columns}) VALUES (${values})`
    db.run(sql, data, cb)
  }

  static findWhere(column, value, cb, op='=', orderBy='', order='asc'){
    if(orderBy !== ''){
      orderBy = `ORDER BY ${orderBy} ${order}`
    }
    let sql = `
      SELECT * FROM ${this.table} where ${column}${op}$value ${orderBy}
    `,
    data = {'$value': value}
    db.all(sql, data, (err, result)=>{
      if(err) cb(err, null)
      else {
        for(let key in result){
          result[key] = this.init(result[key])
        }
        cb(null, result)
      }
    })
  }

  static findAll(cb){
    let sql = `
      SELECT * FROM ${this.table}
    `
    db.all(sql, (err, result)=>{
      if(err) cb(err, null)
      else {
        for(let key in result){
          result[key] = this.init(result[key])
        }
        cb(null, result)
      }
    })
  }

  static save(data, cb){
    let sets = []
    for(let key in data){
      sets.push(key+'=$'+key)
      data['$'+key] = data[key]
      delete data[key]
    }
    let sql = `UPDATE ${this.table} SET ${sets.join(', ')} WHERE id=$id`
    db.run(sql, data, cb)
  }

}

module.exports = Model