const db = require('./connection')

const seedUsers = `
  INSERT INTO Users (name, email, phone, createdAt)
  VALUES
    ("Yoki Suprayogi", "yoki@mail.com", "0812-3456-7890", '2019-03-16 10:14:30'),
    ("Armedi", "medi@mail.com", "0895-6789-0123", '2019-03-17 20:20:19'),
    ("Wika Silo", "wika@mail.com", "0815-6789-0123", '2019-03-18 07:08:45'),
    ("Muhammad Ramadiansyah", "rama@mail.com", "0823-4567-8901", '2019-03-19 11:15:26')`

db.run(seedUsers, function(err) {
  if(err) {
    console.log('ERR: ' + err)
  } else {
    console.log('users have been seeded')
  }
})