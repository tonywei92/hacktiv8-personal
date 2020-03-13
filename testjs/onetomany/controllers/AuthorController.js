const { Author, Book, AuthorPhone } = require("../models");
class AuthorController {
  static all(req, res) {
    let authorsData = [];
    Author.findAll()
      .then(authors => {
        authorsData = authors;
        const promises = [];
        for (let i = 0; i < authors.length; i++) {
          promises.push(authors[i].getAuthorPhone());
        }
        return Promise.all(promises);
      })
      .then(authorPhones => {
        console.log(authorPhones);
        for (let i = 0; i < authorPhones.length; i++) {
          if (authorPhones[i] !== null) {
            authorsData[i].setDataValue("phone", authorPhones[i].toJSON());
          } else {
            authorsData[i].setDataValue("phone", []);
          }
        }
        res.send(authorsData);
      });
  }

  static addPhone(req, res) {
    AuthorPhone.create({ number: req.query.phone, AuthorId: 1 })
      .then(() => res.send("success"))
      .catch(err => res.send(err.message));
  }
}

module.exports = AuthorController;
