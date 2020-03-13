const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Loan, Book } = require('../models');
const formatDate = require('../helpers/formatDate');

module.exports = {

  index (req, res) {

    let loanQuery = null;
    let selectedFilterMonth = {};

    if (req.query.hasOwnProperty('fromMonth')) {

      const fromMonth = req.query.fromMonth;
      const toMonth = req.query.toMonth;

      selectedFilterMonth = { fromMonth, toMonth };

      let currentYear = new Date;
          currentYear = currentYear.getFullYear();

      let fromDate = new Date(`${currentYear}-${fromMonth}-01T00:00:00`);
          fromDate = fromDate.toISOString();

      let toDate = new Date(`${currentYear}-${toMonth}-31T00:00:00`);
          toDate = toDate.toISOString();

      const query = {
        include: [{ model: Book }],
        order: [ ['createdAt', 'DESC'] ],
        where: {
          createdAt: {
            [Op.between]: [fromDate, toDate],
          }
        }
      };

      loanQuery = Loan.findAll(query);

    } else {

      selectedFilterMonth = { fromMonth: '01', toMonth: '01' };

      const query = {
        include: [{ model: Book }],
        order: [ ['createdAt', 'DESC'] ]
      }

      loanQuery = Loan.findAll(query);

    }

    const onQuerySuccess = (data) => {
      const books = data[0];
      const loans = data[1];
      res.render('loans/index', { books, loans, formatDate, selectedFilterMonth });
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Promise
      .all([
        Book.findAll({ where: { availableToBorrow: true }, order: [ ['title', 'ASC'] ] }),
        loanQuery,
      ])
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  create (req, res) {

    const onQuerySuccess = () => {
      res.redirect('/loans');
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 2);

    const newLoan = {
      bookId: req.body.bookId,
      borrowerName: req.body.borrowerName,
      borrowerGender: req.body.borrowerGender,
      dueDate,
    };

    Loan
      .create(newLoan)
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  return (req, res) {

    const onQuerySuccess = () => {
      res.redirect('/loans');
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Loan
      .update({ returned: true }, { where: { id: req.params.id }, individualHooks: true })
      .then(onQuerySuccess)
      .catch(onQueryError);

  }

};
