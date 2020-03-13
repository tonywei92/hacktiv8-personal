'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vegetable = sequelize.define('Vegetable', {
    name: DataTypes.STRING,
    buy: {
      type: DataTypes.INTEGER,
      validate: { 
        min: {
          args: 1,
          msg: "Minimum input is 1"
        }, 
        max: {
          args: 1000,
          msg: "Maximum input is 1000"
        }
      }
    },
    sell: {
      type: DataTypes.INTEGER,
      validate: {
        checkSell(input) {
          if(input < this.buy) {
            throw new Error('Sell must greater than buy')
          }
        }, 
        min: {
          args: 1,
          msg: "Minimum input is 1"
        }, 
        max: {
          args: 1000,
          msg: "Maximum input is 1000"
        }
      }
    },
    waterPoin: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    waterToCrops: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 10,
          msg: "Minimum WTC is 10"
        }
      }
    },
    SeasonId: {
      type: DataTypes.INTEGER,
      validate: {
        checkSeason(input) {
          return sequelize.models.Season.findByPk(input)
          .then(data => {
            if(!data) throw new Error('Season not exists')
          })
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (input, oprions) => {
        input.waterPoin = 0
      },
      afterDestroy(input, options) {
        return sequelize.models.Season.findByPk(options.SeasonId)
        .then((season) => {
          return season.update({income: season.income + input.sell})
        })
      },
      afterSave: (input, options) => {
        return sequelize.models.Season.findByPk(options.SeasonId)
        .then((season) => {
          return season.update({outcome: season.outcome + input.buy})
        })
      }
    }
  });
  Vegetable.associate = function(models) {
    // associations can be defined here
    Vegetable.belongsTo(models.Season)
  };
  return Vegetable;
};