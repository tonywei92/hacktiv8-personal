const { Recipe } = require('../models');
const FoodViews = require('../views/FoodViews');
const MessageViews = require('../views/MessageViews')
class RecipeController {
    static add(name, origin) {
        if (!name || !origin) {
            return MessageViews.showError('input tidak lengkap')
        }
        Recipe.add(name, origin, err => {
            if (err) MessageViews.showError(err)
            else MessageViews.showSuccess('Recipe added');
        })
    }

    static delete(id) {
        if (!id) {
            return MessageViews.showError('input tidak lengkap');
        }
        Recipe.delete(id, err => {
            if (err) MessageViews.showError(err)
            else MessageViews.showSuccess('Recipe deleted');
        })
    }

    static view(id) {
        if (!id) {
            return MessageViews.showError('input tidak lengkap');
        }
        Recipe.get(id, (err, row) => {
            if (err) MessageViews.showError(err)
            else FoodViews.viewSingle(row);
        })
    }

    static all() {
        Recipe.all((err, rows) => {
            if (err) MessageViews.showError(err)
            else FoodViews.viewAll(rows)
        })
    }

    static getByName(name) {
        if (!name) {
            return MessageViews.showError('input tidak lengkap')
        }
        else {
            Recipe.getBy('name', name, (err, rows) => {
                if (err) {
                    MessageViews.showError(err)
                }
                else {
                    FoodViews.viewAll(rows)
                }
            })
        }
    }

    static getByOrigin(origin) {
        if (!origin) {
            return MessageViews.showError('input tidak lengkap')
        }
        else {
            Recipe.getBy('origin', origin, (err, rows) => {
                if (err) {
                    MessageViews.showError(err)
                }
                else {
                    FoodViews.viewAll(rows)
                }
            })
        }
    }


    static updateOrigin(id, newOrigin) {
        if (!id || !newOrigin) {
            return MessageViews.showError('input tidak lengkap');
        }
        Recipe.updateOrigin(id, newOrigin, (err) => {
            if (err) MessageViews.showError(err)
            else MessageViews.showSuccess('updated')
        })
    }

    static updateName(id, newName) {
        if (!id || !newName) {
            return MessageViews.showError('input tidak lengkap');
        }
        Recipe.updateName(id, newName, (err) => {
            if (err) MessageViews.showError(err)
            else MessageViews.showSuccess('updated')
        })
    }
}

module.exports = RecipeController;