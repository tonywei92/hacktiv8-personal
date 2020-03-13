'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Gasoline extends Model {
  
  }
  Gasoline.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quota: DataTypes.INTEGER
  }, {sequelize, modelName: 'Gasoline'});
  Gasoline.associate = function(models) {
    Gasoline.hasMany(models.Vehicle)
  };
  return Gasoline;
};