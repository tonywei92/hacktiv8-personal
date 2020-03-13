const { Todo } = require('../models');
const createError = require('http-errors');

module.exports = (req, res, next) => {
    const { user } = req;
    const { id } = req.params;
    Todo.findById(id, function (err, todo) {
        if (err) return next(err);
        if (!todo.user.equals(user._id)) return next(createError(403, "Forbidden"));
        next();
    })
}