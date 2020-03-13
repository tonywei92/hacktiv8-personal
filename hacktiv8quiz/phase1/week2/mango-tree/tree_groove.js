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
  constructor(name, age, height, mature, status) {
    this.name = name;
    this._age = age;
    this._height = height;
    this.MATURE = mature;
    this.status = status;
  }

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

  get mature() {
    return this._age >= this.MATURE;
  }
}

class TreeGrove {
  _trees = [];
  inputTree(name, age, height, mature, status) {
    this._trees.push(new FruitTree(name, age, height, mature, status));
  }

  nextYear() {
    for (let i = 0; i < this._trees.length; i++) {
      this._trees[i].grow();
    }
  }

  showAge() {
    for (let i = 0; i < this._trees.length; i++) {
      console.log(this._trees[i].name, this._trees[i].age);
    }
  }

  showTrees() {
    console.log(this._trees);
  }
  showMatureTrees() {
    console.log(this._trees.filter(x => x.mature));
  }
  showDeadTrees() {
    console.log(this._trees.filter(x => x.healthStatus));
  }
}

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);

// next year
grove.nextYear();

// show trees ages
grove.showAge();

// show trees
grove.showTrees();

// show trees
grove.showMatureTrees();

// show trees
grove.showDeadTrees();
