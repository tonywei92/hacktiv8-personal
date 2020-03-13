class Sepatu {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Casual extends Sepatu {
  constructor() {
    super('Casual', 500000);
  }

  tagLine() {
    console.log(`Membuat anda merasa nyaman`);
  }
}

class Formal extends Sepatu {
  constructor() {
    super('Formal', 1000000);
  }

  tagLine() {
    console.log(`Menemani karir anda!`);
  }
}

class Sport extends Sepatu {
  constructor() {
    super('Sport', 750000);
  }

  tagLine() {
    console.log(`Lari dari kenyataan pahit? Siapa takut!`);
  }
}

class SepatuFactory {
  static orderShoes(orders) {
    let result = {}
    let shoes = [];
    let total = 0;

    for (let o in orders) {
      for (let i = 0; i < orders[o]; i++) {
        let sepatu = null;
        if (o === 'Casual') {
          sepatu = new Casual();
        } else if (o === 'Formal'){
          sepatu = new Formal();
        } else if (o === 'Sport') {
          sepatu = new Sport();
        }
        // sepatu.tagLine();
        total += sepatu.price;
        shoes.push(sepatu);
      }
    }
    result.shoes = shoes;
    result.invoice = total;
    return result;
  }
}

let a = SepatuFactory.orderShoes({"Casual": 5, "Sport": 3, "Formal": 2})
console.log(a);
a.shoes.forEach(d => {
  d.tagLine();
})
