const db = require('./connection');

const fs = require('fs');

const foods = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
db.serialize(() => {
    const stmt = db.prepare(`INSERT INTO products (name, category, stock, minimalPrice)
                            VALUES(?,?,?,?)`);
    foods.forEach(el => {
        stmt.run([el.name, el.category, el.stock, el.minimalPrice]);
    })
    stmt.finalize(err => {
        if (err) console.log(err);
        else console.log('finished');
    })
})