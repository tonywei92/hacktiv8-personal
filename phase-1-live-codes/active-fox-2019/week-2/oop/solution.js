//solution's here
class VendingMachine {
  constructor() {
    this.drinks = { };
    this.money = 0
    this._pecahanUang = {
      100000: 0,
      50000: 0,
      20000: 0,
      10000: 0,
      5000: 0,
      1000: 0,
      500: 0
    };
  }


  addBeverage(list) {
    for(let drink in list) {
      for (let iteration = 0; iteration < list[drink]; iteration++) {
        if (this.drinks[drink] === undefined) {
          this.drinks[drink] = [];
        }
        this.drinks[drink].push(eval(`new ${drink}()`) )
      }
    }
  }

  set pecahanUang(uang) {
    uang = uang.split(';')
    uang.forEach(duit => {
      duit = duit.split('=')
      this._pecahanUang[duit[0]] += Number(duit[1])
    })
  }

  insertMoney(money) {
    this.money = money;
  }

  buyBeverage(beverage) {
    if (this.drinks[beverage] === undefined) {
      console.log(`Sorry, ${beverage} unavailable in this Vending Machine`);
    } else if (this.drinks[beverage].length === 0) {
      console.log(`Sorry, ${beverage} out of stock`);
    } else {
      let price = this.drinks[beverage][0].price;

      if(this.changer(price)) {
        this.drinks[beverage] = this.drinks[beverage].slice(1);
      }
    }
  }

  changer(price) {
    let pecahanUang = Object.assign({}, this.pecahanUang) //JSON.parse(JSON.stringify(this.pecahanUang));

    const keys = Object.keys(pecahanUang)
    const changes = []
    let money = this.money - price;
    for (let i = keys.length - 1; i >= 0; i--) {
      while(money >= keys[i] && pecahanUang[keys[i]] > 0) {
        changes.push(keys[i])
        pecahanUang[keys[i]] -= 1
        money -= keys[i]
      }
    }

    if (money > 0) {
      console.log(`Mohon maaf uang kembalian tidak cukup`);
      return false;
    } else {
      let objChange = {}
      changes.forEach((change) => {
        if (!objChange[change]) {
          objChange[change] = 0
        }
        objChange[change] += 1
      })

      let changeKeys = Object.keys(objChange)
      for (let i = changeKeys.length - 1; i >= 0; i--) {
        console.log(`${changeKeys[i]} ${objChange[changeKeys[i]]} lembar`)
      }

      this.money -= price;
      this.pecahanUang = pecahanUang;
      return true;
    }
  }
}

class Beverage {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Coke extends Beverage {
  constructor() {
    super('Coke', 7500);
  }
}

class Tea extends Beverage {
  constructor() {
    super('Tea', 5000);
    this.caffeine = '11mg';
  }
}

class Coffee extends Beverage {
  constructor() {
    super('Coffee', 10500);
    this.caffeine = '40mg';
  }
}



let vm = new VendingMachine();


let list = {
  Coke: 2,
  Tea: 1
}

vm.addBeverage(list);
vm.insertMoney(10000);
vm.pecahanUang = '10000=2;5000=3'
vm.buyBeverage('Tea');

console.log(vm.drinks);
