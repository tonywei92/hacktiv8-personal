const { Todo } = require('../models');
module.exports = function (req, res, next) {
    console.log(req.params)
    const { id } = req.params;
    Todo.findByPk(id)
        .then(todo => {
            if (!todo) {
                res.status(404).json({ message: `Todo with id ${id} not found` })
            }
            else {
                if (req.user.id === todo.UserId) {
                    next();
                }
                else {
                    res.status(401).json({ message: "Unauthorized" })
                }
            }
        })
        .catch(err => res.status(500).json({ message: err.message }))

}