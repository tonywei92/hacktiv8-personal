const DB = require('../connection')

class Recipe {
  constructor(input) {
    this.name = input.name
    this.origin = input.origin
    this.id = input.id
  }

  static create(name, origin, cb) {
    if(name && origin) {
      let qry = `INSERT INTO recipes VALUES(null, ?, ?)`
      DB.run(qry, [name, origin], function(err) {
        if(err) {
          cb(err)
        } else {
          cb(null, new Recipe({ id: this.lastID, name, origin}))
        }
      })
    } else {
      cb({
        message: 'Input tidak lengkap'
      })
    }
  }

  static updateOne(input, cb) {
    if(input) {
      let qry = `UPDATE recipes 
        SET ${input.updatedF} = ? 
        WHERE id = ?
      `
      DB.run(qry, [input.updatedV, input.whereV], function (err) {
        if(err) {
          cb(err)
        } else {
          cb(null)
        }
      })
    } else {
      cb({
        message: 'Input tidak lengkap'
      })
    }
  }

  static findAll(cb) {
    DB.all(`SELECT * FROM recipes`, (err, recipes) => {
      if(err) {
        cb(err)
      } else {
        recipes = recipes.map(el => new Recipe(el))
        cb(null, recipes)
      }
    })
  }

  static findById(id, cb) {
    DB.get(`SELECT * FROM recipes WHERE id = ${id}`, (err, data) => {
      cb(err, data)
    })
  }

  static delete(id, cb) {
    DB.run("PRAGMA foreign_keys = ON", (err) =>  {
      if (err) {
        cb(err)
      } else {
        DB.run(`DELETE FROM recipes WHERE id = ${id}`, (err) => {
          cb(err)
        })
      }
    })
  }
}

module.exports = Recipe