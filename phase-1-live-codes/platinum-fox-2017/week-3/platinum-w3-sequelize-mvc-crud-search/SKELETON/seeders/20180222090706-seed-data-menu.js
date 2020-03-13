'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      name: 'Caramel Frappuccino',
      price: 45000,
      ingredients: 'Ice, Milk, Coffee Frappuccino Syrup, Coffee, Whipped Cream, Vanilla Syrup, Caramel Syrup'
    },{
      name: 'Coffee Light Frappuccino',
      price: 55000,
      ingredients: 'Ice, milk, Light Frappuccino Syrup'
    },{
      name: 'Green Tea Creme',
      price: 57000,
      ingredients: 'Ice, MiLk, Crème Frappuccino Syrup,Matcha Tea Blend'
    },{
      name: 'Lemon Bar Creme',
      price: 62000,
      ingredients: 'Ice, Lemonade Base,Milk,Caramel Sugar Topping'
    },{
      name: 'Caffe Americano',
      price: 30000,
      ingredients: 'Water, Brewed Espresso'
    },{
      name: 'Caffe Latte',
      price: 43000,
      ingredients: 'Milk, Brewed Espresso'
    },{
      name: 'Cinnamon Dolce Latte',
      price: 58000,
      ingredients: 'Cinnamon Milk, Brewed Espresso, Cinnamon Dolce Syrup'
    },{
      name: 'Espresso Macchiato',
      price: 47000,
      ingredients: 'Water, Expresso'
    },{
      name: 'Iced Vanilla Latte',
      price: 43000,
      ingredients: 'Ice, Milk, Brewed Espresso, Vanilla Syrup Chocolate Smoothie'
    },{
      name: 'Chocolate Smoothie',
      price: 37000,
      ingredients: 'Chocolate Milk, Ice, Banana, Mocha Sauce'
    },{
      name: 'Caffe Misto',
      price: 52000,
      ingredients: 'Brewed Coffee, Milk'
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
