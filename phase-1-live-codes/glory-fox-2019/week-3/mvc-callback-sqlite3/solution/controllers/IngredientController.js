const { Ingredient } = require('../models');
const MessageViews = require('../views/MessageViews');
class IngredientController {

    static add(recipe_id, name, amount) {
        if (!recipe_id || !amount || !name) {
            return console.error('input tidak lengkap');
        }
        Ingredient.add(recipe_id, name, amount, err => {
            if (err) MessageViews.showError(err)
            else MessageViews.showSuccess('success add')
        })
    }

    static remove(ingredient_id) {
        if (!ingredient_id) {
            return "input tidak lengkap"
        }
        Ingredient.delete(ingredient_id, err => {
            if (err) MessageViews.showError(err)
            else MessageViews.showSuccess("sukses")
        })
    }

    static updateAmount(ingredient_id, amount) {
        if (!ingredient_id || !amount) {
            return MessageViews.showError('input tidak lengkap');
        }
        Ingredient.updateAmount(ingredient_id, amount, err => {
            if (err) MessageViews.showError(err)
            else MessageViews.showSuccess("success")
        })
    }
}

module.exports = IngredientController;