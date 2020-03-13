const Model = require('./Model')
class Company extends Model{
  static getAttributes(){
    return {
      id : null,
      name : null,
      money :  0
    }
  }

  static getTableName(){
    return 'companies'
  }

  get table(){
    return 'companies'
  }

}
module.exports = Company