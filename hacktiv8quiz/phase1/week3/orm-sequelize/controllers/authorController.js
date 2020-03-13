const Views = require("../views");

class AuthorController {
  constructor() {
    this.Sequelize = require("sequelize");
    this.conn = require("../connection");
    this.Author = require("../models/author")(this.conn, this.Sequelize);
  }

  create(data) {
    this.Author.create(data)
      .then(() => {
        console.log(Views.message("success"));
        this.conn.close();
      })
      .catch(err => console.log(Views.error(err)));
  }

  readOne(id) {
    this.Author.findByPk(id).then(data => {
      if (data) {
        console.log(data.dataValues);
      } else {
        console.log(Views.error("data tidak ditemukan"));
      }
      this.conn.close();
    });
  }
  readAll() {
    this.Author.findAll().then(data => {
      if (data || data.length === 0) {
        console.log(JSON.stringify(data, null, 2));
      } else {
        console.log(Views.error("data kosong"));
      }
      this.conn.close();
    });
  }

  update(id, data) {
    this.Author.update(data, { where: { id } }).then(() => {
      console.log(Views.message("done"));
      this.conn.close();
    });
  }

  erase(id) {
    this.Author.destroy({
      where: {
        id
      }
    }).then(() => {
      console.log(`record with id ${id} deleted`);
      this.conn.close();
    });
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new AuthorController();
      return this.instance;
    }
  }
}

module.exports = AuthorController;
