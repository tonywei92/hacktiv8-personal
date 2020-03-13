'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Books', [
     {
       title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
       description: 'Design Patterns: Elements of Reusable Object-Oriented Software is a software engineering book describing software design patterns.',
       author: 'Erich Gamma',
       availableToBorrow: true,
       createdAt: new Date,
       updatedAt: new Date
     },
     {
      title: 'Eloquent JavaScript',
      description: 'This is a book about JavaScript, programming, and the wonders of the digital',
      author: 'Marijn Haverbeke',
      availableToBorrow: true,
      createdAt: new Date,
      updatedAt: new Date
     },
     {
      title: 'The Pragmatic Programmer',
      description: 'The Pragmatic Programmer: From Journeyman to Master is a book about software engineering by Andrew Hunt and David Thomas, published in October 1999, first in a series of books under the label The Pragmatic Bookshelf.',
      author: 'Andy Hunt',
      availableToBorrow: true,
      createdAt: new Date,
      updatedAt: new Date
     },
   ]);
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
