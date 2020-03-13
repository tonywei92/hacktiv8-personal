"use strict";

// Release 2
class Fruit {
  // Produce a mango
  constructor(quality) {
    if (quality) {
      this.quality = quality;
    } else {
      this.quality = Math.random() >= 0.5;
    }
  }
}
class FruitTree {
  MATURE = 5;
  STOP_HEIGHT_AT = 8;
  DEAD_AT = 11;

  _harvested = [];
  _fruits = [];
  _age = 0;
  _height = 0;

  // Initialize a new MangoTree
  constructor() {}

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    if (this._age >= 11) {
      return false;
    }
    return true;
  }

  get harvested() {
    return `${this._harvested.length} (${
      this._harvested.filter(x => x.quality === true).length
    } good, ${this._harvested.filter(x => x.quality === false).length} bad)`;
  }

  // Get current states here

  // Grow the tree
  grow() {
    if (!(this._age >= this.STOP_HEIGHT_AT)) {
      this._height += this.getRandomInt(1, 2);
    }
    this._age++;

    return this;
  }

  // Produce some mangoes
  produce(fruit) {
    if (this._age >= this.MATURE) {
      const fruitsCount = this.getRandomInt(3, 10);
      const fruits = this._fruits;
      for (let i = 0; i < fruitsCount; i++) {
        let good = Math.random() >= 0.5;
        fruits.push(new fruit(good));
      }
      this._fruits = fruits;
    }

    return this;
  }

  // Get some fruits
  harvest() {
    this._harvested = this._fruits;
    this._fruits = [];
  }
}

// Release 0

class Mango extends Fruit {}

class MangoTree extends FruitTree {
  produceMangoes() {
    this.produce(Fruit);
  }
}

// Release 1
class Apple extends Fruit {}

class AppleTree extends FruitTree {
  produceApple() {
    this.produce(Apple);
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(
    `[Year ${mangoTree.age} Report] Height = ${
      mangoTree.height
    } | Fruits harvested = ${mangoTree.harvested}`
  );
} while (mangoTree.healthStatus != false);

// driver code untuk release 0
let appleTree = new AppleTree();
do {
  appleTree.grow();
  appleTree.produceApple();
  appleTree.harvest();
  console.log(
    `[Year ${appleTree.age} Report] Height = ${
      appleTree.height
    } | Fruits harvested = ${appleTree.harvested}`
  );
} while (appleTree.healthStatus != false);
