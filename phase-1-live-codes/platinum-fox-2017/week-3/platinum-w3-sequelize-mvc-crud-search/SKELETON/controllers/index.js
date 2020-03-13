"use strict"
const model = require('../models');
const View = require('../views');

class Controller {
  static manageCommand(feature, command, option) {
    // FEATURE MENU
    if(feature == 'menu') {
      if(command == 'contain_milk') {
        
      } else if(command == 'cheap_without_milk') {
        
      } else if(command == 'top_2_expensive') {
       
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
}

module.exports = Controller;
