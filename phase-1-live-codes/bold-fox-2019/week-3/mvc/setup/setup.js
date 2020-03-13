const db = require('../config/config').db

function createTable(table, schema){
  // drop
  db.run(`DROP TABLE ${table}`, (err)=>{
    if(err) console.log(`[x] drop tabel ${table}`);
    else console.log(`[v] drop tabel ${table}`);
  })
  // create
  db.run(`CREATE TABLE ${table}(${schema})`, (err)=>{
    if(err) console.log(`[x] create tabel ${table}`);
    else console.log(`[v] create tabel ${table}`);
  })
}

module.exports = ()=>{
  db.serialize(()=>{
    // people
    createTable('people', `
      id integer primary key autoincrement,
      idCard varchar not null,
      firstName varchar not null,
      lastName varcar not null,
      credit Integer
    `)

    // properties
    createTable('properties', `
      id integer primary key autoincrement,
      street varchar not null,
      number integer not null,
      price integer not null,
      type varchar not null,
      certificate varchar,
      personId integer,
      FOREIGN KEY(personId) REFERENCES people(id)
    `)
  })
}