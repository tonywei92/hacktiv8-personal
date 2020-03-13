const db = require('./connection');

const fs = require('fs');

const foods = JSON.parse(fs.readFileSync('./foods.json', 'utf8'));
db.serialize(() => {
    const stmt = db.prepare('INSERT INTO recipes (name, origin) VALUES(?,?)');
    foods.forEach(el => {
        stmt.run([el.name, el.origin]);
    })
    stmt.finalize(err => {
        if (err) console.log(err);
        else console.log('finished');
    })
})