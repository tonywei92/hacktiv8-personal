const router = require('express').Router()
const { Kingdom, District, Soldier } = require('../../models')
const sequelize = require('sequelize')
router.get('/', (req, res) => {
  let order = []
  if (req.query.orderBy) {
    if (req.query.orderBy === 'attack') {
      order.push([
        sequelize.fn('Sum', sequelize.col('Soldier.attack')), 'DESC'
      ])
    } else if (req.query.orderBy === 'total') {
      order.push([
        sequelize.fn('COUNT', sequelize.col('Soldier.KingdomId')), 'DESC'
      ])
    }
  }
  Soldier.findAll({
    attributes: ['KingdomId', [sequelize.fn('SUM', sequelize.col('Soldier.attack')), 'totalAttack'], [sequelize.fn('COUNT', sequelize.col('Soldier.KingdomId')), 'totalSoldier']],
    include: [{
      model: Kingdom,
    }],
    group:['Soldier.KingdomId', 'Kingdom.id'],
    order
  })
  .then((kingdoms) => {
    res.render('pages/soldier.ejs', {
      kingdoms,
    })
  })
  .catch((err) => {
    res.redirect(`/kingdoms?errMsg=${err}`)
  })
})

router.post('/:kingdomId/', (req, res) => {
  let kingdomId = req.params.kingdomId
  Soldier.create({
      name: req.body.name,
      attack: +req.body.attack,
      KingdomId: kingdomId
    })
    .then((newSoldier) => {
      res.redirect(`/kingdoms/${kingdomId}?successMsg=success add soldier with name ${newSoldier.name}`)
    })
    .catch((err) => {
      res.redirect(`/kingdoms/${kingdomId}?errMsg=${err}`)
    })

})



module.exports = router