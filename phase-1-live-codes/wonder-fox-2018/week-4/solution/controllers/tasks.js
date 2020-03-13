const { Task, Employee } = require('../models/');
const Sequelize = require('sequelize');

module.exports = {
  index: async function (req, res) {
    // Pagination
    let currentPage = 1;
    const limit = 4;
    let offset = 0;

    if (req.query.hasOwnProperty('page')) {
      currentPage = Number(req.query.page);

      offset = (limit * currentPage) - limit;
    }

    const params = {
      include: [ { model: Employee } ],
      order: [['id', 'DESC']],
      limit,
      offset
    };

    try {
      const tasks = await Task.findAll(params);
      const countTasks = await Task.findOne({
        attributes: [[ Sequelize.fn('COUNT', Sequelize.col('id')), 'total' ]]
      });
      const pageCount = Math.ceil(countTasks.dataValues.total / limit);

      if (currentPage > pageCount && pageCount > 0) {
        res.render('404');
      } else {
        res.render('tasks/index', { tasks, pageCount, currentPage });
      }
    } catch (error) {
      res.send(error);
    }
  },
  add: async function (req, res) {
    const params = {
      order: [['firstName', 'ASC']]
    };
    const oldInputs = {};
    try {
      const employees = await Employee.findAll(params);
      res.render('tasks/add', { employees, oldInputs });
    } catch (error) {
      res.send(error);
    }
  },
  create: async function (req, res) {
    const { title, description, points, EmployeeId } = req.body;
    const newTask = { title, description, points, EmployeeId };
    try {
      await Task.create(newTask);
      res.redirect('/tasks');
    } catch ({ errors }) {
      const oldInputs = { title, description, points, EmployeeId };
      const params = {
        order: [['firstName', 'ASC']]
      };
      const employees = await Employee.findAll(params);
      res.render('tasks/add', { errors, employees, oldInputs });
    }
  },
  markAsCompleted: async function (req, res) {
    const { id } = req.params;
    const newValues = {
      isComplete: true
    };
    const params = {
      where: { id },
      individualHooks: true
    };
    try {
      const task = await Task.findById(id);
      if (task) {
        try {
          await Task.update(newValues, params);
          res.redirect('/tasks');
        } catch (error) {
          res.send(errors);
        }
      } else {
        res.render('404');
      }

    } catch (error) {
      res.send(error);
    }
  },
  delete: async function (req, res) {
    const { id } = req.params;
    const params = {
      where: { id }
    };
    try {
      const task = await Task.findById(id);
      if (task && !task.isComplete) {
        await Task.destroy(params);
        res.redirect('/tasks');
      } else {
        res.render('404');
      }

    } catch (error) {
      res.send(error);
    }
  }
};
