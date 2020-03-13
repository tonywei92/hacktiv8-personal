const router = require("express").Router()
const StudentController = require("../controllers/student")
const authentication = require('../middlewares/authentication')

router.get("/students", StudentController.find)
router.post('/register', StudentController.register)
router.post('/login', StudentController.login)
router.get('/players',authentication, StudentController.getAll)
router.post('/players',authentication, StudentController.addPLayer)
router.delete('/players/:id',authentication, StudentController.delete)

module.exports = router