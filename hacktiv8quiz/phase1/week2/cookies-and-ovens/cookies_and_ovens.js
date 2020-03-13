"use strict";

class Cookie {
  cook() {
    this.cookingTime += 5;
  }
  printStatus(status) {
    return `Kue ${this.name} menit ke ${this.durationMinute} : hangus `;
  }
}

class PeanutCookie extends Cookie {
  cookingTime = 0;
  constructor() {
    super();
    this.name = "peaunut cookie";
    this.durationMinute = 30;
  }

  getStatus() {
    if (this.cookingTime > this.durationMinute) {
      return this.printStatus("hangus");
    }
    if (this.cookingTime >= this.durationMinute) {
      return this.printStatus("matang");
    }
    if (this.cookingTime >= 25) {
      return this.printStatus("hampir matang");
    }
    if (this.cookingTime >= 0) {
      return this.printStatus("mentah");
    }
  }
}

class ChocolateCookie extends Cookie {
  constructor() {
    super();
    this.name = "chocolate cookie";
    this.durationMinute = 20;
  }
  getStatus() {
    if (this.cookingTime > this.durationMinute) {
      return this.printStatus("hangus");
    }
    if (this.cookingTime >= this.durationMinute) {
      return this.printStatus("matang");
    }
    if (this.cookingTime >= 25) {
      return this.printStatus("hampir matang");
    }
    if (this.cookingTime >= 0) {
      return this.printStatus("mentah");
    }
  }
}

class CheeseCookie extends Cookie {
  constructor() {
    super();
    this.name = "cheese cookie";
    this.durationMinute = 35;
  }
  getStatus() {
    if (this.cookingTime > this.durationMinute) {
      return this.printStatus("hangus");
    }
    if (this.cookingTime >= this.durationMinute) {
      return this.printStatus("matang");
    }
    if (this.cookingTime >= 25) {
      return this.printStatus("hampir matang");
    }
    if (this.cookingTime >= 0) {
      return this.printStatus("mentah");
    }
  }
}

let peanutCookie = new PeanutCookie();
for (let i = 0; i < 10; i++) {
  peanutCookie.cook();
  console.log(peanutCookie.getStatus());
}
