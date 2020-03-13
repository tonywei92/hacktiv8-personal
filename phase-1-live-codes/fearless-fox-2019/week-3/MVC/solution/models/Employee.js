const Model = require('./Model')
class Employee extends Model{
  static getAttributes(){
    return {
      id: null,
      name: null,
      username: null,
      kpi: null,
      jobDone: 0,
      salary: 0,
      sp: 0,
      companyId: null 
    }
  }

  static getTableName(){
    return 'employees'
  }  
  
  get table(){
    return 'employees'
  }

  get rate(){
    switch (this.kpi) {
      case 4:
        return `A`
        break;
      case 3:
        return `B`
        break;
      case 2:
        return `C`
        break;
      case 1:
        return `D`
        break;
      default:
        return `unrated`
        break;
    }
  }
}
module.exports = Employee