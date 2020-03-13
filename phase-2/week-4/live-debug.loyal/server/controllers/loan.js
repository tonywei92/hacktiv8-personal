const Loan = require('../models/Loan');
class LoanController {
  static create(req, res, next) {
    const { member, books } = req.body;
    Loan.create({ member, books })
      .then(function(newLoan) {
        res.status(201).json(newLoan);
      })
      .catch(next);
  }

  static find(req, res, next) {
    Loan.find({})
      .then(function(loans) {
        res.json(loans);
      })
      .catch(next);
  }

  static returnALoan(req, res, next) {
    const { id } = req.params;
    Loan.findOne({ _id: id })
      .then(function(loan) {
        if (!loan) {
          next({ code: 404, resource: 'Loan' });
        } else {
          loan.date_returned = new Date();
          loan.save().then(function(err) {
            res.json({
              message: 'Successfully returned',
              date_returned: loan.date_returned,
            });
          });
        }
      })
      .catch(function(err) {
        if (err.name === 'CastError') next({ code: 404, resource: 'Loan' });
        else next(err)
      });
  }
}

module.exports = LoanController;
