const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/MemberController');

router.get('/', MemberController.index)

router.get('/add', MemberController.add)

router.post('/add', MemberController.create)

router.get('/:id/edit', MemberController.edit)

router.post('/:id/edit', MemberController.update)

router.get('/:id/delete', MemberController.destroy)


module.exports = router;
