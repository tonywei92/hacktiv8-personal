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
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'Detroit Rock City',
        description: "Rock-loving teens and aspiring musicians Hawk (Edward Furlong), Lex (Giuseppe Andrews), Trip (James DeBello) and Jam (Sam Huntington) can't wait to see their favorite band, KISS, perform at an upcoming concert. However, when Jam's pious mother (Lin Shaye) finds the tickets to the event, she incinerates them, leaving the boys desperate for a way to see the show. In their attempts to see KISS, the lads endure misunderstandings, humiliation and violence, all just to see their beloved idols.",
        rating: 6.8,
        availableToRent: true,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Fight Club',
        description: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
        rating: 8.8,
        availableToRent: true,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Bridge of Spies',
        description: "During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers' only hope is New York lawyer James Donovan (Tom Hanks), recruited by a CIA operative to negotiate his release. Donovan boards a plane to Berlin, hoping to win the young man's freedom through a prisoner exchange. If all goes well, the Russians would get Rudolf Abel (Mark Rylance), the convicted spy who Donovan defended in court.",
        rating: 7.6,
        availableToRent: true,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Apocalypse Cult',
        description: "While investigating the legend of a mysterious group of religious people living in the forest, a local news crew becomes trapped in the grasp of a doomsday cult, who are about to execute their final act of devotion and biblical punishment.",
        rating: 4.6,
        availableToRent: true,
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
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
