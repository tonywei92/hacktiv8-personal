const TodoService = require('../services/TodoService');

class Todo {
    static index(req, res, next) {
        const { _id } = req.user;
        TodoService.all(_id)
            .then(todos => res.json(todos))
            .catch(next);
    }

    static show(req, res, next) {
        const { user } = req.user;
        const { id } = req.params;
        TodoService.show(user, id)
            .then(todo => res.json(todo))
            .catch(next);
    }

    static update(req, res, next) {
        const { id } = req.params;
        const { name, description, status, due_date } = req.body;
        TodoService.update(id, name, description, status, due_date)
            .then(result => res.json(result))
            .catch(next);
    }

    static create(req, res, next) {
        const { _id } = req.user;
        const { name, description, due_date } = req.body;
        TodoService.create(name, description, due_date, _id)
            .then(todo => res.status(201).json(todo))
            .catch(next);
    }

    static destroy(req, res, next) {
        const { id } = req.params;
        TodoService.destroy(id)
            .then(() => res.json({ message: "Success" }))
            .catch(next);
    }
}

module.exports = Todo;