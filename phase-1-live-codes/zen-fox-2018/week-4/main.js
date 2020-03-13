const { District, Soldier, Kingdom } = require('./models')
const sequelize = require('sequelize')

Soldier.findAll({
  attributes: ['KingdomId', [sequelize.fn('SUM', sequelize.col('Soldier.attack')), 'totalAttack'], [sequelize.fn('COUNT', sequelize.col('Soldier.KingdomId')), 'totalSoldier']],
  include: [{
    model: Kingdom,
  }],
  group:['Soldier.KingdomId', 'Kingdom.id'],
}).then((kingdoms) => {
  kingdoms.forEach((e) => console.log(e.dataValues))
})