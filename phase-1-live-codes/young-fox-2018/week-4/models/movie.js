'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});

  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Review)
  };

  Movie.countRating = async function(field, value) {
    try {
      return await sequelize.models.Review.aggregate('rating', 'sum', {
        where: {
          [field]: value
        }
      })
    } catch (error) {
      throw new Error(error)
    }
    
  }

  Movie.prototype.updateRating = function() {
    let sumRating = 0
    let self = this
    return sequelize
            .models
            .Review
            .aggregate('rating', 'sum', {
              where: {
                MovieId: this.id
              }
            })
            .then((sumTotal) => {
              sumRating = sumTotal
              return sequelize.models.Review.count({
                where: {
                  MovieId: this.id
                },
                col: 'rating'
              })
            })
            .then((totalRating) => {
              if ( totalRating > 0 ) {
                this.rating = Math.round(sumRating / totalRating)
              } else {
                this.rating = 0
              }
              return this.save()
            })
            .catch((err) => {
              throw new Error(err)
            })
  }
  return Movie;
};