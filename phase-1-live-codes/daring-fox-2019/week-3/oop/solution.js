class Account{
  constructor(name, gender){
    this._id = Account.randId() 
    this.name = name
    this.gender = gender
    this.money = 15000
    this.heroes = []
  }

  static randId(){
    let id = Math.round(Math.random()*999999);
    
    for(let i = 0; i<6-(String(id).length); i++){
      id="0"+id
    }
    return id
  }

  get id(){
    return this._id
  }
}

class Hero{
  constructor(name, type, health, power, price, range = 1){
    this._id = Account.randId()
    this.name = name
    this.type = type
    this.health = health
    this.power = power
    this.range = range
    this.price = price
  }

  get id(){
    return this._id
  }
}

class Fighter extends Hero{
  constructor(name, type, health, power, price, range){
    super(name, type, health, power, price, range)
    this.killingPoint = 0
    // this.calcPower()
  }

  calcPower(){
    this.power += (this.killingPoint * 0.4 * this.power)
  }
}

class Tank extends Hero{
  constructor(name, type, health, power, price, range){
    super(name, type, health, power, price, range)
    this.tankPoint = 0
    // this.calcPower()
  }

  calcPower(){
    this.power += (this.tankPoint*0.2*this.power)
    this.health += (this.tankPoint*0.3*this.health)
  }
}

class Support extends Hero{
  constructor(name, type, health, power, price, range){
    super(name, type, health, power, price, range)
    this.supportPoint = 0
  }

  calcPower(){
    this.power += (this.supportPoint*0.3*this.power)
    this.health += (this.supportPoint*0.2*this.health)
  }
}

class Game{
  static buyHero(player, hero){
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
    hero = heroes[hero]
    if(player.money < hero.price)
      console.log(`Uangmu ${player.money} tidak cukup untuk membeli ${hero.name} seharga ${hero.price}`);
    else{
      player.money-=hero.price
      if(hero.type === 'fighter'){
        hero = new Fighter(hero.name, 'fighter', hero.health, hero.power, hero.price, hero.range)
      }
      else if(hero.type === 'tank'){
        hero = new Tank(hero.name, 'tank', hero.health, hero.power, hero.price, hero.range)
      }
      else if(hero.type === 'support'){
        hero = new Support(hero.name, 'support', hero.health, hero.power, hero.price, hero.range)
      }
      player.heroes.push(hero)
      console.log(`Sukses membeli hero, sisa uangmu ${player.money}`)
    }
  }

  static win(player, indexHero) {
    const hero = player.heroes[indexHero]

    if (hero) {
      if (hero.type === "fighter") {
        hero.killingPoint += 12
      }
    } else {
      console.log("hero gak ada")
    }
  }
}

/** Driver Code */
// Buat Charater Baru
let adam = new Account("Adam", "male")
console.log(adam); 
/**
 Account {
  _id: 359625,
  name: 'Adam',
  gender: 'male',
  money: 15000,
  heroes: [] }
*/


// Beli beberapa hero
Game.buyHero(adam, 'tigreal') // Sukses membeli hero, sisa uang mu 9000
Game.buyHero(adam, 'bane') // Sukses membeli hero, sisa uang mu 2500
Game.buyHero(adam, 'nana') //Uang mu 2500 tidak cukup untuk membeli nana seharga 6000

//Cek setelah beli akhir
console.log(adam); 
/**
Account {
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
adam.heroes[0].levelUp()
adam.heroes[0].calcPower()
console.log(adam.heroes[0])
/**
 Tank {
  _id: 989782,
  name: 'tigreal',
  type: 'tank',
  health: 133,
  power: 80,
  range: 1,
  price: 6000,
  tankPoint: 3 }
 */

