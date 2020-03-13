const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

router.get('/coba', (req,res) => {
    res.status(200).json({
        message: "yokai"
    })
})

router.post('/register', UserController.create)

router.post('/login', UserController.login)

module.exports = router