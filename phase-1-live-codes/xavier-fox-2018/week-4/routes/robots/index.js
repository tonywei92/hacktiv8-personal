const router = require('express').Router()
const RobotController = require('../../controllers/RobotController')
router.post('/register/:id', RobotController.postNewRobot)
router.post('/buy/:id', RobotController.buyRobots)
router.post('/produce/:id', RobotController.updateRobots)
module.exports = router