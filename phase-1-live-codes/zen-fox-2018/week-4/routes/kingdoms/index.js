const router = require('express').Router()
const getDistrictName = require('../../helpers/getDistrictName')
const cardBorder = require('../../helpers/cardBorder')
const { Kingdom, District, Soldier } = require('../../models')
const sequelize = require('sequelize')
router.use((req, res, next) => {
  res.locals.getDistrictName = getDistrictName
  res.locals.cardBorder = cardBorder
  next()
})

router.get('/', (req, res) => {
  let kingdoms = []
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
  // Soldier.findAll({
  //     attributes: ['KingdomId', [sequelize.fn('SUM', sequelize.col('Soldier.attack')), 'totalAttack'], [sequelize.fn('COUNT', sequelize.col('Soldier.KingdomId')), 'totalSoldier']],
  //     include: [{
  //       model: Kingdom,
  //     }],
  //     group:['Soldier.KingdomId', 'Kingdom.id'],
  //     order
  //   })
    Kingdom.findAll({
      include: [{
        model: Soldier
      }, {
        model: District
      }]
    })
    .then((kingdoms) => {
      res.render('pages/kingdom.ejs', {
        kingdoms,
      })
    })
    .catch((err) => {
      res.redirect(`/kingdoms?errMsg=${err}`)
    })

})

router.get('/:kingdomId', (req, res) => {
  let kingdom = null
  Kingdom
    .findByPk(req.params.kingdomId, {
      include: [ District, Soldier ]
    })
    .then((kingdomData) => {
      kingdomData.getTotalSoldiers()
      kingdom = kingdomData
      return District.findAll()
    })
    .then((districts) => {
      res.render('./pages/detailKingdom.ejs', {
        data: kingdom,
        districts,
        errMsg: req.query.errMsg || null,
        successMsg: req.query.successMsg || null
      })
    })
    .catch((err) => {
      res.redirect(`/kingdoms/${kingdomId}?errMsg=${err}`)
    })
})

router.post('/:kingdomId', (req, res) => {
  const kingdomId = req.params.kingdomId
  let kingdom = null
  console.log(req.body)
  Kingdom
    .findByPk(kingdomId, {
      include: [{
        model: Soldier
      }]
    })
    .then((kingdomData) => {
      kingdom = kingdomData
      return Kingdom.checkDistrict(req.body.districtId)
    })
    .then((foundKingdom) => {
      let totalAttackKingdom = kingdom.aggregateSoldierAttack() // Promise ?
      if (foundKingdom) {
        let totalAttackEnemyKingdom = foundKingdom.aggregateSoldierAttack() // Promise
        if (totalAttackKingdom > totalAttackEnemyKingdom ) {
          return foundKingdom.update({
            DistrictId: null
          })
        } else {
          throw "failed to get district number " + req.body.districtId
        }
      }     
    })
    .then(() => {
      return kingdom.update({
        DistrictId: req.body.districtId
      })
    })
    .then(() => {
      res.redirect(`/kingdoms/${kingdomId}?successMsg=success get district number ${req.body.districtId}`)
    })
    .catch((err) => {
      res.redirect(`/kingdoms/${kingdomId}?errMsg=${err}`)
    })
})


module.exports = router