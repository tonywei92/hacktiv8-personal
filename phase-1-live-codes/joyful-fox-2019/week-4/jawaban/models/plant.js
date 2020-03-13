'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  const models = sequelize.models;
  class Plant extends Model {}
  Plant.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        wrongValue(value) {
          if(!value) {
            throw `Plant name shouldn't be null`
          }
        }
      }
    },
    price: {
      type: DataTypes.INTEGER, 
      validate: {
        min: {
          args: [ 1000 ],
          msg: `Prices shouldn't less than 1000`
        }
      }
    },
    timeToHarvest: {
      type: DataTypes.INTEGER, 
      validate: {
        min: {
          args: [ 0 ],
          msg: `Time to harvest shouldn't less than 0`
        }
      }
    },
    FarmId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeDestroy(plant) {
        return models.Farm
          .findByPk(plant.FarmId)
          .then(farm => {
            console.log(plant, farm)
            farm.setDataValue('money', farm.money + plant.price);
            return farm.save();
          })
      }
    },
    sequelize
  });
  Plant.associate = function(models) {
    // associations can be defined here
  };
  return Plant;
};