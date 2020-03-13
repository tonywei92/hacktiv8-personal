class Robot {
  constructor(name, price, components) {
    this.components = this.getComponents(components)
    this.name = name
    this.price = price 
  }

  getComponents(components) {
    let componentObj = {}
    for(let i = 0; i < components.length; i++) {
      let componentName = ""
      if(components[i].resistance) {
        componentName = "resistor"
      } else if(components[i].capacitance) {
        componentName = "capacitor"
      } else if(components[i].inductance) {
        componentName = "inductor"
      }
      if(!componentObj[componentName]) {
        componentObj[componentName] = []
      }
      componentObj[componentName].push(components[i])
    }
    return componentObj
  }

  showInfo() {
    let totalResitance = 0
    let totalInductance = 0
    let totalCapacitance = 0
    for(const key in this.components) {
      for(let i = 0; i < this.components[key].length; i++) {
        totalResitance += this.components[key][i].valueResitance || 0
        totalInductance += this.components[key][i].valueInductance || 0
        totalCapacitance += this.components[key][i].valueCapacitance || 0
      }
    }
    console.log(`
Name: ${this.name}
Price: ${this.price}
Resistance: ${totalResitance} Ohm
Inducantce: ${totalInductance} Henry
Capacitance: ${totalCapacitance} Farrad
    `)
  }
}

class RobotFactory {
  static buildRobot(name, basePrice, components) {
    let totalRobotPrice = basePrice + components.reduce((prev, curr) => prev + curr.price, 0)
    return new Robot(name, totalRobotPrice, components)
  }

  static createElectronicComponents(listComponents) {
    let components = []
    for(const key in listComponents) {
      for(let i = 0; i < listComponents[key].quantity; i++) {
        let newComp = null
        if(key === "resistor") {
          newComp = new Resistor(listComponents[key].price, listComponents[key].resistance)
        } else if(key === "capacitor") {
          newComp = new Capacitor(listComponents[key].price, listComponents[key].capacitance)
        } else if(key === "inductor") {
          newComp = new Inductor(listComponents[key].price, listComponents[key].inductance)
        }
        components.push(newComp)
      }
    }
    return components
  }
}

class ElectronicComponent {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class Resistor extends ElectronicComponent {
  constructor(price, resistance) {
    super("resistor", price)
    this.resistance = resistance + " Ohm"
  }

  get valueResitance() {
    return +this.resistance.split(" ")[0]
  }

}

class Capacitor extends ElectronicComponent {
  constructor(price, capacitance) {
    super("capacitor", price)
    this.capacitance = capacitance + " Farrad"
  }

  get valueCapacitance() {
    return +this.capacitance.split(" ")[0]
  }
}

class Inductor extends ElectronicComponent {
  constructor(price, inductance) {
    super("inductor", price)
    this.inductance = inductance + " Henry"
  }

  get valueInductance() {
    return +this.inductance.split(" ")[0]
  }
}

const components  = RobotFactory.createElectronicComponents({
  resistor: {
    quantity: 2,
    price: 1000,
    resistance: 100
  },
  capacitor: {
    quantity: 2,
    price: 500,
    capacitance: 50
  },
  inductor: {
    quantity: 2,
    price: 1000,
    inductance: 100
  }
})

console.log(components)
const robotTayo = RobotFactory.buildRobot("Robot Tayo", 10000, components) 
robotTayo.showInfo()
console.log(robotTayo)