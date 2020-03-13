'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Comics', [
      {
        title: "The Amazing Spiderman - New Avengers",
        author: "J. Michael S",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/535608/535608._SX360_QL80_TTD_.jpg"
      },
      {
        title: "The Invincible Ironman - Five Nighmares",
        author: "Matt Fraction",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/14689/DEC082451._SX360_QL80_TTD_.jpg"
      },
      {
        title: "Spiderman - The Vengeance of Venom",
        author: "J. Michael S",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/484100/484100._SX360_QL80_TTD_.jpg"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Comics', null, {});
  }
};
