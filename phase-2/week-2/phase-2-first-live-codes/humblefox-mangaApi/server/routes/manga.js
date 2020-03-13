const express = require('express')
const router = express.Router()
const mangaApi = require('../helpers/axios')
const axios = require('axios')
const mangaController = require('../controllers/mangaController')
const { authentication, authorization } = require('../middlewares/auth')

router.get('/', (req, res, next) => {
    console.log("PAK BOS SINI")
    axios({
        method:"GET",
        url: "https://humblemanga.herokuapp.com/mangas?access_token=eyJhbGciOiJIUzI1NiJ9.d2lrYW55YWE.wly-px2JV8_G1IJSM-gSVAnlqTxB7DOwZ3bnDh3Bo1M"
    })
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/collection', authentication, mangaController.findCollection)

router.post('/collection/:id', authentication, mangaController.create)

router.delete('/collection/:id', authentication, authorization, mangaController.delete)



module.exports = router