const db = require('./connection')
db.serialize(()=>{
  db.run(`CREATE TABLE companies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    money INTEGER
  )`)
  db.run(`CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    username TEXT,
    kpi INTEGER,
    jobDone INTEGER,
    salary INTEGER,
    sp INTEGER,
    companyId INTEGER,
    FOREIGN KEY (companyId) REFERENCES companies (id) 
  )`)
})