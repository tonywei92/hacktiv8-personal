'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  const models = sequelize.models;
  class Farm extends Model {
    static nextDay(farmId) {
      return Farm
        .findByPk(farmId, {
          include: [ models.Plant ]
        })
        .then(farm => {
          if(!farm) throw 'Farm not found';
          farm.setDataValue('dayPlayed', farm.dayPlayed + 1);
          const promises = [];
          promises.push(farm.save());
          farm.Plants.forEach(plant => {
            if(plant.timeToHarvest !== 0) {
              plant.setDataValue('timeToHarvest', plant.timeToHarvest - 1);
              promises.push(plant.save());
            }
          })
          return Promise.all(promises)
        })
    }

    get fullDayPlayed() {
      return this.getDataValue('dayPlayed') + ' days';
    }
  }
  Farm.init({
    farmName: DataTypes.STRING,
    playerName: DataTypes.STRING,
    birthDayDate: DataTypes.DATE,
    money: DataTypes.INTEGER,
    dayPlayed: DataTypes.INTEGER
  }, {
    sequelize
  });
  Farm.associate = function(models) {
    Farm.hasMany(models.Plant);
  };
  return Farm;
};