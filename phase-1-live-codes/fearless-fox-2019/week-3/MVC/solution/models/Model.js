const db = require('../connection')
class Model{

  constructor(data){
    const attributes = this.constructor.getAttributes()
    for (const key in attributes) {
      if(typeof data === 'object')
        data[key]?this[key] = data[key] : this[key] = attributes[key]
    }
  }

  static db(){
    return db
  }

  static getTableName(){
    return 'tablename'
  }

  static create(data, cb){
    let keys = []
    let values = []
    for (const key in data) {
      keys.push(key)
      values.push(data[key])
    }
    const sql = `INSERT INTO ${this.getTableName()} (${keys}) VALUES (${values.map(value=>'?')})`
    // console.log(sql, values)
    const self = this;
    db.run(sql, values, function(err){
      data.id = this.lastID
      let result;
      err?result=null:result=new self(data)
      cb(err, result)
    })
  }

  static findById(id, cb){
    // const self = this;
    // const sql = `SELECT * FROM ${this.getTableName()} WHERE id=?`
    // // console.log(sql, id);
    // db.get(sql, [id], function(err, data){
    //   // console.log(data)
    //   data?data=new self(data):err='Data not found'
    //   cb(err, data)
    // })
    this.find('id', id, cb)
  }

  static find(col, value, cb){
    const self = this;
    const sql = `SELECT * FROM ${this.getTableName()} WHERE ${col}=?`
    db.get(sql, [value], function(err, data){
      data?data=new self(data):err='Data not found'
      cb(err, data)
    })
  }

  update(cb){
    const attributes = this.constructor.getAttributes()
    let sets = []
    let values = []
    for (const key in attributes) {
      if(key !== 'id'){
        sets.push(`${key}=?`)
        values.push(this[key])
      }
    }
    let sql = `UPDATE ${this.table} set ${sets} WHERE id=${this.id}`
    db.run(sql, values, err=>cb(err, this))
  }

  static findWhere(col, value, cb){
    const self = this;
    const sql = `SELECT * FROM ${this.getTableName()} WHERE ${col}=?`
    db.all(sql, [value], function(err, data){
      data?data=data.map(val=>new self(val)):err='Data not found'
      cb(err, data)
    })
  }
}
module.exports = Model