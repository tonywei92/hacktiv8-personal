const Manga = require('../models/manga')
const mangaApi = require('../helpers/axios')
const axios = require('axios')

class MangaController {
    static create(req, res, next) {
        axios({
            method: "GET",
            url: "https://humblemanga.herokuapp.com/mangas/" + req.params.id + "?access_token=eyJhbGciOiJIUzI1NiJ9.d2lrYW55YWE.wly-px2JV8_G1IJSM-gSVAnlqTxB7DOwZ3bnDh3Bo1M"
        })
            .then(response => {
                if(response.data) {
                    delete response.data._id
                    return Manga.create({...response.data, ownerId: req.decode.id})
                } else {
                    next({
                        status: 404,
                        message: 'manga not found'
                    })
                }
            })
            .then(manga => {
                res.status(201).json({
                    message: "success add to collection",
                    manga
                })
            })
            .catch(err => next(err))
    }

    static findCollection(req, res, next) {
        Manga.find({
            ownerId: req.decode.id
        })
        .then(mangas => {
            res.status(200).json(mangas)
        })
        .catch(err => {
            next(err)
        })
    }

    static delete(req, res, next) {
        Manga.deleteOne({
            _id: req.params.id
        })
        .then(_ => {
            res.status(200).json({
                message: "Delete from collection success"
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = MangaController