class Toy {
  constructor(name, price, limited) {
    this.name = name,
    this.price = price,
    this.edition = limited
  }
}

class Buzz extends Toy {
  constructor() {
    super("Buzz", 12000, "limited")
  }
}

class Woody extends Toy {
  constructor() {
    super("Woody", 11000, "limited")
  }
}

class Jessie extends Toy {
  constructor() {
    super("Jessie", 5000, "regular")
  }
}

class ToyFactory {
  static produceToy(name, total) {
    let toys = []
    for(let i = 0; i < total; i++) {
      if (name === "buzz") toys.push(new Buzz())
      else if (name === "woody") toys.push(new Woody())
      else if (name === "jessie") toys.push(new Jessie())
    }
    return toys
  }
}

class WareHouse {
  constructor(name, maxCapacity) {
    this.name = name
    this.maxCapacity = maxCapacity
    this.items = []
  }

  freeSpace() {
    return this.maxCapacity - this.items.length
  }

  addStock(input) {
    if ((this.items.length + input.length) > this.maxCapacity) {
      console.log(`${this.name} warehouse is full, free space: ${this.freeSpace()}`)
    } else {
      for (let i = 0; i < input.length; i++) {
        this.items.push(input[i])
      }
      console.log(`success save stocks in ${this.name} warehouse`)
    }
  }
}

let buzz = ToyFactory.produceToy("buzz", 15)
let woody = ToyFactory.produceToy("woody", 10)
let jessie = ToyFactory.produceToy("jessie", 10)
console.log(buzz)
// console.log(woody)
// console.log(jessie)

let warehouse = new WareHouse('toysstory', 30)
warehouse.addStock(buzz)
warehouse.addStock(woody)
warehouse.addStock(jessie)

console.log(warehouse)