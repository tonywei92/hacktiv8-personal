const db = require('../config/config').db
const Model = require('./Model')
class Property extends Model{
  constructor(data){
    super()
    this.id = data.id
    this.street = data.street
    this.number = data.number
    this.type = data.type
    this.price = data.price
    this.certificate = null
    this.personId = data.personId || null
  }

  static get table(){
    return 'properties'
  }

  static init(data){
    return new Property(data)
  }

  generateCertificate(buyer){
    this.certificate = buyer.substr(0,3) + this.id + Math.floor(Math.random()*(999-100+1)+100);
  }

  static listProperty(status, orderBy='', order='asc', cb){
    if(orderBy !== ''){
      orderBy = `ORDER BY ${orderBy} ${order}`
    }
    if(status === 'sale'){
      status = 'WHERE personId IS NULL'
    }
    else if(status === 'soldout'){
      status = 'WHERE personId IS NOT NULL'
    }
    else{
      status = ''
    }
    let sql = `SELECT * FROM ${this.table} ${status} ${orderBy}`
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
}

module.exports = Property