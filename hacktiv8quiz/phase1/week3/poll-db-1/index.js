const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('poll.db');

function create(table, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    db.run(`INSERT INTO ${table} (${keys.join(', ')}) VALUES (?,?,?,?)`, values, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('data inserted')
        }
    });
}

function update(table, id, field, value) {
    db.run(`UPDATE ${table} SET ${field} = ? WHERE id = ${id}`, value, err => {
        if (err) {
            console.log(err)
        } else {
            console.log(`data ${id} on ${table} updated `)
        }
    })
}

function del(table, id) {
    db.run(`DELETE FROM ${table} WHERE id = ?`, id, err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`data ${id} on ${table} deleted`)
        }
    })
}

// create('voters', { first_name: "Tony", last_name: "Song", gender: "Male", age: "27" })
// del('voters', 152);
// update('voters', 153, 'age', 25)

db.all(`SELECT name, party, grade_current FROM politicians WHERE party LIKE ?`, 'R', (err, rows) => {
    if (err) {
        console.log(err)
    }
    else {
        console.table(rows)
    }
})

db.all(`SELECT COUNT(*) as totalVote, politicians.name FROM politicians
LEFT JOIN votes ON votes.politicianId = politicians.id
WHERE name LIKE ?`, 'Olympia Snowe', (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            console.table(rows)
        }
    })

db.all(`SELECT COUNT(*) as totalVote, politicians.name, politicians.party, politicians.location
FROM politicians
LEFT JOIN votes ON votes.politicianId = politicians.id
WHERE name LIKE ?
GROUP BY name`, '%Adam%', (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            console.table(rows)
        }
    })

db.all(`SELECT COUNT(*) as totalVote, politicians.name, politicians.party, politicians.location
FROM politicians
LEFT JOIN votes ON votes.politicianId = politicians.id
WHERE name LIKE ?
GROUP BY name`, '%Adam%', (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            console.table(rows)
        }
    })