const express = require('express')
const router = express.Router()
const Member = require('../models').Member

const MemberController = require('../controllers/MemberController')

router.get('/', function(req, res) {
  Member.count()
  .then(membersCount => res.render('landing', {membersCount}))
})



module.exports = router