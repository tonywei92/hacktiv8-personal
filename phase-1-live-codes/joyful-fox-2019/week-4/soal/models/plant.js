'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Plant extends Model {
  }

  Plant.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "Tidak boleh kosong"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Price tidak boleh kosong"
        },
        min: {
          args: [1000],
          msg: "Harga minimal 1000"
        }
      }
    },
    timeToHarvest: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Time to harvest tidak boleh kosong"
        },
        min: {
          args: [0],
          msg: "Time to harvest tidak boleh negatif"
        }
      }
    },
    FarmId: DataTypes.INTEGER
  }, {
    sequelize, modelName: "Plant", hooks: {
      afterDestroy: (plant, options) => {
        const { Farm } = sequelize.models;
        return Farm.findByPk(plant.FarmId)
          .then(farm => {
            return Farm.update({
              money: farm.money + plant.price
            }, {
              where: { id: plant.FarmId }
            })
          })

      }
    }
  });

  Plant.associate = function (models) {
    // associations can be defined here
  };
  return Plant;
};