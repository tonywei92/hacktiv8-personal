const Sqlite3 = require('sqlite3').verbose()
const db = new Sqlite3.Database('./data.db')

// Release 1
// db.all(
//   `
//   SELECT sports.name, athletes.name, min(age) as umur from athletes
//   inner join sports on sports.id = athletes.sportId group by countryId order by umur
// `,
//   (err, rows) => {
//     console.log(rows)
//   }
// )

// Release 2
// db.all(
//   `
//   select  count(*) as regions,  region
//   from countries group by region having regions > 2
// `
// ).then((err, rows) => {
//   console.log(rows)
// })

// release 3
// db.all(
//   `
//   select  president, region,  athletes.name from countries
//   left join athletes on athletes.countryId = countries.id
//   where countries.name = 'Indonesia' or countries.region not in ( 'South Asia', 'East Asia')
// `,
//   (err, rows) => {
//     console.log(rows)
//   }
// )
