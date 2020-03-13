const db = require("./connection")

class Model {
  
  static findOne(option, cb) {
    const {
      ModelName,
      tableName,
      whereField,
      valueField
    } = option
    const findOneQ = `
      SELECT * FROM ${tableName}
      WHERE ${whereField} = ?
    `
    const values = [
      valueField
    ]
    db.get(findOneQ, values, (err, row) => {
      if (err) {
        cb(err)
      } else {
        let getData = null
        if (row) {
          getData = new ModelName(row)
        }
        cb(null, getData)
      }
    })
  }

  save(option, cb) {
    const {
      tableName
    } = option
    const keys = Object.keys(this).join(",")
    const values = Object.values(this)
    const saveQ = `
      INSERT OR REPLACE INTO ${tableName}
      (${keys})
      VALUES
      (${ values.map((_) => "?")})
    `
    db.run(saveQ, values, function(err) {
      if (err) {
        cb(err)
      } else {
        cb(null, this)
      }
    })
  }  
}

module.exports = Model