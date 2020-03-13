var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

// db.run(`delete from Songs where id = 3 `, function(err) {
//   console.log(this)
// })

// db.all(`select * from Singers where UPPER(name) like '%michael%' `, function(err, data) {
//   console.log(data)
// })

// db.all(`select * from Singers ORDER BY id DESC limit 3 `, function(err, data) {
//   console.log(data)
// })

let argv = process.argv

let table = argv[2]
let command = argv[3]

if(table == 'song') {
  if(command == 'add') {

  }

  if(command == 'delete') {

  }

  if(command == 'firstOrCreate') {

  }
} else if(table == 'singer') {
  if(command == 'findBy') {

  }

  if(command == 'last') {

  }

}
