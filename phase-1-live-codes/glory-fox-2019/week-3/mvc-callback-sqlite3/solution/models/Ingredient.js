const db = require('../connection');
const Recipe = require('./Recipe');

class Ingredient {
    constructor(input) {
        this.id = input.ingredientId;
        this.name = input.ingredientName;
        this.amount = input.amount;
    }

    static add(recipe_id, name, amount, callback) {
        Recipe.get(recipe_id, (err, row) => {
            if (err) {
                callback(err);
            }
            else {
                if (row) {
                    const stmt = db.prepare(`
                        INSERT INTO ingredients
                        (recipe_id, name, amount)
                        VALUES(?,?,?)
                    `);
                    stmt.run([recipe_id, name, amount], callback);
                }
                else {
                    callback("invalid recipe_id, recipe_id not found");
                }
            }
        })
    }

    static delete(id, callback) {
        const stmt = db.prepare(`
            DELETE FROM ingredients
            WHERE id = ?
        `);
        stmt.run(id, callback);
    }

    static get(id, callback) {
        const stmt = db.prepare(`
            SELECT * FROM ingredients
            WHERE id = ?
        `);
        stmt.run(id, callback)
    }

    static all(callback) {
        const stmt = db.prepare(`
            SELECT * FROM ingredients
        `);
        stmt.all(callback);
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
        const stmt = db.prepare(`UPDATE ingredients SET ${parameters.update} = ? WHERE ${parameters.where} = ? `);
        stmt.run([parameters.updateValue, parameters.whereValue], callback);
    }

    static updateAmount(ingredient_id, amount, callback) {
        this.update({
            update: "amount",
            updateValue: amount,
            where: "id",
            whereValue: ingredient_id
        }, callback)
    }
}

module.exports = Ingredient;
