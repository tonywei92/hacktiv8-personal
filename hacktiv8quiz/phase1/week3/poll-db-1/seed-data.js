const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('poll.db');
const fs = require('fs');
const politicians = fs.readFileSync('politicians.csv', 'utf8').split('\n').slice(1);
const voters = fs.readFileSync('voters.csv', 'utf8').split('\n').slice(1);
const votes = fs.readFileSync('votes.csv', 'utf8').split('\n').slice(1);

db.serialize(() => {
    for (let i = 0; i < politicians.length; i++) {
        politicians[i] = politicians[i].split(',');
        db.run(`INSERT INTO politicians (name, party, location, grade_current)
                VALUES("${politicians[i][0]}", "${politicians[i][1]}", "${politicians[i][2]}", "${politicians[i][3]}")`,
            (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(`politican ${politicians[i][0]} seeded`)
                }
            });
    }

    for (let i = 0; i < voters.length; i++) {
        voters[i] = voters[i].split(',');
        db.run(`INSERT INTO voters (first_name, last_name, gender, age)
                VALUES("${voters[i][0]}", "${voters[i][1]}", "${voters[i][2]}", "${voters[i][3]}")`,
            (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(`voter ${voters[i][0]} seeded`)
                }
            });
    }
    for (let i = 0; i < votes.length; i++) {
        votes[i] = votes[i].split(',');
        db.run(`INSERT INTO votes (voterId, politicianId)
                VALUES("${votes[i][0]}", "${votes[i][1]}")`,
            (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(`vote seeded`)
                }
            });
    }
})