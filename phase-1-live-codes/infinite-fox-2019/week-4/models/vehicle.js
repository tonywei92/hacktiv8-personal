'use strict'

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize

  class Vehicle extends Model {
    fuelPercentage() {
      const percentage = (this.fuel / this.maxFuel) * 100

      return `${percentage}%`
    }
  }

  Vehicle.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please Input the vehicle name'
          }
        }
      },
      maxFuel: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 10,
            msg: 'Maximum Fuel should be more than 10 Litre'
          }
        }
      },
      fuel: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: {
            args: true,
            msg: 'Please enter how many fuel do you want to add'
          }
        }
      },
      GasolineId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Vehicle',
      hooks: {
        async afterUpdate(vehicle) {
          try {
            const addedFuel = vehicle.dataValues.fuel - vehicle._previousDataValues.fuel
            const gasoline = await sequelize.models.Gasoline.findByPk(vehicle.GasolineId)
            await gasoline.update({
              quota: gasoline.quota - addedFuel
            })
          } catch (err) {
            console.log(err)
          }
        }
      }
    }
  )

  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.Gasoline)
  }

  return Vehicle
}
