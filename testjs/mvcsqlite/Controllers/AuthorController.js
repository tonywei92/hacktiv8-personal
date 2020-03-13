const Author = require("../Models/Author");
class AuthorController {
  static all() {
    Author.findAll(function(err, rows) {
      if (err) {
        console.log(err);
      } else {
        console.log(rows);
      }
    });
  }

  static findById(id) {
    Author.find(id, function(err, row) {
      if (err) {
        console.log(err);
      } else {
        console.log(row);
      }
    });
  }

  static addMany(arrAuthor) {
    Author.createMany(arrAuthor, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("berhasil");
      }
    });
  }

  static add(objAuthor) {
    if (isEmail(objAuthor.email) && isPhone(objAuthor.phone)) {
      Author.create(objAuthor, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("berhasil");
        }
      });
    } else {
      DataView.error("email tidak valid");
    }
  }

  static update(id, name, address, age) {
    const params = {
      where: {
        key: "id",
        value: id
      },
      update: [
        {
          key: "name",
          value: name
        },
        {
          key: "address",
          value: address
        },
        {
          key: "age",
          value: age
        }
      ]
    };

    Author.update(params, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("berhasil");
      }
    });
  }

  static updateAddress(id, address) {
    const params = {
      where: {
        key: "id",
        value: id
      },
      update: [
        {
          key: "address",
          value: address
        }
      ]
    };

    Author.update(params, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("berhasil");
      }
    });
  }

  static delete(id) {
    Author.delete(id, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("delete berhasil");
      }
    });
  }
}

module.exports = AuthorController;
