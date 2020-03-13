const router = require('express').Router()
const FactoryController = require('../../controllers/FactoryController')
router.get('/', FactoryController.getAllFactories)

// router.get('/new', FactoryController.addNewFactory)
// router.post('/new', FactoryController.postNewFactory)
// router.get('/edit/:id', FactoryController.editFactoriesPage)
router.get('/detail/:id', FactoryController.getDetailFactory)
// router.post('/edit/:id', FactoryController.editFactories)
// router.get('/delete/:id', FactoryController.deleteFactory)
module.exports = router