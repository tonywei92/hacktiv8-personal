"use strict";
class Animal {
  num_legs = 0;
  is_warm_blooded = 0;

  constructor(num_legs = 2, is_warm_blooded = false) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
    this.superpower = new SuperPower();
  }
}

class SuperPower {
  use_laser_vision() {}
  be_invisible() {}
}

class Frog extends Animal {}

class Bat extends Animal {}

class Chimpanzee extends Animal {}

class Fox extends Animal {}

class Chicken extends Animal {}

const frog = new Frog();

frog.num_legs = 2;
frog.superpower.use_laser_vision();
