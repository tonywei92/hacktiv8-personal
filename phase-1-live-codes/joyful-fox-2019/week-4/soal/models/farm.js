'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Farm extends Model {
    get fullDayPlayed() {
      return this.dayPlayed + " days"
    }

    static nextDay(farmId) {
      return Farm.findByPk(farmId)
        .then(farm => {
          return Farm.update({ dayPlayed: farm.dayPlayed + 1 }, {
            where: {
              id: farmId
            }
          })
            .then(() => {
              const { Plant } = sequelize.models;
              return Plant.findAll({
                where: {
                  FarmId: farmId
                }
              })
            })
            .then(plants => {
              let promises = [];
              for (let i = 0; i < plants.length; i++) {
                if (plants[i].timeToHarvest > 0) {
                  plants[i].timeToHarvest--;
                  promises.push(plants[i].save())
                }
              }
              return Promise.all(promises)
            })
        })
    }
  }
  Farm.init({
    farmName: DataTypes.STRING,
    playerName: DataTypes.STRING,
    birthDayDate: DataTypes.DATE,
    money: DataTypes.INTEGER,
    dayPlayed: DataTypes.INTEGER,
  }, { sequelize, modelName: 'Farm' });
  Farm.associate = function (models) {
    Farm.hasMany(models.Plant);
  };
  return Farm;
};