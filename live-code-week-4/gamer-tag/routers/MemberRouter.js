const express = require('express')
const router = express.Router()

const MemberController = require('../controllers/MemberController')

router.get('/', MemberController.all)

router.get('/raw/members', MemberController.rawMembers)
router.get('/raw/tags', MemberController.rawTags)

router.get('/add', MemberController.addPage)
router.post('/add', MemberController.add)

router.get('/:id', MemberController.detail)
router.post('/:id', MemberController.addTag)
router.get('/:id/addexp', MemberController.addexp)
router.get('/:id/delete', MemberController.delete)
router.get('/:id/upgradeMembership', MemberController.upgrade)

router.get('/?gold=1', MemberController.allGold)


module.exports = router
