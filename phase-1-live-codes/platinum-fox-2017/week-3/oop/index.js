class Robot {
  constructor(name, purpose) {
    this.name = name
    this.purpose = purpose
  }
}
class WallE extends Robot{
  constructor() {
    super('Wall-E', 'worker')
  }
  work(){
    console.log('Wall-E cleans the planet');
  }
}
class BayMax extends Robot{
  constructor() {
    super('BayMax', 'medic')
  }
  heal(){
    console.log('Hi, I am BayMax, how may I help you?');
  }
}
class AutoBot extends Robot{
  constructor() {
    super('AutoBot', 'defender')
  }
  defend(){
    console.log("AutoBot, let's roll!");
  }
}

class RobotFactory {
  constructor() {

  }
  static produceRobot(robot, jumlah){
    let array = []
    for (var i = 0; i < jumlah; i++) {
      if (robot == 'wall-e') {
        array.push(new WallE())
      }else if (robot == 'baymax') {
        array.push(new BayMax())
      }else if (robot == 'autobot') {
        array.push(new AutoBot())
      }
    }
    return array;
  }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}
