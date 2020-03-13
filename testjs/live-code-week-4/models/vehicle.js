'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const ClassModel = sequelize.models
  class Vehicle extends Model {
  
  }
  Vehicle.init({
    name: {
      type: DataTypes.STRING ,
      validate : {
         isNOtNull(){
           if(!this.name || this.title.name === 0)throw new Error('jangan kosong')
         }
      } 
    },
    maxFuel: DataTypes.INTEGER,
    fuel:{ 
      type: DataTypes.INTEGER,
      validate:{
        
      }},
    GasolineId : DataTypes.INTEGER
  }, {
    sequelize, modelName: 'Vehicle',
    
  });


  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.Gasoline)
  };
  return Vehicle;
};