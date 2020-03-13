const db = require("../connection");
const tableName = "tickets";
class Ticket {
  static count(objParam, cb) {
    db.get(
      `SELECT COUNT(*) AS jumlah FROM ${tableName}
                WHERE ${objParam.where.key} = ?`,
      [objParam.where.value],
      (err, row) => {
        if (err) {
          cb(err);
        } else {
          if (row) {
            cb(null, row.jumlah);
          } else {
            cb(null, 0);
          }
        }
      }
    );
  }

  static findAll(objParam, cb) {
    db.all(
      `SELECT * FROM ${tableName} WHERE ${objParam.where.key} = ?`,
      [objParam.where.value],
      (err, rows) => {
        if (err) {
          cb(err);
        } else {
          cb(null, rows);
        }
      }
    );
  }

  static createMany(arrRecords, cb) {
    let stop = false;
    db.serialize(() => {
      var stmt = db.prepare(
        `INSERT INTO ${tableName} (movieId, ticketCode, customerName, phone) VALUES(?,?,?,?)`,
        function(err) {
          if (err) {
            stop = true;
            cb(err);
          }
        }
      );
      if (stop) {
        return;
      }
      for (let i = 0; i < arrRecords.length; i++) {
        let rec = arrRecords[i];
        stmt.run(
          [rec.movieId, rec.ticketCode, rec.customerName, rec.phone],
          function(err) {
            if (err) {
              cb(err);
              stop = true;
            }
          }
        );
        if (stop) {
          return;
        }
      }
      stmt.finalize(function(err) {
        if (err) {
          cb(err);
        } else {
          cb();
        }
      });
    });
  }
}

module.exports = Ticket;
