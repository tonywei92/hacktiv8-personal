'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 10],
          msg: "Name must between 3 and 10 characters"
        }
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 100,
          msg: "Minimum input attack is 100"
        },
        max: {
          args: 1000,
          msg: "Maximum input attack is 1000"
        }
      }
    },
    KingdomId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeValidate(value) {
        return Soldier.countSoldier(value.KingdomId)
                      .then((totalSoldier) => {
                        if (totalSoldier > 19) {
                          throw new Error("Maximum total soldier for each of kingdom is only 20")
                        }
                      })
                      .catch((err) => {
                        throw new Error(err)
                      })
      }
    }
  });
  Soldier.associate = function(models) {
    // associations can be defined here
    Soldier.belongsTo(models.Kingdom)
  };

  // GAK KEPAKE
  Soldier.sumAttack = function(kingdomId) {
    return Soldier.findAll({
      where: {
        KingdomId: kingdomId
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('attack')), 'totalAttack']],
      group: Soldier.attack
    }).then((soldiersAttack) => {
      return soldiersAttack
    })
    .catch((err) => {
      throw new Error(err)
    })
  }

  Soldier.countSoldier = function(kingdomId) {
    return sequelize.models.Soldier.count({
      where: {
        KingdomId: kingdomId
      }
    }).then((totalSolider) => {
      return totalSolider
    })
    .catch((err) => {
      throw new Error(err)
    })
  }
  return Soldier;
};