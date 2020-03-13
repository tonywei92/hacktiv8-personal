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
      var dummy_items = [{
        id: 1,
        name: 'Shaburi',
        food_type: 'Japanesse food',
        rating: '4.5',
        location: 'pondok indah mall',
        total_employees: 20,
        c_name: 'Boga Group',
        c_phone: '0211234567',
        c_location: 'jakarta'
      },{
        id: 2,
        name: 'Kintan Buffet',
        food_type: 'Japanesse food',
        rating: '4.8',
        location: 'pondok indah mall',
        total_employees: 15,
        c_name: 'Boga Group',
        c_phone: '0211234567',
        c_location: 'jakarta'
      },{
        id: 3,
        name: 'Sushi Groove',
        food_type: 'Japanesse food',
        rating: 3.5,
        location: 'kota kasablanka',
        total_employees: 17,
        c_name: 'Ismaya Group',
        c_phone: '021654321',
        c_location: 'jakarta'
      },{
        id: 4,
        name: 'Pizza E Birra',
        food_type: 'Western food',
        rating: 4.7,
        location: 'gandaria city',
        total_employees: 13,
        c_name: 'Ismaya Group',
        c_phone: '021654321',
        c_location: 'jakarta'
      }]

      res.render('items', {data: dummy_items, companies: companies, err: null})
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
  model.Company.findAll()
  .then(function(companies) {
    let query_str = {
      name: 'name=asc',
      phone: 'phone=asc',
      address: 'address=asc'
    }
    res.render('companies', {data: companies, query_str: query_str})
  })
})

app.get('/companies/sort', function(req, res) {

  let sort_column = Object.keys( req.query )[0]
  let sort_method = req.query[sort_column]

  let query_str = {
    name: 'name=asc',
    phone: 'phone=asc',
    address: 'address=asc'
  }

  if(sort_method == 'asc') {
    query_str[sort_column] = `${sort_column}=desc`
  } else {
    query_str[sort_column] = `${sort_column}=asc`
  }

  model.Company.findAll({
    order: [
      [sort_column, sort_method]
    ]
  })
  .then(function(companies) {

    res.render('companies', {data: companies, query_str: query_str})
  })
})

app.get('/companies/:id/outlets', function(req, res) {
  // model.Company.findById(req.params.id)
  // .then(function(company) {
  //   company.getItems()
  //   .then(function(items) {
  //     res.render('company_items', {data: items, company:company})
  //   })
  // })

  var outlet_names = [{
    name: 'Shaburi'
  }, {
    name: 'Kintan Buffet'
  }]

  res.render('company_outlet', {data: outlet_names})

})

app.get('/companies/:id/outlets/:id_outlet', function(req, res) {
  var outlet_names = {
    id: 2,
    name: 'Kintan Buffet',
    food_type: 'Japanesse food',
    rating: '4.8',
    location: 'pondok indah mall',
    total_employees: 15,
    c_name: 'Boga Group',
    c_phone: '0211234567',
    c_location: 'jakarta'
  }

  res.render('company_outlet_detail', {data: outlet_names})

})

app.listen(3000)
