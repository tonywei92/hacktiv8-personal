const db = require('./connection');
db.serialize(() => {
    const stmtProducts = db.prepare(`
    CREATE TABLE IF NOT EXISTS
        products
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(64),
            category VARCHAR(64),
            stock VARCHAR(64),
            minimalPrice INTEGER
            )
    `);
    stmtProducts.run((err) => {
        if (err) console.log(err);
    });

    const stmtProductLogs = db.prepare(`
        CREATE TABLE IF NOT EXISTS
            productLogs
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                productId INTEGER,
                qty INTEGER,
                priceSatuan INTEGER,
                customerName VARCHAR(64),
                createdAt TEXT,
                FOREIGN KEY (productId) REFERENCES products(id)
            )
    `)

    stmtProductLogs.run((err) => {
        if (err) console.log(err);
    })

})