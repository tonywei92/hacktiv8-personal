const sqlite3 = require('sqlite3').verbose();
const db      = new sqlite3.Database('ticket.db');

class Ticket {
  static insert(name, price, schedule, cb) {
    let query = `INSERT INTO Tickets
                  (name, price, schedule, isAvailable)
                 VALUES
                  (
                    "${name}",
                    ${price},
                    "${schedule}",
                    1
                  )`;

    db.run(query, function(err) {
      if (!err) {
        cb(null, this.lastID);
      } else {
        cb(err, null);
      }
    })
  }

  static findBy(column_name, value,  cb) {
    let query = `SELECT * from Tickets WHERE ${column_name} = "${value}"`

    db.all(query, function(err, rows) {
      if (!err) {
        cb(null, rows);
      } else {
        cb(err, null);
      }
    })
  }

  static toggleAvailability(id, cb) {
    let query = `UPDATE Tickets
                 SET  isAvailable =
                  (CASE
                    WHEN isAvailable = '0' THEN '1'
                    WHEN isAvailable = '1' THEN '0'
                   END
                  )
                 WHERE id = ${id}`;

    db.run(query, function(err) {
      if (!err) {
        if (this.changes === 0) {
          cb('Ticket Not Found');
        } else {
          cb();
        }
      } else {
        cb(err);
      }
    })
  }
}


//TEST CASE
// Ticket.toggleAvailability(1, function(err) {
//   if (!err) {
//     console.log("Berhasil");
//   } else {
//     console.log(err);
//   }
// })
//
// Ticket.findBy('id', 1, function(err, rows) {
//   if (!err) {
//     console.log(rows);
//   } else {
//     console.log(err);
//   }
// })

// Ticket.insert('Pertandingan Wushu', 50000, new Date("19 Aug 2018"), function(err, id) {
//   if (!err) {
//     console.log("INI LOH ID KAMU: ", id);
//   } else {
//     console.log(err);
//   }
// })

module.exports = Ticket
