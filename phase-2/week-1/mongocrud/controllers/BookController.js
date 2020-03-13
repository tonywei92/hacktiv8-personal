const { ObjectID } = require('mongodb');

class BookController {
    static index(req, res, next) {
        const { db } = req;
        db.collection('books').find({}).toArray(function (err, books) {
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
        const collection = req.db.collection('books')
        collection.insertOne({ isbn, title, author, category, stock }, function (err, result) {
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
        const collection = req.db.collection('books')
        collection.updateOne({ _id: new ObjectID(id) }, { $set: { isbn, title, author, category, stock } }, function (err, result) {
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
        const collection = req.db.collection('books')
        collection.deleteOne({ _id: new ObjectID(id) }, function (err, result) {
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