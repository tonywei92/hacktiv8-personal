class Person {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class WahanaPark {
  constructor(name) {
    this.rollerCoaster = new RollerCoaster();
    this.seaWorld = new SeaWorld();
    this.theater = new Theater();
    this.bianglala = new BiangLala();
    this.customers = [];
    console.log(`Selamat datang di ${name}`);
  }

  register(personObj, type, pay) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].user.phone === personObj.phone) {
        return console.log(
          "Maaf nomor hp anda telah terdaftar dalam customer kami, silahkan daftar dengan nomor hp lain"
        );
      }
    }
    let biaya = 0;
    if (type === "vip") {
      biaya = 500000;
    }
    if (type === "regular") {
      biaya = 150000;
    }

    if (pay - biaya < 0) {
      console.log("Gagal membeli kartu wahana, uang anda tidak cukup");
      return;
    }
    console.log(
      `Berhasil membeli kartu ${type} atas nama ${
      personObj.name
      }, saldo: ${pay - biaya}`
    );
    if (type === "vip") {
      const card = new VIPCard(personObj, pay - biaya);
      this.customers.push(card);
      return card;
    }
    if (type === "regular") {
      const card = new RegularCard(personObj, pay - biaya);
      this.customers.push(card);
      return card;
    }
  }

  returnCard(cardObj) {
    for (let i = 0; i < this.customers.length; i++) {
      if (cardObj.user.phone === this.customers[i].user.phone) {
        this.customers.splice(i, 1);
        return console.log(
          `Pelanggan dengan nama ${cardObj.user.name} telah mengembalikan kartu, sisa saldo anda adalah Rp.${cardObj.balance}`
        );
      }
    }
    console.log(
      `Pelanggan dengan nama ${cardObj.user.name} telah mengembalikan kartu / tidak terdaftar dalam daftar customer kami`
    );
  }
}

class WahanaCard {
  constructor(type, userObj, balance) {
    this.type = type;
    this.user = userObj;
    this.balance = balance;
  }

  topup(balance) {
    this.balance += balance;
    console.log(
      `Selamat, saldo sebesar ${balance} telah ditambahkan pada kartu ${this.user.name}, saldo sekarang ${this.balance}`
    );
  }
}

class VIPCard extends WahanaCard {
  constructor(userObj, balance) {
    super("vip", userObj, balance);
  }
}

class RegularCard extends WahanaCard {
  constructor(userObj, balance) {
    super("regular", userObj, balance);
  }
}

class Wahana {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  checkIn(cardObj) {
    if (cardObj.type === "vip") {
      console.log(
        `Selamat datang di wahana ${this.name} ${cardObj.user.name}, tidak dikenakan biaya karena kartu anda adalah VIP.`
      );
      return;
    }
    if (cardObj.type === "regular") {
      if (cardObj.balance - this.price > 0) {
        cardObj.balance -= this.price;

        console.log(
          `Selamat datang di wahana ${this.name} ${cardObj.user.name}, Saldo anda sekarang adalah Rp.${cardObj.balance}`
        );
      } else {
        console.log(
          `Maaf, saldo ${cardObj.user.name} tidak mencukupi, biaya wahana ${this.name} adalah Rp.${this.price}, saldo anda Rp.${cardObj.balance}`
        );
      }
    }
  }
}

class RollerCoaster extends Wahana {
  constructor() {
    super("Roller Coaster", 25000);
  }
}

class SeaWorld extends Wahana {
  constructor() {
    super("SeaWorld", 30000);
  }
}

class BiangLala extends Wahana {
  constructor() {
    super("Bianglala", 20000);
  }
}

class Theater extends Wahana {
  constructor() {
    super("Theater", 50000);
  }

  checkIn(cardObj) {
    if (cardObj.balance - this.price > 0) {
      cardObj.balance -= this.price;
      console.log(
        `(VIP dan regular berbayar) Selamat datang di wahana ${this.name} ${cardObj.user.name}, Saldo anda sekarang adalah Rp.${cardObj.balance}`
      );
    } else {
      console.log(
        `(VIP dan regular berbayar) Maaf, saldo ${cardObj.user.name} tidak mencukupi, biaya wahana ${this.name} adalah Rp.${this.price}, saldo anda Rp.${cardObj.balance}`
      );
    }
  }
}

const adventurePark = new WahanaPark("Adventure Park");
// Selamat datang di Adventure Park

const tony = new Person("Tony", "085290910291");
console.log(tony);
// Person { name: 'Tony', phone: '085290910291' }

const nadia = new Person("Nadia", "085290910291");
console.log(nadia);
// Person { name: 'Nadia', phone: '085290910291' }

const isro = new Person("Isro", "082726182321");
console.log(isro);
// Person { name: 'Isro', phone: '082726182321' }

const semi = new Person("Semi", "0810000100");
console.log(semi);
// Person { name: 'Semi', phone: '0810000100' }

const armedi = new Person("Armedi", "089909900091")
console.log(armedi);
//Person { name: 'Armedi', phone: '089909900091' }

const tonyRegular = adventurePark.register(tony, "regular", 200000);
// Berhasil membeli kartu regular atas nama Tony, saldo: 50000

const armediVip = adventurePark.register(armedi, "vip", 30000);
// Gagal membeli kartu wahana, uang anda tidak cukup

const nadiaRegular = adventurePark.register(nadia, "regular", 120000);
// Maaf nomor hp anda telah terdaftar dalam customer kami, silahkan daftar dengan nomor hp lain

const isroVip = adventurePark.register(isro, "vip", 800000);
// Berhasil membeli kartu vip atas nama Isro, saldo: 300000

const semiVip = adventurePark.register(semi, "vip", 1000000);
// Berhasil membeli kartu vip atas nama Semi, saldo: 500000

console.log(adventurePark.customers);
// [
//     RegularCard {
//       type: 'regular',
//       user: Person { name: 'Tony', phone: '085290910291' },
//       balance: 50000
//     },
//     VIPCard {
//       type: 'vip',
//       user: Person { name: 'Isro', phone: '082726182321' },
//       balance: 300000
//     },
//     VIPCard {
//       type: 'vip',
//       user: Person { name: 'Semi', phone: '0810000100' },
//       balance: 500000
//     }
//   ]

adventurePark.rollerCoaster.checkIn(tonyRegular);
//Selamat datang di wahana Roller Coaster Tony, Saldo anda sekarang adalah Rp.25000

adventurePark.theater.checkIn(tonyRegular);
// (VIP dan regular berbayar) Maaf, saldo Tony tidak mencukupi, biaya wahana Theater adalah Rp.50000, saldo anda Rp.25000

tonyRegular.topup(30000);
// Selamat, saldo sebesar 30000 telah ditambahkan pada kartu Tony, saldo sekarang 55000

adventurePark.theater.checkIn(tonyRegular);
// (VIP dan regular berbayar) Selamat datang di wahana Theater Tony, Saldo anda sekarang adalah Rp.5000

adventurePark.rollerCoaster.checkIn(isroVip);
// Selamat datang di wahana Roller Coaster Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.seaWorld.checkIn(isroVip);
// Selamat datang di wahana SeaWorld Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.bianglala.checkIn(isroVip);
// Selamat datang di wahana Bianglala Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.theater.checkIn(isroVip);
// (VIP dan regular berbayar) Selamat datang di wahana Theater, Saldo anda sekarang adalah Rp.250000

adventurePark.returnCard(tonyRegular);
// Pelanggan dengan nama Tony telah mengembalikan kartu, sisa saldo anda adalah Rp.5000

adventurePark.returnCard(tonyRegular);
// Pelanggan dengan nama Tony telah mengembalikan kartu / tidak terdaftar dalam daftar customer kami

adventurePark.returnCard(semiVip);
// Pelanggan dengan nama Semi telah mengembalikan kartu, sisa saldo anda adalah Rp.500000
