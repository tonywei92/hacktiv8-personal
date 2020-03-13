const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

let query = `SELECT paymentMethod, COUNT(*) as total FROM Invoices GROUP BY paymentMethod order by total desc`;

db.all(query, (err, data) => {
  console.log(data);
})

let query1 = `SELECT Products.productName, Products.price, SUM(invoiceProducts.quantity) as TotalQuantity
                FROM Products
                INNER JOIN invoiceProducts
                ON Products.id = invoiceProducts.productId
                GROUP BY Products.id
                ORDER BY TotalQuantity DESC
                LIMIT 0,5`

db.all(query1, (err, data1) => {
  console.log(data1);
})

let query2 = `SELECT * FROM invoiceProducts
              INNER JOIN Products
              ON Products.id = invoiceProducts.productId
              INNER JOIN Invoices
              ON Invoices.id = invoiceProducts.invoiceId
              WHERE Invoices.invCode = "INV2018-03-011"`

db.all(query2, (err, data2) => {
  console.log('asd',data2);
})

db.close();
