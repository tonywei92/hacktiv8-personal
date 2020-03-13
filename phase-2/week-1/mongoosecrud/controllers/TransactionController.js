const { Transaction } = require('../models');

class TransactionController {
    static findByBookId(req, res, next) {
        const { bookid } = req.params;
        Transaction.find({ booklist: { $in: bookid } }, function (err, transactions) {
            if (err) {
                next(err);
            }
            else {
                res.json(transactions);
            }
        })
    }

    static index(req, res, next) {
        Transaction.find({}, function (err, transactions) {
            if (err) {
                next(err)
            }
            else {
                res.json(transactions)
            }
        })
    }

    static create(req, res, next) {
        const { member, out_date, due_date, booklist } = req.body;
        Transaction.create({
            member, in_date: null, out_date, due_date, fine: 0, booklist
        }, function (err, result) {
            if (err) {
                next(err)
            }
            else {
                res.json(result)
            }
        });
    }

    static update(req, res, next) {
        const { id } = req.params;
        const { in_date } = req.body;
        Transaction.updateOne({ _id: id }, { $set: { in_date } }, function (err, result) {
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
        Transaction.deleteOne({ _id: id }, function (err, result) {
            if (err) {
                next(err)
            }
            else {
                res.json(result)
            }
        });
    }
}

module.exports = TransactionController;