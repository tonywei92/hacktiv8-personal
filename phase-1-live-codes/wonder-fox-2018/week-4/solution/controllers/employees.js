const { Employee } = require('../models/');
const formatDate = require('../helpers/formatDate');

module.exports = {
  index: async function (req, res) {
    const params = {
      order: [['id', 'DESC']]
    };
    try {
      const employees = await Employee.findAll(params);
      res.render('employees/index', { employees, formatDate });
    } catch (error) {
      res.send(error);
    }
  },
  add: function (req, res) {
    const oldInputs = {};
    res.render('employees/add', { oldInputs });
  },
  save: async function (req, res) {
    const { firstName, lastName, email } = req.body;
    const newEmployee = { firstName, lastName, email };
    try {
      await Employee.create(newEmployee);
      res.redirect('/employees');
    } catch ({ errors }) {
      const oldInputs = { firstName, lastName, email };
      res.render('employees/add', { errors, oldInputs });
    }
  },
  edit: async function (req, res) {
    const { id } = req.params;
    const oldInputs = {};
    try {
      const employee = await Employee.findById(id);
      if (employee) {
        res.render('employees/edit', { employee, oldInputs });
      } else {
        res.render('404');
      }
    } catch (error) {
      res.send(error)
    }
  },
  update: async function (req, res) {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const params = { where: { id } };
    const newEmployee = { id, firstName, lastName, email };
    try {
      const employee = await Employee.findById(id);
      if (employee) {
        try {
          await Employee.update(newEmployee, params);
          res.redirect('/employees');
        } catch ({ errors }) {
          const oldInputs = { firstName, lastName, email };
          res.render('employees/edit', { employee, errors, oldInputs });
        }
      } else {
        res.render('404');
      }
    } catch (error) {
      res.send(error)
    }
  },
  delete: async function (req, res) {
    try {
      const { id } = req.params;
      const employee = await Employee.findById(id);
      if (employee) {
        const params = { where: { id } };
        await Employee.destroy(params);
        res.redirect('/employees');
      } else {
        res.render('404');
      }
    } catch (error) {
      res.send(error);
    }
  }
};
