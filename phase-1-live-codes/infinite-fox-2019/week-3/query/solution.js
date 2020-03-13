const Sqlite3 = require('sqlite3').verbose()
const db = new Sqlite3.Database('./data.db')

// Release 1
db.all(
  `
  SELECT countries.name AS "Country Name", 
	countries.region AS "Region",
	SUM(athletes.medalCount) AS "Total Medal" FROM athletes
	INNER JOIN countries
		ON countries.id = athletes.countryId
	GROUP BY countries.name
	ORDER BY "Total Medal"  DESC
	LIMIT 3
`,
  (err, rows) => {
    console.log("=== Release 1 ===")
    console.table(rows)
  }
)

// Release 2
db.all(
  `
  SELECT countries.name AS "Nama Negara", 
	sports.name AS "Sport Name", 
	athletes.name AS "Athletes Name",
	athletes.age AS Umur,
	athletes.medalCount AS "Total Medal" FROM athletes
	INNER JOIN sports 
		ON sports.id = athletes.sportId
	INNER JOIN countries
		ON countries.id = athletes.countryId 
	WHERE athletes.age < 21 AND countries.name = 'Indonesia'
	ORDER BY countries.name
`,
  (err, rows) => {
    console.log("=== Release 2 ===")
    console.table(rows)
  }
)

// Release 3
db.all(
  `
  SELECT countries.region AS "REGION",  sports.name AS "Sport Name", COUNT(athletes.id) AS "Total Athletes" FROM athletes
	INNER JOIN countries
		ON countries.id = athletes.countryId
	INNER JOIN sports
		ON sports.id = athletes.sportId
	GROUP BY countries.region, sports.name
`,
  (err, rows) => {
    console.log("=== Release 3 ===")
    console.table(rows)
  }
)
