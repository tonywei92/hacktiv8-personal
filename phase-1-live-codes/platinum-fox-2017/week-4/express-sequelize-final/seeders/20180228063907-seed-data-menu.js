'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      name: 'Beef Teriyaki',
      menu_type: 'food',
      rating: 7,
      price: 45000,
      RestaurantId: 1
    },{
      name: 'Grilled Chicken',
      menu_type: 'food',
      rating: 8.5,
      price: 40000,
      RestaurantId: 1
    },{
      name: 'Beef Teriyaki',
      menu_type: 'food',
      rating: 7,
      price: 45000,
      RestaurantId: 1
    },{
      name: 'Fried Chicken',
      menu_type: 'food',
      rating: 9,
      price: 25000,
      RestaurantId: 2
    },{
      name: 'Coca Cola',
      menu_type: 'drink',
      rating: 10,
      price: 15000,
      RestaurantId: 2
    },{
      name: 'Beef Yakiniku',
      menu_type: 'food',
      rating: 7.4,
      price: 47000,
      RestaurantId: 3
    },{
      name: 'Ocha Tea',
      menu_type: 'drink',
      rating: 5,
      price: 5000,
      RestaurantId: 3
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
