const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(function() {
  db.run(`CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName VARCHAR(50),
    category VARCHAR(50),
    price INTEGER,
    stock INTEGER
  )`,data => {
    if(!data){
      console.log("TABLE Products TELAH DIBUAT");
    }else{
      console.log(data);
    }
  })
  db.run(`CREATE TABLE IF NOT EXISTS Invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invCode VARCHAR(50),
    date VARCHAR(50),
    paymentMethod VARCHAR(50)
  )`,data => {
    if(!data){
      console.log("TABLE Invoices TELAH DIBUAT");
    }else{
      console.log(data);
    }
  })
  db.run(`CREATE TABLE IF NOT EXISTS invoiceProducts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoiceId INTEGER,
    productId INTEGER,
    quantity INTEGER,
    FOREIGN KEY(invoiceId) REFERENCES Invoices(id),
    FOREIGN KEY(productId) REFERENCES Products(id)
  )`,data => {
    if(!data){
      console.log("TABLE invoiceProducts TELAH DIBUAT");
    }else{
      console.log(data);
    }
  })
  db.run(`INSERT INTO Products
    VALUES(NULL, "Indomie Kukus", "food", 10000,6),
    (NULL, "Baju Anti Badai", "outfit", 15000  ,2),
    (NULL, "Celana Karet", "outfit", 21000,7),
    (NULL, "Sikat Gigi", "personal care", 13500,5),
    (NULL, "Handuk", "personal care", 23000,9),
    (NULL, "Garpu Kayu", "kitchen tool", 28000,6),
    (NULL, "Lilin Terang Terus" , "kitchen tool", 23000,7),
    (NULL, "Roti Kurang Kenyang", "food", 13000,8),
    (NULL, "Deodorant","personal care", 27500,7),
    (NULL, "Snack MSG Enak",  "food", 12000, 4)
  `,data => {
    console.log("Data Products telah di input");
  })
  db.run(`INSERT INTO Invoices
    VALUES(NULL, "INV2018-03-001", "2018-03-19", "cash"),
    (NULL, "INV2018-03-002", "2018-03-19", "voucher"),
    (NULL, "INV2018-03-003", "2018-03-19", "voucher"),
    (NULL, "INV2018-03-006", "2018-03-19", "voucher"),
    (NULL, "INV2018-03-007", "2018-03-19", "credit"),
    (NULL, "INV2018-03-010", "2018-03-19", "credit"),
    (NULL, "INV2018-03-011", "2018-03-19", "cash")
  `,data => {
    console.log(data);
    console.log("Data Invoices telah di input");
  })
  db.run(`INSERT INTO invoiceProducts
    VALUES(NULL, 6, 6, 4),
    (NULL, 7, 8, 5),
    (NULL, 4, 1, 5),
    (NULL, 1, 10, 5),
    (NULL, 4, 9, 4),
    (NULL, 5, 6, 4),
    (NULL, 5, 3, 2),
    (NULL, 1, 5, 2),
    (NULL, 7, 6, 7),
    (NULL, 6, 6, 5),
    (NULL, 7, 2, 4),
    (NULL, 5, 8, 8),
    (NULL, 3, 2, 4),
    (NULL, 1, 9, 8),
    (NULL, 1, 1, 6),
    (NULL, 3, 5, 7),
    (NULL, 7, 1, 2),
    (NULL, 6, 3, 4),
    (NULL, 3, 7, 8),
    (NULL, 2, 2, 7),
    (NULL, 1, 8, 3),
    (NULL, 2, 4, 6)
  `,data => {
    console.log("Data invoiceProducts telah di input");
  })
});

db.close();
