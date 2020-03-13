var express = require('express');
var router = express.Router();
var models = require('../models')

router.get('/', function(req, res) {
  models.Menu.findAll({
    include: [ models.Restaurant ]
  })
  .then(function(menus) {
    models.Restaurant.findAll()
    .then(function(restaurants) {
      res.render('menu', {data: menus, restaurants: restaurants, err: null})
    })
  })
})

router.post('/', function(req,res) {
  models.Menu.create({
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    RestaurantId: req.body.RestaurantId
  })
  .then(function (){
    res.redirect('/menus')
  })
  .catch(function(err) {
    models.Menu.findAll({
      include: [ models.Restaurant ]
    })
    .then(function(menus) {
      models.Restaurant.findAll()
      .then(function(restaurants) {
        res.render('menu', {data: menus, restaurants: restaurants, err: err.message})
      })
    })
  })
})

router.get('/:id/edit', function(req,res) {
  models.Menu.findById(req.params.id)
  .then(function(data){
    models.Restaurant.findAll()
    .then(function(restaurants) {
      res.render('menuEdit', {data:data, restaurants: restaurants, errs:''})
    })
  })
})

router.post('/:id/edit', function(req,res) {
  models.Menu.update({
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    RestaurantId: req.body.RestaurantId
  },{
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.redirect('/menus')
  })
  .catch(function(err) {
    console.log(err)
    // model.Student.findById(req.params.id)
    // .then(function (rows) {
    //   res.render('studentEdit', {data:rows, errs:err})
    // })
  })
})

router.get('/:id/delete', function(req,res) {
  models.Menu.destroy({
    where: {
      id: parseInt(req.params.id)
    }
  })
  .then(function() {
    res.redirect('/menus');
  })
});

module.exports = router
