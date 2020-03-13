const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/checklogin')

router.use(checkLogin)

router.get('/', (req, res) => {
    res.send('ini halaman student, yang lagi login: ' + req.session.user.name)
})

router.get('/add', (req, res) => {
    res.send('tambah student')
})

module.exports = router;