const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('tokox.db');

db.serialize(function() {
  let qInsertCustomers =
      `INSERT INTO Customers (name, gender, age, email, phoneNumber)
        VALUES
          ('Windi', 'female', 29, 'windi@mail.com', '08921348246'),
          ('Lisa', 'female', 28, 'lisa@mail.com', '08423454326'),
          ('Vanessa', 'female', 30, 'vanessa@mail.com', '0832318345'),
          ('Devi', 'female', 23, 'devi@mail.com', '08372463421'),
          ('Dimitri', 'male', 20, 'dimitri@mail.com', '0832318234'),
          ('Rifki', 'male', 30, 'rifki@mail.com', '0822123434'),
          ('Dimas', 'male', 33, 'dimas@mail.com', '0832318345'),
          ('Semmi', 'male', 22, 'vanessa@mail.com', '0832315245'),
          ('Wika', 'male', 27, 'wika@mail.com', '08721383493'),
          ('Awtian', 'male', 23, 'awtian@mail.com', '08754323493')
      `
  let qInsertItems =
      `INSERT INTO Items (itemName, price)
        VALUES
          ('Gundam', 5500000),
          ('MacBook Pro', 35000000),
          ('Sepatu Adadidus', 2000000),
          ('Jam Tag Hour', 24400000),
          ('Sepatu Staccatu', 1455000),
          ('Headphone Shuure', 8215000),
          ('Aiphone X', 17999000)
      `

  let qInsertTrans =
    `INSERT INTO Transactions (quantity, paymentMethod, itemId, customerId)
      VALUES
      (2, 'transfer bank', 1, 1),
      (1, 'credit card', 2, 6),
      (1, 'credit card', 7, 3),
      (1, 'transfer bank', 7, 2),
      (3, 'credit card', 3, 6),
      (1, 'credit card', 6, 5),
      (1, 'transfer bank', 2, 9),
      (1, 'transfer bank', 5, 1)
    `

  db.run(qInsertCustomers, function(err) {
    if(!err) {
      console.log('insert customers berhasil');
    }
  });

  db.run(qInsertItems, function(err) {
    if(!err) {
      console.log('insert items berhasil');
    }
  })

  db.run(qInsertTrans, function(err) {
    if(!err) {
      console.log('insert transactions berhasil');
    }
  });

})
