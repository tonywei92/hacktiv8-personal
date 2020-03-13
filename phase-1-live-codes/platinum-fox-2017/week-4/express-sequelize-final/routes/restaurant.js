var express = require('express');
var router = express.Router();
var models = require('../models')

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function(req, res) {
  models.Restaurant.findAll()
  .then(function(restaurants) {
    res.render('restaurant', {data: restaurants})
  })
})

router.get('/:id/view_menu', function(req, res) {
  models.Restaurant.findById(req.params.id)
  .then(function(restaurant) {
  	models.Menu.findAll({
	  	where: {
	  		RestaurantId: req.params.id
	  	}
	  })
	  .then(function(menus) {
	    res.render('restaurant_detail', {data: menus, restaurant: restaurant})
	  })
  })
})

router.post('/:id/search', function(req, res) {

	let conditional_obj = {
		RestaurantId: req.params.id
	}

	conditional_obj[req.body.search_by] = {
		$iLike: `%${req.body.keyword}%`
	}

  models.Restaurant.findById(req.params.id)
  .then(function(restaurant) {
  	models.Menu.findAll({
	  	where: conditional_obj
	  })
	  .then(function(menus) {
	    res.render('restaurant_detail', {data: menus, restaurant: restaurant})
	  })
  })
  
})

module.exports = router
