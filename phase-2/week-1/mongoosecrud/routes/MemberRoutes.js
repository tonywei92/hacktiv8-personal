const router = require('express').Router();
const MemberController = require('../controllers/MemberController');
router.get('/', MemberController.index);
router.post('/', MemberController.create);
router.put('/:id', MemberController.update);
router.delete('/:id', MemberController.destroy);
module.exports = router;