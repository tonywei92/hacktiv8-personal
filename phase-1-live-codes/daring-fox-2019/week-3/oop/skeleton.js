

/** Driver Code */
// Buat Charater Baru
let adam = new Character("Adam", "male")
console.log(adam); 
/**
 Character {
  _id: 359625,
  name: 'Adam',
  gender: 'male',
  money: 15000,
  heroes: [] }
*/

let heroes = {
  bane: {
    name: 'bane',
    type: 'fighter',
    health: 50,
    power: 70,
    price: 6500
  },
  aldous: {
    name: 'aldous',
    type: 'fighter',
    health: 60,
    power: 100,
    price: 32000
  },
  tigreal: {
    name: 'tigreal',
    type: 'tank',
    health: 70,
    power: 50,
    price: 6000
  },
  esmeralda: {
    name: 'esmeralda',
    type: 'tank',
    health: 100,
    power: 50,
    price: 32000,
    range: 3
  },
  nana: {
    name: 'nana',
    type: 'support',
    health: 60,
    power: 60,
    price: 6000,
    range: 3
  },
  kaja: {
    name: 'kaja',
    type: 'support',
    health: 80,
    power: 70,
    price: 32000
  }
}

// Beli beberapa hero
Game.buyHero(heroes, adam, 'tigreal') // Sukses membeli hero, sisa uang mu 9000
Game.buyHero(heroes, adam, 'bane') // Sukses membeli hero, sisa uang mu 2500
Game.buyHero(heroes, adam, 'nana') //Uang mu 2500 tidak cukup untuk membeli nana seharga 6000

//Cek setelah beli akhir
console.log(adam); 
/**
Character {
  _id: 359625,
  name: 'Adam',
  gender: 'male',
  money: 2500,
  heroes: 
   [ Tank {
       _id: 989782,
       name: 'tigreal',
       type: 'tank',
       health: 70,
       power: 50,
       range: 1,
       price: 6000,
       tankPoint: 0 },
     Fighter {
       _id: 399139,
       name: 'bane',
       type: 'fighter',
       health: 50,
       power: 70,
       range: 1,
       price: 6500,
       killingPoint: 0 } ] }
*/

// hero tigreal menang game tambahkan 3 tank point, cek perkembangan hero

Game.win(adam, 0)
Game.win(adam, 0)
Game.win(adam, 1)
console.log(adam)
/**
Character {
  _id: 359625,
  name: 'Adam',
  gender: 'male',
  money: 8500,
  heroes: 
   [ Tank {
       _id: 989782,
       name: 'tigreal',
       type: 'tank',
       health: 70,
       power: 50,
       range: 1,
       price: 6000,
       tankPoint: 6 },
     Fighter {
       _id: 399139,
       name: 'bane',
       type: 'fighter',
       health: 50,
       power: 70,
       range: 1,
       price: 6500,
       killingPoint: 3 } ] }
*/

