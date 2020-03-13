const Show = require('../models/show');
const View = require('../views/view');

class ShowController {
  static add(title, schedule, price) {
    Show.create(title, new Date(schedule), price, function(err) {
      if (!err) {
        View.showInfo(`Successfully added a ${title}`)
      } else {
        View.showErr(err)
      }
    })
  }

  static findBy(columnName, value) {
    Show.findBy(columnName, value, function(err, data) {
      if (!err) {
        View.showInfo(data);
      } else {
        View.showErr(err);
      }
    })
  }

  static toggleAvailability(id) {
    Show.toggleAvailability(id, function(err) {
      if (!err) {
        Show.findBy("id", id, function(err, rows) {
          if (!err) {
            if (rows[0].isAvailable === 0) {
              View.showInfo(`${rows[0].show} is now unavailable`)
            } else {
              View.showInfo(`${rows[0].show} is now available`)
            }
          } else {
            View.showError(err);
          }
        })
        // View.showInfo("Berhasil");
      } else {
        console.log(err);
      }
    })
  }
}

module.exports = ShowController
