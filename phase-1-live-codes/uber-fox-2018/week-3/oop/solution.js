//your code here
class Robot {
  constructor(name, purpose) {
    this.name = name;
    this.purpose = purpose;
  }
}

class WallE extends Robot{
  constructor() {
    super('Wall-E', 'worker');
  }

  work() {
    console.log(`${this.name} cleans the planet`);
  }
}

class BayMax extends Robot{
  constructor() {
    super('BayMax', 'medic');
  }

  heal() {
    console.log(`Hi, I am ${this.name}, how may I help you?`);
  }
}

class AutoBot extends Robot {
  constructor() {
    super('AutoBot', 'defender');
  }

  defend() {
    console.log(`${this.name}, let's roll!`);
  }
}

class RobotFactory {

  static produceRobot(robotName, total) {
    let result = [];

    for (var i = 0; i < total; i++) {
      if (robotName === 'wall-e') {
        result.push(new WallE());
      } else if (robotName === 'baymax') {
        result.push(new BayMax());
      } else if (robotName === 'autobot') {
        result.push(new AutoBot());
      } else {
        result.push(new Robot());
      }
    }

    return result;
  }

}

//DRIVER CODE
let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

wall_e.forEach(w => {
  w.work();
});

baymax.forEach(b => {
  b.heal();
});

autobot.forEach(a => {
  a.defend();
});

// ============output yang diharapkan:
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// AutoBot, let's roll!
// AutoBot, let's roll!
// AutoBot, let's roll!
