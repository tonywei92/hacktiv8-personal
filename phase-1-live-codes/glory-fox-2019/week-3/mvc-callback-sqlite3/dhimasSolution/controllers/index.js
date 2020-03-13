const { Recipe, Ingredient } = require('../models/index')

class Controller {
  static createRecipe(name, origin) {
    Recipe.create(name, origin, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log(err, data)
      }
    })
  }

  static showRecipes() {
    Recipe.findAll((err, rows) => {
      console.log(err, rows)
    })
  }

  static showIngredients() {
    Ingredient.findAll((err, data) => {
      console.log(err, data, '<<<')
    })
  }

  static updateName(input) {
    Recipe.updateOne({
      whereV: input.id,
      updatedF: 'name',
      updatedV: input.name
    }, (err) => {
      console.log(err, '<<<')
    })
  }

  static updateOrigin(input) {
    Recipe.updateOne({
      whereV: input.id,
      updatedF: 'origin',
      updatedV: input.origin
    }, (err) => {
      console.log(err, '<<<')
    })
  }

  static createIngredient(input) {
    Recipe.findById(input.recipeId, (err, data) => {
      if(err) {
        console.log(err)
      } else if(data) {
        console.log(data)
        Ingredient.create(input, (err) => {
          if(err) {
            console.log(err);
          } else {
            console.log('berhasil membuat data')
          }
        })
      } else {
        console.log('resep tidak ada')
      }
    })
  }

  static deleteRecipe(input) {
    Recipe.delete(input, (err) => {
      console.log(err, '-------------')
    })
  }
}

module.exports = Controller