const db = require('../connection');

class Recipe {
    static add(name, origin, callback) {
        const stmt = db.prepare(`
            INSERT INTO recipes
            (name, origin)
            VALUES(?,?)
        `)
        stmt.run([name, origin], callback);
    }

    static delete(id, callback) {
        const stmtIngredients = db.prepare(`
            DELETE FROM ingredients
            WHERE recipe_id = ?
        `);
        stmtIngredients.run(id, err => {
            if (err) {
                callback(err)
            }
            else {
                const stmtRecipe = db.prepare(`
                    DELETE FROM recipes
                    WHERE id = ?`);
                stmtRecipe.run(id, (err) => {
                    if (err) callback(err)
                    else callback(null);
                })
            }
        });
    }

    static get(id, callback) {
        const stmt = db.prepare(`
            SELECT recipes.*,
            (SELECT COUNT(*) FROM ingredients WHERE recipe_id = recipes.id) as ingredientsCount,
            ingredients.id as ingredientId,
            ingredients.name as ingredientName,
            ingredients.amount as ingredientAmount
            FROM recipes
            LEFT JOIN ingredients
            ON recipes.id = ingredients.recipe_id
            WHERE recipes.id = ?
        `);
        stmt.all(id, (err, rows) => {
            if (err) {
                callback(err);
            }
            else {
                callback(null, this._toObject(rows));
            }
        })
    }

    static _toObject(rows) {
        let recipe = null;
        for (let i = 0; i < rows.length; i++) {
            if (recipe) {
                recipe.ingredients.push({
                    id: rows[i].ingredientId,
                    name: rows[i].ingredientName,
                    amount: rows[i].ingredientAmount
                })
            }
            else {
                recipe = {
                    id: rows[i].id,
                    name: rows[i].name,
                    origin: rows[i].origin,
                    ingredientsCount: rows[i].ingredientsCount,
                    ingredients: []
                }
                recipe.ingredients.push({
                    id: rows[i].ingredientId,
                    name: rows[i].ingredientName,
                    amount: rows[i].ingredientAmount
                })
            }
        }
        return recipe
    }

    static all(callback) {
        const result = [];
        const stmt = db.prepare(`
            SELECT recipes.*, COUNT(ingredients.id) as ingredientsCount  FROM recipes
            LEFT JOIN ingredients ON
                recipes.id = ingredients.recipe_id
            GROUP BY recipes.id
        `);
        stmt.each((err, row) => {
            if (err) console.log(err)
            else result.push(row);
        }, (err, count) => {
            if (err) callback(err)
            else callback(null, result)
        });
    }



    static getBy(fieldName, fieldValue, callback) {
        const result = [];
        const stmt = db.prepare(`
            SELECT recipes.*, COUNT(ingredients.id) as ingredientsCount  FROM recipes
            LEFT JOIN ingredients ON
                recipes.id = ingredients.recipe_id
            WHERE recipes.${fieldName} = ?
            GROUP BY recipes.id
        `);
        stmt.each(fieldValue, (err, row) => {
            if (err) console.log(err)
            else result.push(row);
        }, (err, count) => {
            if (err) callback(err)
            else callback(null, result)
        });
    }

    /**
     * @callback runCallback
     * @param {Error} err
     */

    /**
     * 
     * @param {{where: String, whereValue: String, update: String, updateValue:String}} parameters 
     * @param {runCallback} callback
     */
    static update(parameters, callback) {
        const stmt = db.prepare(`UPDATE recipes SET ${parameters.update} = ? WHERE ${parameters.where} = ? `);
        stmt.run([parameters.updateValue, parameters.whereValue], callback);
    }

    static updateName(id, newName, callback) {
        this.update({
            where: 'id',
            whereValue: id,
            update: 'name',
            updateValue: newName
        }, callback)
    }

    static updateOrigin(id, newOrigin, callback) {
        this.update({
            where: 'id',
            whereValue: id,
            update: 'origin',
            updateValue: newOrigin
        }, callback)
    }

    static updateOrigin(id, newOrigin, callback) {
        this.update({
            where: 'id',
            whereValue: id,
            update: 'origin',
            updateValue: newOrigin
        }, callback)
    }
}

module.exports = Recipe;