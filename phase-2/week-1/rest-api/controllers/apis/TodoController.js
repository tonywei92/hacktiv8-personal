"use strict";

const { Todo } = require('../../models');
var createError = require('http-errors')

class TodoController {
    static index(req, res, next) {
        const { user } = req;
        Todo.findAll({ where: { UserId: user.id } })
            .then(todos => res.json(todos))
            .catch(err => res.status(500).json({ message: err.message }))
    }

    static show(req, res, next) {
        const { id } = req.params;
        Todo.findByPk(id)
            .then(todo => {
                if (!todo) {
                    throw createError(404, `Todo ${id} not found`)
                }
                else {
                    res.json(todo);
                }
            })
            .catch(next)
    }

    static create(req, res, next) {
        const { title, description } = req.body
        Todo.create({ title, description, UserId: req.user.id })
            .then((todo) => res.status(201).json(todo))
            .catch(next)
    }

    static put(req, res, next) {
        const { id } = req.params;
        Todo.findByPk(id)
            .then(todo => {
                if (!todo) {
                    throw createError(404, `Todo ${id} not found`)
                }
                else {
                    for (let key in todo.toJSON()) {
                        todo[key] = null;
                        if (req.body.hasOwnProperty(key)) {
                            todo[key] = req.body[key]
                        }
                    }
                    todo.UserId = req.user.id;
                    return todo.save()
                        .then(() => res.json(todo))
                }
            })
            .catch(next)

    }

    static patch(req, res, next) {
        const { id } = req.params;
        Todo.findByPk(id)
            .then(todo => {
                if (!todo) {
                    throw createError(404, `Todo ${id} not found`)
                }
                else {
                    for (let key in Todo.fillable) {
                        todo[key] = req.body[key];
                    }
                    return todo.save()
                        .then(() => res.json(todo));
                }
            })
            .catch(next);
    }

    static destroy(req, res, next) {
        const { id } = req.params;
        Todo.findByPk(id)
            .then(todo => {
                if (!todo) {
                    throw createError(404, `Todo ${id} not found`)
                }
                else {
                    return todo.destroy()
                        .then(() => res.send({ message: `Todo with id ${id} deleted successfully` }))
                }
            })
            .catch(next)
    }
}

module.exports = TodoController;