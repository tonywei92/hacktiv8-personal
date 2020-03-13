const Model = require('./Model')
class People extends Model{
  constructor(data){
    super()
    this.id = data.id
    this.idCard = data.idCard
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.credit = data.credit
  }

  static get table(){
    return 'people'
  }

  static init(data){
    return new People(data)
  }
}

module.exports = People