class ElectronicFactory {

  static produceElectronic(items) {
    let electronics = []
    for (const type in items) {
      for (let i = 0; i < items[type].quantity; i++) {
        let item = items[type]
        if (type === "Resistor") {
          electronics.push(new Resistor(item.price, item.resistance))
        } else if (type === "Inductor") {
          electronics.push(new Inductor(item.price, item.inductance))
        } else if (type === "Capacitor") {
          electronics.push(new Capacitor(item.price, item.capacitance))
        }
      }
    }
    return electronics
  }

  static buildRobot(name, basePrice, components) {
    return new Robot(name, basePrice, components)
  }
}

class Robot {
  constructor(name, basePrice, components) {
    this.name = name
    this.price = basePrice
    this.getComponentPrice(components)
  }

  getComponentPrice(components) {
    components.forEach((component) => {
      this.price += component.price
    })
  }
}

class Electronic {
  constructor(type, price) {
    this.type = type
    this.price = price
  }

}

class Resistor extends Electronic {
  constructor(price, resistance) {
    super("resistor", price)
    this.resistance = resistance + ' Ohm'
  }
}

class Capacitor extends Electronic {
  constructor(price, capacitance) {
    super("capacitor", price)
    this.capacitance = capacitance + ' Farrad'
  }
}

class Inductor extends Electronic {
  constructor(price, inductance) {
    super("inductor", price)
    this.inductance = inductance + ' Henry'
  }
}

const input = {
  "Resistor": {
    quantity: 2,
    price: 2000,
    resistance: 100
  },
  "Inductor": {
    quantity: 3,
    price: 3000,
    inductance: 10
  },
  "Capacitor": {
    quantity: 5,
    price: 2000,
    capacitance: 4
  }
}
const components = ElectronicFactory.produceElectronic(input)
console.log(components)
const robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)
