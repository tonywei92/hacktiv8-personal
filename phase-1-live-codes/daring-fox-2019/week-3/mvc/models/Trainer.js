const Model = require("./index")
const db = require("./connection")

class Trainer extends Model {
  constructor(args) {
    super()
    Object.assign(this, args)
  }
  
  static findOne(option, cb) {
    super.findOne({
      ...option,
      ModelName: Trainer,
      tableName: "Trainers"
    }, cb)
  }

  get fullName() {
    return this.firstName + " " + this.lastName
  }

  static getTotalTypePokemonForEachUser(cb) {
    const selectQ = `
      SELECT 
        T.firstName||" "||T.lastName as fullName, 
        M.type, 
      COUNT(M.id) as totalMonster 
      FROM Trainers T 
      LEFT JOIN Monsters M ON M.TrainerId = T.id 
      GROUP BY M.type,T.id 
      ORDER BY (fullName) ASC;
    `
    db.all(selectQ, cb)
  }

  static getTrainersWhoHave5MonstersWithAverageLevel6(cb) {
    const selectQ = `
      SELECT 
        T.firstName||" "||t.lastName as fullName, 
        AVG(M.level) as averageLevelPokemon,
        COUNT(M.hp) as totalPokemon
      FROM Trainers T 
      LEFT JOIN Monsters M ON M.TrainerId = T.id 
      GROUP BY (T.id)
      HAVING 
        averageLevelPokemon = 6 and totalPokemon = 5
      ;
    `
    db.all(selectQ, cb)
  }
}

module.exports = Trainer