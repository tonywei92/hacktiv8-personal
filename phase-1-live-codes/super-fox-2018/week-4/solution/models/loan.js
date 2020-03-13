'use strict';

const updateBookStatus = (Book, bookId, bool) => {
  return new Promise(function (resolve, reject) {
    Book
    .update({ availableToBorrow: bool }, { where: { id: bookId } })
    .then(function () {
      resolve();
    })
    .catch(function () {
      reject();
    });
  });
};

module.exports = (sequelize, DataTypes) => {
  var Loan = sequelize.define('Loan', {
    bookId: DataTypes.INTEGER,
    borrowerName: DataTypes.STRING,
    borrowerGender: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    returned: DataTypes.BOOLEAN
  }, {
    hooks: {
      afterCreate: (loan, options) => {
        updateBookStatus(sequelize.models.Book, loan.bookId, false);
      },
      afterUpdate: (loan, options) => {
        updateBookStatus(sequelize.models.Book, loan.bookId, true);
      }
    }
  });
  Loan.associate = function(models) {
    // associations can be defined here
    Loan.belongsTo(models.Book, {
      foreignKey: 'bookId'
    });
  };

  Loan.prototype.getNameWithTitle = function (models) {
    return this.borrowerGender === 'Male' ? 'Mr. ' + this.borrowerName : 'Ms. ' + this.borrowerName;
  }
  return Loan;
};
