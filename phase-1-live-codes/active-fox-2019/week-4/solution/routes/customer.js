const express = require('express');
const router = express.Router();
const Model = require('../models');
const Customer = Model.Customer;
const Account = Model.Account;

router.get('/', function(req, res) {
  Customer
   .findAll({
     order: [ ['fullName', 'ASC'] ]
   })
   .then(customers => {
     res.render('customerList', { customers: customers })
   })
   .catch(err => {
     res.send(err);
   })
});

router.get('/register', function(req, res) {
  let err;

  if (req.query.err) {
    err = JSON.parse(req.query.err)
  }

  res.render('customerRegister', {bankId: req.params.id, err: err});

});

router.post('/register', function(req, res) {

  Model.Customer
   .create({
     identityNumber: req.body.identityNumber,
     fullName: req.body.fullName,
     address: req.body.address,
     gender: req.body.gender,
     BankId: req.params.id,
     birthDate: req.body.birthDate
   })
   .then(customer => {
     res.redirect(`/banks/${req.params.id}`);
   })
   .catch(err => {
     if (err.errors) {
       let errMessage = err.errors.map(e => {
         return e.message
       })

       res.redirect(`/customers/register?err=${JSON.stringify(errMessage)}`);
     } else {
       res.json(err)
     }

   })
});

router.get('/:idCustomer/editProfile', function(req, res) {

  let err;

  if (req.query.err) {
    err = JSON.parse(req.query.err)
  }

  Customer
   .findByPk(Number(req.params.idCustomer))
   .then(customer => {
     res.render('editProfile', { customer: customer, err: err });
   })
   .catch(err => {
     res.send(err);
   })
});

router.post('/:idCustomer/editProfile', function(req, res) {

  Customer
   .update({
     identityNumber: req.body.identityNumber,
     fullName: req.body.fullName,
     address: req.body.address,
     gender: req.body.gender,
     birthDate: req.body.birthDate,
     id: req.params.idCustomer
   }, {
     where: {
       id: Number(req.params.idCustomer)
     }
   })
   .then(customer => {
     res.redirect(`/customers`)
   })
   .catch(err => {
     if (err.errors) {
       let errMessage = err.errors.map(e => {
         return e.message
       })

       res.redirect(`/customers/${req.params.idCustomer}/editProfile?err=${JSON.stringify(errMessage)}`);
     } else {
       res.json(err)
     }
   })
});

router.get('/:idCustomer/accounts', function(req, res) {
  Customer
   .findByPk(
     Number(req.params.idCustomer),
     {
       include: [ { model: Model.Account } ]
     }
   )
   .then(customer => {
     res.render('accountList', { customer: customer });
   })
   .catch(err => {
     res.send(err)
   })
})

router.post('/:idCustomer/accounts', function(req, res) {
  let balance = {};

  if (req.body.balance) {
    balance = req.body.balance;
  }

  Account
   .create({
     type: req.body.type,
     CustomerId: Number(req.params.idCustomer),
     ...balance
   })
   .then(accounts => {
     res.redirect(`/customers/${req.params.idCustomer}/accounts`)
   })
   .catch(err => {
     res.send(err)
   })
})

router.get('/:idCustomer/accounts/:idAccount/transfer', function(req, res) {
  let account = null;
  Account
   .findByPk(
     Number(req.params.idAccount)
   )
   .then(acc => {
     account = acc;
     return Account
            .findAll({
              where: {
                id: {
                  [Model.Sequelize.Op.ne]: Number(req.params.idAccount)
                }
              },
              include: [ { model: Model.Customer } ],
              order: [ ['accountNumber', 'ASC'] ]
            })
   })
   .then(otherAccounts => {
     res.render('transfer', { account: account, otherAccounts: otherAccounts })
   })
   .catch(err => {
     res.send(err)
   })
})

router.post('/:idCustomer/accounts/:idAccount/transfer', function(req, res) {
  let otherAccounts = null;

  Account
   .update({
     balance: Number(req.body.balance)
   },
   {
     where: {
       id: Number(req.params.idAccount)
     },
     amount: Number(req.body.amount)
   })
   .then(account => {
     //UPDATE balance yang ditransfer
     return Account.findByPk(req.body.otherAccountId)
   })
   .then(otherAccount => {
     let balanceTarget = otherAccount.balance + Number(req.body.amount);
     return Account
            .update({
              balance: balanceTarget
            }, {
              where: {id: Number(req.body.otherAccountId)}
            })
   })
   .then(success => {
     res.redirect(`/customers/${req.params.idCustomer}/accounts`);
   })
   .catch(err => {
     res.send(err)
   })
})


module.exports = router
