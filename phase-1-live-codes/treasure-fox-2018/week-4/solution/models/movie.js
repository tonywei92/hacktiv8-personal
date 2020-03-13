'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description is required'
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Rating is required'
        },
        isFloat: {
          args: true,
          msg: 'Invalid number for Rating'
        },
        max: {
          args: 10,
          msg: 'Max. number for rating is 10'
        },
        min: {
          args: 1,
          msg: 'Min. number for rating is 1'
        }
      }
    },
    availableToRent: DataTypes.BOOLEAN
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rent, {
      foreignKey: 'movieId'
    });
  };
  return Movie;
};
