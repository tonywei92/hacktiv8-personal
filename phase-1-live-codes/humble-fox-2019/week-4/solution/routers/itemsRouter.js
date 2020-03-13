const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

router.get('/', ItemController.index);

router.get('/add', ItemController.add)

router.post('/add', ItemController.create)

router.get('/:id', ItemController.view);

router.get('/:id/rent', ItemController.rent)

router.post('/:id/rent', ItemController.saveRent)

router.get('/:id/return', ItemController.return)

router.post('/:id/return', ItemController.saveReturn)

router.get('/:id/delete', ItemController.destroy)



module.exports = router;
