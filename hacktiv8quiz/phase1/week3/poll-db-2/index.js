const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('poll.db');

// db.all(`SELECT name,location,grade_current,
// (SELECT count(*) FROM votes WHERE votes.politicianId = politicians.id) as totalVote
// FROM politicians WHERE grade_current < 9
// ORDER BY totalVote ASC
// `, (err, row) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.table(row)
//         }
//     })

// db.all(`SELECT highestVotes.totalVotes, highestVotes.name as politicianName, voters.first_name || " " || voters.last_name as voterName,
//     voters.gender
//     FROM (SELECT (SELECT count(*) FROM votes WHERE politicianId = politicians.id) as totalVotes,
//         politicians.name,
//         politicians.id
//         FROM politicians
//         ORDER BY totalVotes DESC LIMIT 3) as highestVotes
//     LEFT JOIN votes ON votes.politicianId = highestVotes.id
//     LEFT JOIN voters ON voters.id = votes.voterId
// `, (err, row) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.table(row)
//         }
//     })

db.all(`SELECT count(votes.voterId) as totalVote, voters.first_name || " " || voters.last_name as name, voters.gender, voters.age FROM politicians
LEFT JOIN votes ON votes.politicianId = politicians.id
LEFT JOIN voters ON votes.voterId = voters.id
GROUP BY votes.voterId 
HAVING totalVote > 1
ORDER BY totalVote DESC
`, (err, row) => {
        if (err) {
            console.log(err)
        }
        else {
            console.table(row)
        }
    })