const db = require('../db/connection');

class Show {
  constructor(id, show, schedule, price, isAvailable) {
    this.id = id;
    this.show = show;
    this.schedule = schedule;
    this.price = price;
    this.isAvailable = isAvailable;
  }

  static create(show, schedule, price, callback) {
    let query = `INSERT
                   INTO Shows
                 (show, schedule, price)
                 VALUES
                  ("${show}", "${schedule}", ${price})
                `;

    db.run(query, function(err) {
      if (!err) {
        callback();
      } else {
        callback(err);
      }
    })
  }

  static findBy(columnName, value, callback) {
    let query = `
          SELECT *
          FROM Shows
          WHERE ${columnName} = '${value}'
        `
    db.all(query, function(err, rows) {
      if (!err) {
        let data = [];
        rows.forEach(row => {
          data.push(new Show(row.id, row.show, row.schedule, row.price, row.isAvailable));
        })

        callback(null, data);
      } else {
        callback(err, null);
      }
    })
  }

  static toggleAvailability(id, callback) {
    let query = `UPDATE Shows
                 SET isAvailable =
                  (CASE
                    WHEN isAvailable = '0' THEN '1'
                    WHEN isAvailable = '1' THEN '0'
                   END
                  )
                 WHERE id = ${id}`;

     db.run(query, function(err) {
       if (!err) {
         if (this.changes === 0) {
           callback('Show Not Found');
         } else {
           callback();
         }
       } else {
         console.log('---ERROR');
         callback(err);
       }
     })
  }
}

module.exports = Show
