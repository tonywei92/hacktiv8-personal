"use strict"
const model = require('../models');
const View = require('../views');

var Sequelize = require('sequelize');
const Op = Sequelize.Op

// const ViewAuthor = require('../views/author.js');
// const ViewArticle = require('../views/article.js');
// const ViewTag = require('../views/tag.js');

class Controller {
  static manageCommand(feature, command, option) {
    // FEATURE MENU
    if(feature == 'menu') {
      if(command == 'list') {

      } else if(command == 'add') {

      } else if(command == 'update') {

      } else if(command == 'delete') {

      } else if(command == 'contain_milk') {
        model.Menu.findAll({
          where: {
            ingredients: {
              [Op.iLike]: '%milk%'
            }
          },
          raw: true
        })
        .then(function(menus) {
          View.show_all_data(menus.length)
        })
      } else if(command == 'cheap_without_milk') {
        model.Menu.findAll({
          where: {
            ingredients: {
              [Op.notILike]: '%milk%'
            },
            price: {
              [Op.lte]: 30000
            }
          },
          raw: true
        })
        .then(function(menus) {
          View.show_all_data(menus)
        })
      } else if(command == 'top_2_expensive') {
        model.Menu.findAll({
          order: [['price', 'DESC']],
          limit: 2,
          raw: true
        })
        .then(function(menus) {
          View.show_all_data(menus)
        })
      }
    }


    // FEATURE STORE
    if(feature == 'store') {
      if(command == 'list') {

      } else if(command == 'add') {

      } else if(command == 'update') {

      } else if(command == 'delete') {

      }
    }
  }

  static updateSplitterFormat(option) {
    option = option.split(',').map(a => a.split(':'));
    return option
  }
}

module.exports = Controller;
