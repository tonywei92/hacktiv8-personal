const express = require('express');
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.locals.my_helper = require('./helpers')
app.set('view engine', 'ejs');
const model = require('./models');

app.get('/items', function(req, res) {
  model.Item.findAll({
    include: model.Company
  })
  .then(function(items) {
    model.Company.findAll()
    .then(function(companies) {
      res.render('items', {data: items, companies: companies, err: null})
    })
  })
})

app.get('/items/:id/edit', function(req, res) {
  model.Item.findById(req.params.id)
  .then(function(item) {
    model.Company.findAll()
    .then(function(companies) {
      res.render('items_edit', {data: item, companies: companies})
    })
  })
})

app.post('/items', function(req, res) {
  model.Item.create(req.body)
  .then(function() {
    res.redirect('/items')
  })
  .catch(function(err) {
    model.Item.findAll({
      include: model.Company
    })
    .then(function(items) {
      model.Company.findAll()
      .then(function(companies) {
        res.render('items', {data: items, companies: companies, err: err.message})
      })
    })
  })
})

app.get('/items/:id/delete', function(req, res) {
  model.Item.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.redirect('/items')
  })
})

app.get('/companies', function(req, res) {
  let offset_idx = 0
  if(req.query.page) {
    console.log('--- masuk')
    offset_idx = (req.query.page-1) * 3
  }

  console.log(offset_idx)
  model.Company.findAll({ 
    offset: offset_idx, 
    limit: 3
  })
  .then(function(companies) {
    res.render('companies', {data: companies})
  })
})

app.get('/companies/:id/items', function(req, res) {
  model.Company.findById(req.params.id)
  .then(function(company) {
    company.getItems()
    .then(function(items) {
      res.render('company_items', {data: items, company:company})
    })
  })
})

app.listen(3000)
