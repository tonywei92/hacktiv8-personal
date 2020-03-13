var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

db.run(`update addresses set city = 'DKI_JAKARTA' where city like '%jakarta%' `, function(err) {
  console.log(err)
  console.log(this)

})
