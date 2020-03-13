'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Book extends Model {

  }

  Book.init({
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    AuthorId: DataTypes.INTEGER
  }, {
    sequelize, modelName: "Book",
    validate: {
      hanyaboleh3buku() {
        return Book.findAll({ where: { AuthorId: this.AuthorId } })
          .then(books => {
            if (books.length >= 3) {
              throw 'buku cuma boleh 3'
            }
          })
      }
    }

  });

  Book.associate = function (models) {
    Book.belongsTo(models.Author);
  };
  return Book;
};