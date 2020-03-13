const DB = require('../connection')

class Ingredient {
  constructor(input) {
    this.id = input.id || null
    this.name = input.name
    this.amount = input.amount
    this.recipe_id = input.recipeId
  }
  static create(input, cb) {
    let qry = `INSERT INTO ingredients VALUES (null, ${input.recipeId}, '${input.name}', '${input.amount}')`
    DB.run(qry, (err) => {
      cb(err)
    })
  }

  static findAll(cb) {
    DB.all(`SELECT * FROM ingredients`, (err, data) => {
      cb(err, data)
    })
  }
}

module.exports = Ingredient