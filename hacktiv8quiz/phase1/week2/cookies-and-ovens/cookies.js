// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

"use strict";
const fs = require("fs");
const path = require("path");

class Ingredient {
  constructor(options) {
    this.name = options["name"];
    this.amount = options["amount"];
  }
}

class Cookies {
  ingredients = [];
  constructor(ingredients) {
    for (let i = 0; i < ingredients.length; i++) {
      let data = ingredients[i].split(" : ");
      this.ingredients.push(new Ingredient({ name: data[1], amount: data[0] }));
    }
    this.status = "mentah";
    let sugarfree = true;
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i]["name"] === "sugar") {
        sugarfree = false;
      }
    }
    this.sugarfree = sugarfree;
  }

  bake() {
    this.status = "selesai dimasak";
  }
}

class PeanutButter extends Cookies {
  constructor(ingredients) {
    super(ingredients);
    this.name = "peanut butter";
    this.peanut_butter_count = 200;
  }
}

class ChocolateChip extends Cookies {
  constructor(ingredients) {
    super(ingredients);
    this.name = "chocolate chips";
    this.choc_chip_count = 200;
  }
}

class ChocolateCheese extends Cookies {
  constructor(ingredients) {
    super(ingredients);
    this.name = "chocolate cheese";
    this.choc_cheese_count = 200;
  }
}

class ChocolateButter extends Cookies {
  constructor(ingredients) {
    super(ingredients);
    this.name = "chocolate butter";
    this.choc_butter_count = 200;
  }
}

class ChocolateChipCrumbled extends Cookies {
  constructor(ingredients) {
    super(ingredients);
    this.name = "chocolate chip crumbled";
    this.choc_butter_count = 200;
  }
}

class PeanutButterCrumbled extends Cookies{
  constructor(ingredients) {
    super(ingredients);
    this.name = "peanut butter crumbled";
    this.choc_butter_count = 200;
  }
}

class CookieFactory {
  static create(options) {
    const batch = [];
    for (let i = 0; i < options.length; i++) {
      let datasplit = options[i].split(" = ");
      let cookies = datasplit[0];
      let ingredients = datasplit[1].split(", ");
      switch (cookies) {
        case "peanut butter":
          batch.push(new PeanutButter(ingredients));
          break;
        case "chocolate chip":
          batch.push(new ChocolateChip(ingredients));
          break;
        case "chocolate cheese":
          batch.push(new ChocolateCheese(ingredients));
          break;
        case "chocolate butter":
          batch.push(new ChocolateButter(ingredients));
          break;
      }
    }
    return batch;
  }

  static cookieRecommendation(day, batch) {
    const sugarfree_batch = [];
    for (let i = 0; i < batch.length; i++) {
      if (batch[i].sugarfree) {
        sugarfree_batch.push(batch[i]);
      }
    }
    return sugarfree_batch;
  }
}

const file = fs.readFileSync(path.join(__dirname, "./cookies.txt"), "utf8");
const options = file.split("\n");
let batch_of_cookies = CookieFactory.create(options);

console.log(JSON.stringify(batch_of_cookies, null, 2));

let sugarFreeFoods = CookieFactory.cookieRecommendation(
  "tuesday",
  batch_of_cookies
);

for (let i = 0; i < sugarFreeFoods.length; i++) {
  console.log(sugarFreeFoods[i]);
}
