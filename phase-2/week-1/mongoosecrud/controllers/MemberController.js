const { Member } = require('../models');
const { Error: MongooseError } = require('mongoose')

const createError = require('http-errors');

class MemberController {
    static index(req, res, next) {
        Member.find({}, function (err, members) {
            if (err) {
                next(err)
            }
            else {
                res.json(members)
            }
        })
    }

    static create(req, res, next) {
        const { name, address, zipcode, email, phone } = req.body;
        Member.create({ name, address, zipcode, email, phone }, function (err, result) {
            if (err) {
                if (err instanceof MongooseError.ValidationError || err instanceof MongooseError.ValidatorError) {
                    next(createError(400, err.message))
                }
                else {
                    next(err);
                }
            }
            else {
                res.json(result)
            }
        })
    }

    static update(req, res, next) {
        const { id } = req.params;
        const { name, address, zipcode, email, phone } = req.body;
        Member.updateOne({ _id: id }, { $set: { name, address, zipcode, email, phone } }, function (err, result) {
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
        Member.deleteOne({ _id: id }, function (err, result) {
            if (err) {
                next(err)
            }
            else {
                res.json(result)
            }
        });
    }
}

module.exports = MemberController;