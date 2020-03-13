const { Todo } = require('../models');
const createError = require('http-errors');

module.exports = {
    all: (userId) => {
        return new Promise((resolve, reject) => {
            Todo.find({ user: userId }, function (err, users) {
                if (err) return reject(err)
                resolve(users);
            })
        });
    },
    show: (id) => {
        return new Promise((resolve, reject) => {
            Todo.findById(id, function (err, todo) {
                if (err) return reject(err);
                if (!todo) return reject(createError(404, "Todo not found"));
                resolve(todo);
            })
        })
    },
    create: (name, description, due_date, user) => {
        return new Promise((resolve, reject) => {
            Todo.create({
                name, description, due_date, user, status: "pending"
            }, function (err, todo) {
                if (err) return reject(err);
                resolve(todo);
            });
        });
    },
    update: (id, name, description, status, due_date) => {
        return new Promise((resolve, reject) => {
            Todo.findById(id, function (err, todo) {
                if (err) return reject(err);
                if (!todo) return reject(createError(404, "Todo not found"));
                Todo.updateOne({ _id: id }, { name, description, status, due_date },
                    function (err, writeOpResult) {
                        if (err) return reject(err);
                        resolve(writeOpResult);
                    });
            })

        });
    },
    destroy: (id) => {
        return new Promise((resolve, reject) => {
            Todo.findById(id, function (err, todo) {
                if (err) return reject(err);
                if (!todo) return reject(createError(404, "Todo not found"));
                Todo.deleteOne({ _id: id }, function (err) {
                    if (err) return reject(err);
                    resolve();
                })
            })
        })
    }

}