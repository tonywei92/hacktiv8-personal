const db = require('./connection')
const data = JSON.parse(require('fs').readFileSync('./company.json', 'utf8'))
db.run(`INSERT INTO companies (name, money) VALUES ${data.map(val=>`("${val.name}", ${val.money})`)}`)