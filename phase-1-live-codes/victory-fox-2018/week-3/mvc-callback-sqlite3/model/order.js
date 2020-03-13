const sqlite3 = require('sqlite3').verbose();
const db      = new sqlite3.Database('ticket.db');

class Order {
  static insert(ticketId, cb) {
    let query = `INSERT INTO Orders (order_date, ticketId) VALUES ("${new Date()}", ${ticketId})`;

    db.run(query, function(err) {
      if (!err) {
        cb(null, this.lastID);
      } else {
        cb(err, null);
      }
    })
  }

  static remove(id, cb) {
    let query = `DELETE FROM Orders WHERE id = ${id}`;

    db.run(query, function(err){
      if (!err) {
        if (this.changes === 0) {
          cb("Order Not Found");
        } else {
          cb()
        }
      } else {
        cb(err);
      }
    })
  }
}

//TEST CASE
// Order.remove(1, function(err) {
//   if (!err) {
//     console.log("berhasil");
//   } else {
//     console.log(err);
//   }
// })

module.exports = Order
