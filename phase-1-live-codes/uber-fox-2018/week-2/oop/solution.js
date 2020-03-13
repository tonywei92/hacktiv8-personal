class Hero {
  constructor(name, type, damage, strength, agility, intelegence) {
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.strength = strength;
    this.agility = agility;
    this.intelegence = intelegence;
    this.health = 200;
    this.mana = 75;
    this.money = 500;
    this.items = [];
  }

  buyItem(item) {
    if (this.money >= item.price) {
      this.items.push(item.name);
      this.money -= item.price;
      if (item.bonus !== undefined) {
        for (let bonus in item.bonus) {
          if (bonus === 'strength') {
            this.strength += item.bonus[bonus];
          } else if (bonus === 'agility') {
            this.agility += item.bonus[bonus];
          } else if (bonus === 'intelegence') {
            this.intelegence += item.bonus[bonus];
          }
        }
      }
    } else {
      console.log(`Sorry your balance is not sufficient to buy this item`);
    }
  }

  attack(hero) {
    console.log("================");
    if (this.health <= 0) {
      console.log(`YOU ${this.name} ALREADY DIED!! YOU CAN'T ATTACK`);
      return;
    }

    if (hero.health <= 0) {
      console.log(`${hero.name} already died`)
    } else {
      hero.health = hero.health-(this.damage+this.strength) < 0 ? 0: hero.health-(this.damage+this.strength);

      console.log(`${this.name} attack ${hero.name} with damage ${this.damage+this.strength}`);
      console.log(`That hero's current health is ${hero.health}`);

      if (hero.items.indexOf('Healing Salve') !== -1 ) {
        hero.health += 400;
        console.log(`${hero.name} healing his/her(self) using Healing Salve`);
        console.log(`Current health is ${hero.health}`);
        hero.items.splice(hero.items.indexOf('Healing Salve'), 1)
      }

      if (hero.health <= 0) {
        this.money += 1000;
        console.log(`you killed ${hero.name}`);
      }
    }

  }
}

class Axe extends Hero {
  constructor() {
    super('Mogul Khan The Axe', 'strength', 50, 100, 20, 30);
    this.health = this.health + (25 * 22.5);
    this.mana = this.mana + 10;
  }
}


class Earthshaker extends Hero {
  constructor() {
    super('Raigor Stonehoof The Earthshaker', 'strength', 55, 150, 20, 35);
    this.health = this.health + (25 * 22.5);
    this.mana = this.mana + 10;
  }
}

class Invoker extends Hero {
  constructor() {
    super('Invoker', 'Intelegence');
    this.health = this.health + (18 * 22.5);
    this.mana = this.mana + 15;
  }
}


class ShadowFiend extends Hero {
  constructor() {
    super('Nevermore, the Shadow Fiend', 'Agility');
    this.health = this.health + (20 * 22.5);
    this.mana = this.mana + 20;
  }
}


class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class IronBranch extends Item {
  constructor() {
    super('Iron Branch', 50);
    this.bonus = {strength: 1, agility: 1, intelegence: 1};
  }
}

class HealingSalve extends Item {
  constructor() {
    super('Healing Salve', 110);
  }
}

class GauntletsOfStrength extends Item {
  constructor() {
    super('Gauntlets of Strength', 135);
    this.bonus = {strength: 3}
  }
}

class Shop {
  static buyItem(hero, itemName) {
    let item = null;
    if (itemName === 'Iron Branch') {
      item = new IronBranch();
    } else if (itemName === 'Gauntlets Of Strength'){
      item = new GauntletsOfStrength();
    } else if (itemName === 'Healing Salve') {
      item = new HealingSalve();
    } else {
      console.log('Item not found!');
      return;
    }
    hero.buyItem(item);
  }
}

let axe = new Axe();
Shop.buyItem(axe, 'Iron Branch');
Shop.buyItem(axe, 'Healing Salve');
console.log(axe);


let earthshaker = new Earthshaker();
Shop.buyItem(earthshaker, 'GauntletsOfStrength');
console.log(earthshaker);

earthshaker.attack(axe);
earthshaker.attack(axe);
earthshaker.attack(axe);
axe.attack(earthshaker);
axe.attack(earthshaker)
earthshaker.attack(axe);
earthshaker.attack(axe);
earthshaker.attack(axe);
// console.log(axe);
