const db = require('./connection');
db.serialize(() => {
    const stmtRecipes = db.prepare(`
    CREATE TABLE IF NOT EXISTS
        recipes
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(64),
            origin VARCHAR(64)
            )
    `);
    stmtRecipes.run((err) => {
        if (err) console.log(err);
    });

    const stmtIngredients = db.prepare(`
        CREATE TABLE IF NOT EXISTS
            ingredients
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                recipe_id INTEGER,
                name VARCHAR(64),
                amount VARCHAR(64),
                FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
            )
    `)

    stmtIngredients.run((err) => {
        if (err) console.log(err);
    })

})