const db = require('./connection');

db.serialize(function() {
  let query =
              `
                INSERT INTO Audiences
                VALUES (
                  null,
                  'M. Rama',
                  'Diansyah',
                  25,
                  'rama@mail.com',
                  'gold',
                  200000
                ), (
                  null,
                  'Wika',
                  'Silo',
                  27,
                  'wika@mail.com',
                  'silver',
                  1000000
                ), (
                  null,
                  'Awtian',
                  'Akbar',
                  23,
                  'awtian@mail.com',
                  'gold',
                  0
                ), (
                  null,
                  'Semmi',
                  'Verian',
                  24,
                  'semmi@mail.com',
                  'reguler',
                  2000000
                ), (
                  null,
                  'Windiana',
                  'Krismanuyar',
                  29,
                  'windi@mail.com',
                  'gold',
                  10000000
                )`;

  db.run(query, function(err) {
    if (!err) {
      console.log('Data inserted!!');
    } else {
      console.log('ERR: ', err);
    }
  })


  let qInsertTicket =
    `
      INSERT INTO Tickets
      VALUES (
        null,
        'TIXSilosilver1234',
        5,
        230000,
        2
      ),
      (
        null,
        'TIXSilosilver4339',
        2,
        130000,
        2
      ),
      (
        null,
        'TIXVerianreguler9876',
        3,
        300000,
        4
      ),
      (
        null,
        'TIXKrismanuyargold3452',
        2,
        180000,
        5
      ),
      (
        null,
        'TIXVerianreguler8213',
        2,
        180000,
        4
      ),
      (
        null,
        'TIXAkbargold6666',
        2,
        100000,
        3
      ),
      (
        null,
        'TIXDiansyahgold6680',
        3,
        51000,
        1
      )
    `

    db.run(qInsertTicket, function(err) {
      if (!err) {
        console.log(`Data ticket inserted!`);
      } else {
        console.log(err);
      }
    })
})
