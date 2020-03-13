const express = require('express');
const router = express.Router();
const Model = require('../models');
const Bank = Model.Bank;
const Customer = Model.Customer;

router.get('/', function(req, res) {
  Bank
   .findAll({
     order: [ ['bankName', 'ASC'] ]
   })
   .then(banks => {
     res.render('bankList', { banks: banks })
   })
   .catch(err => {
     res.send(err)
   })
});



router.get('/:id', function(req, res) {
  Bank
   .findByPk(
     Number(req.params.id),
     {
       include: [ { model: Model.Customer } ]
     }
   )
   .then(bank => {
     res.render('customerList', { bank: bank });
   })
   .catch(err => {
     console.log(err);
     res.send(err)
   })
});




module.exports = router
