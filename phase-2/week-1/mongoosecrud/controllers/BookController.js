const { Book } = require('../models');

class BookController {
    static findByKeyword(req, res, next) {
        const { s } = req.query;
        Book.find().or([{ "title": new RegExp(s, 'i') }, { "author": new RegExp(s, 'i') }])
            .then(books => {
                res.json(books)
            })
            .catch(next)
    }

    static index(req, res, next) {
        Book.find({}, function (err, books) {
            if (err) {
                next(err)
            }
            else {
                res.json(books)
            }
        })
    }

    static create(req, res, next) {
        const { isbn, title, author, category, stock } = req.body;
        Book.create({ isbn, title, author, category, stock }, function (err, result) {
            if (err) {
                next(err)
            }
            else {
                res.json(result)
            }
        })
    }

    static update(req, res, next) {
        const { id } = req.params;
        const { isbn, title, author, category, stock } = req.body;
        Book.updateOne({ _id: id }, { $set: { isbn, title, author, category, stock } }, function (err, result) {
            if (err) {
                next(err)
            }
            else {
                res.json(result)
            }
        });
    }

    static destroy(req, res, next) {
        const { id } = req.params;
        Book.deleteOne({ _id: id }, function (err, result) {
            if (err) {
                next(err)
            }
            else {
                res.json(result)
            }
        });
    }
}

module.exports = BookController;