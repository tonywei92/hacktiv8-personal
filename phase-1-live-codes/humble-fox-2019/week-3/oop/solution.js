class Gundam {
  constructor(size, price, version) {
    this.size = size
    this.version = version
    this.price = price
  }
}

class WingZero extends Gundam {
  constructor() {
    super('145cm', 12000, 'high grade')
  }
}

class Deathscythe extends Gundam {
  constructor() {
    super('235cm', 16000, 'master grade') 
  }
}

class Sandrock extends Gundam {
  constructor() {
    super('145cm', 9000, 'high grade')
  }
}

class GundamFactory {
  static produce(names, qty) {
    const output = []
    for(let i = 0; i < qty; i++) {
      if(names === 'WingZero') {
        output.push(new WingZero())
      } else if (names === 'Deathscythe') {
        output.push(new Deathscythe())
      } else if (names === 'Sandrock') {
        output.push(new Sandrock())
      }
    }
    return output
  }
}

class Warehouse {
  constructor(name, maxCapacity) {
    this.name = name
    this.maxCapacity = maxCapacity
    this.items = []
  }
  
  get capacity () {
    return this.maxCapacity - this.items.length
  }
  addStock(gundams) {
    if(gundams.length > this.capacity) {
      console.log(`Cannot add more items to this warehouse. Free space left: ${this.capacity}`)
    } else {
      this.items.push(...gundams)
      console.log(`Success add items to warehouse. Free space left: ${this.capacity}`)
    }
  }
}

let wing = GundamFactory.produce('WingZero', 15);
let scythe = GundamFactory.produce('Deathscythe', 10);
let sandrock = GundamFactory.produce('Sandrock', 10);

console.log(wing) // akan ada 15 WingZero
/*
[ Buzz { name: 'buz', price: 12000, edition: 'limited' },
  Buzz { name: 'buz', price: 12000, edition: 'limited' },
  Buzz { name: 'buz', price: 12000, edition: 'limited' },
  ...]
*/

let warehouse = new Warehouse('bandaiWarehouse', 30)

warehouse.addStock(wing)
warehouse.addStock(scythe)
warehouse.addStock(sandrock)


console.log(warehouse)
