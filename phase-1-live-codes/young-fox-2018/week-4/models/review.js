'use strict';
const { updateRating } = require('../helpers/updateRating')
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'description cannot be empty'
        },
        customValidation (value) {
          let indexOf = value.indexOf('menurut saya')
          if (indexOf < 0) {
            throw new Error('must filled: menurut saya')
          }
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: 'Minimum rating input is 1'
        },
        max: {
          args: 5,
          msg: 'Maximum rating input is 5'
        }
      }
    },
    MovieId: DataTypes.INTEGER
  }, {
    hooks: {
      afterSave(review, options) {
        return updateRating(sequelize, review, options)
      },
      afterDestroy(review, options) {
        return updateRating(sequelize, review, options)
      }
    }
  });
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Movie)
  };

  Review.prototype.getStatus = function() {
    if ( this.rating == 5 ) {
      return "Excellent"
    } else if ( this.rating >= 4 ) {
      return "Very Good"
    } else if ( this.rating >= 3 ) {
      return "Good"
    } else if ( this.rating >= 2 ) {
      return "Bad"
    } else {
      return "Very Bad"
    }
  }
  return Review;
};