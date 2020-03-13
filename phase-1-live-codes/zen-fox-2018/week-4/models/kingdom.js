'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeUpdate(kingdom, option) {
        // return Kingdom.checkDistrict(kingdom.DistrictId)
        //               .then((foundKingdom) => {
        //                 let totalAttackKingdom = kingdom.aggregateSoldierAttack()
        //                 let totalAttackEnemyKingdom = 0
        //                 if (foundKingdom) {
        //                   totalAttackEnemyKingdom = foundKingdom.aggregateSoldierAttack()
        //                   if (totalAttackKingdom > totalAttackEnemyKingdom ) {
        //                     console.log(option, '========')
        //                     return foundKingdom.update({ // 
        //                       DistrictId: null
        //                     }, {
        //                       hooks: false
        //                     })
        //                   } else {
        //                     throw "Gagal mendapatkan kastil"
        //                   }
        //                 }
        //               })
        //               .catch((err) => {
        //                 throw err
        //               })
      }
    }
  });
  Kingdom.associate = function(models) {
    // associations can be defined here
    Kingdom.hasMany(models.Soldier)
    Kingdom.belongsTo(models.District)
  };

  Kingdom.checkDistrict = function(districtId) {
    return Kingdom.findOne({
      where: { DistrictId: districtId },
      include: [
        {
          model: sequelize.models.Soldier
        }
      ]
    })
                  .then((kingdom) => {
                    if (kingdom) {
                      return kingdom
                    } else {
                      return null
                    }
                  })
                  .catch((err) => {
                    throw new Error(err)
                  })
  }


  Kingdom.prototype.getTotalSoldiers = function() {
    this.soldiers = this.Soldiers.length + ' Pasukan'
  }

  Kingdom.prototype.aggregateSoldierAttack = function() {
    let totalAttack = 0
    this.Soldiers.forEach((e) => {
      totalAttack += e.attack
    })
    return totalAttack
  }

  return Kingdom;
};