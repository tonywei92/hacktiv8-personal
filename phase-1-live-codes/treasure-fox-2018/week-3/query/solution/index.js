const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

// db.all(`select count(Cards.Playerid) as totalcard, Cards.playerId, Players.name, Players.age, Players.gender
// from Cards
// inner join Players
// on Cards.playerId = Players.id
// group by Cards.Playerid
// having totalcard >=4 AND Players.gender = "Male"
// order by totalcard desc
// limit 3`, (err, data) => {
//   console.log(data);
// })
//
// db.all(`select  Status.title, Status.point, Status.level,
// Players.name, Players.age, Players.gender
// from Players
// inner join Status
// on Players.id = Status.playerId
// order by Status.level desc`, (err, data) => {
//   console.log(data);
// })

db.all(`select Players.*, COUNT(Cards.id) as total_card
from Players
left join Cards ON Players.id = Cards.playerId
GROUP BY Cards.playerId
HAVING total_card >= 5
ORDER BY age`, (err, data) => {
  console.log(err)
  console.log(data);
})

db.all(`select name as 'name_and_title' from Players
UNION
select title from Status`, (err, data) => {
  console.log(err)
  console.log(data);
})

db.all(`select (rank || '-' || type || '-' || skill) as 'description'
from Cards
GROUP BY rank, type, skill`, (err, data) => {
  console.log(err)
  console.log(data);
})
