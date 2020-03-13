'use strict';

const updateMovieStatus = (Movie, movieId, bool) => {
  return new Promise(function (resolve, reject) {
    Movie
    .update({ availableToRent: bool }, { where: { id: movieId } })
    .then(function () {
      resolve();
    })
    .catch(function () {
      reject();
    });
  });
};

module.exports = (sequelize, DataTypes) => {
  var Rent = sequelize.define('Rent', {
    movieId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Movie Data is required'
        }
      }
    },
    borrowerName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Borrower\'s Name is required'
        }
      }
    },
    borrowerGender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Borrower\'s Gender is required'
        }
      }
    },
    returned: DataTypes.BOOLEAN
  }, {
    hooks: {
      afterCreate: (rent, options) => {
        updateMovieStatus(sequelize.models.Movie, rent.movieId, false);
      },
      afterUpdate: (rent, options) => {
        updateMovieStatus(sequelize.models.Movie, rent.movieId, true);
      }
    }
  });
  Rent.associate = function(models) {
    // associations can be defined here
    Rent.belongsTo(models.Movie, {
      foreignKey: 'movieId'
    });
  };

  Rent.prototype.getNameWithTitle = function (models) {
    return this.borrowerGender === 'Male' ? 'Mr. ' + this.borrowerName : 'Ms. ' + this.borrowerName;
  }
  return Rent;
};
