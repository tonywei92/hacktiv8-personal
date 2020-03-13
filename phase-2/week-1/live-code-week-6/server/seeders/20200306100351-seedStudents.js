'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let students = [
      { "name": "Harry Dhimas", "house": "Gryffindor" }, 
      { "name": "Cedric Dimitri", "house": "Hufflepuff", }, 
      { "name": "Tony Boot", "house": "Ravenclaw" },
      { "name": "Isro Malfoy", "house": "Slytherin" },
      { "name": "Seven Snape", "house": "Slytherin" }, 
      { "name": "Rubhius Hagrid", "house": "Ravenclaw" }, 
      { "name": "Arnold Weasley", "house": "Gryffindor" }, 
      { "name": "Adiel Dumbledore", "house": "Gryffindor" }, 
      { "name": "Stephanie Shunpike", "house": "Ravenclaw" }, 
      { "name": "Fauzan Crabbe", "house": "Slytherin" }, 
      { "name": "Fiqi Weasley", "house": "Gryffindor" },
      { "name": "Priambodovic Bagman", "house": "Ravenclaw" },
      { "name": "Naricha Malfoy", "house": "Slytherin" },
      { "name": "Semmi Macmillan", "house": "Hufflepuff" },
      { "name": "Wika Skeeter", "house": "Slytherin" },
      { "name": "Ziady Smith", "house": "Hufflepuff" },
      { "name": "Yusiuf Malfoy", "house": "Slytherin" },
      { "name": "Nadia Scamander", "house": "Hufflepuff" },
      { "name": "Alastor Armedi", "house": "Gryffindor" },
    ]

    return queryInterface.bulkInsert('Students', students, {})
 
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Students', null, {});
 
  }
};
