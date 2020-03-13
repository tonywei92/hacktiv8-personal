const Model = require("./index")
const db = require("./connection")
class Monster extends Model {
  constructor(args) {
    super()
    Object.assign(this, args)
    this.experience = args.experience || 0
  }

  static findOne(option, cb) {
    super.findOne({
      ...option,
      ModelName: Monster,
      tableName: "Monsters"
    }, cb)
  }

  save(cb) {
    super.save({
      tableName: "Monsters"
    }, cb)
  }

  static getRankTop2to4MonstersWithNameLikeTle(cb) {
    const selectQ = `
      SELECT * FROM Monsters M 
      WHERE M.species 
      LIKE "%tle" 
      ORDER BY M.level DESC 
      LIMIT 1,3;
    `
    db.all(selectQ, cb)
  }
}

module.exports = Monster