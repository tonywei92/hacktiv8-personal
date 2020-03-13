class Person {
  constructor(name, phone) {
    this.name = name
    this.phone = phone
  }
}

class Attraction {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  checkIn(user) {
    if (user.type === 'regular') {
      user.balance -= this.price

      return `Selamat datang di wahana ${this.__proto__.constructor.name} ${user.user.name} Saldo anda sekarang adalah ${user.balance}`
    }
    return 'Anda VIP gratiss'
  }
}

class RollerCoaster extends Attraction {
  constructor(name) {
    super(name, 25000)
  }
}

class SeaWorld extends Attraction {
  constructor(name) {
    super(name, 30000)
  }
}

class BiangLala extends Attraction {
  constructor(name) {
    super(name, 20000)
  }
}

class Theater extends Attraction {
  constructor(name) {
    super(name, 50000)
  }
}

class WahanaCard {
  constructor(type, user, balance) {
    this.type = type
    this.user = user
    this.balance = balance
  }
}

class Vip extends WahanaCard {
  constructor(user, balance) {
    super('vip', user, balance)
  }
}

class Regular extends WahanaCard {
  constructor(user, balance) {
    super('regular', user, balance)
  }
}

class WahanaPark {
  constructor() {
    this.rollerCoaster = new RollerCoaster()
    this.seaWorld = new SeaWorld()
    this.theater = new Theater()
    this.bianglala = new BiangLala()
    this.customers = []
    console.log('Selamat dalam di Adventure park')
  }

  register(user, type, amount) {
    const findPhone = this.customers.find(customer => customer.user.phone === user.phone)

    if (findPhone) return 'Maaf nomor hp anda telah terdaftar dalam customer kami, silahkan daftar dengan nomor hp lain'

    let userCard = null
    if (type === 'vip') {
      const balance = amount - 50000
      userCard = new Vip(user, balance)
    } else if (type === 'regular') {
      //! harga regular sama kaya vip?
      const balance = amount - 50000
      userCard = new Regular(user, balance)
    }

    this.customers.push(userCard)

    console.log(`Berhasil membeli kartu ${type} atas nama ${user.name}, saldo: ${userCard.balance}`)

    return userCard
  }
}

// Kode anda disini

const adventurePark = new WahanaPark('Adventure Park')
// Selamat datang di Adventure Park

const tony = new Person('Tony', '085290910291')
// console.log(tony)
// Person { name: 'Tony', phone: '085290910291' }

const nadia = new Person('Nadia', '085290910291')
// console.log(nadia)
// Person { name: 'Nadia', phone: '085290910291' }

const isro = new Person('Isro', '082726182321')
// console.log(isro)
// Person { name: 'Isro', phone: '082726182321' }

const semi = new Person('Semi', '0810000100')
// console.log(semi)
// Person { name: 'Semi', phone: '0810000100' }

const tonyRegular = adventurePark.register(tony, 'regular', 200000)
// Berhasil membeli kartu regular atas nama Tony, saldo: 50000
//! todo regular kurangin nya 150 ribu?

const nadiaRegular = adventurePark.register(nadia, 'regular', 120000)
// console.log(nadiaRegular)
//! ga dibikin console log outputnya disini?
// Maaf nomor hp anda telah terdaftar dalam customer kami, silahkan daftar dengan nomor hp lain

const isroVip = adventurePark.register(isro, 'vip', 800000)
// Berhasil membeli kartu vip atas nama Isro, saldo: 300000

const semiVip = adventurePark.register(semi, 'vip', 1000000)
// Berhasil membeli kartu vip atas nama Semi, saldo: 500000

// console.log(adventurePark.customers)
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

console.log(tonyRegular)
console.log(adventurePark.rollerCoaster.checkIn(tonyRegular))
//Selamat datang di wahana Roller Coaster Tony, Saldo anda sekarang adalah Rp.25000

adventurePark.theater.checkIn(tonyRegular)
// (VIP dan regular berbayar) Maaf, saldo Tony tidak mencukupi, biaya wahana Theater adalah Rp.50000, saldo anda Rp.25000

tonyRegular.topup(30000)
// Selamat, saldo sebesar 30000 telah ditambahkan pada kartu Tony, saldo sekarang 55000

adventurePark.theater.checkIn(tonyRegular)
// (VIP dan regular berbayar) Selamat datang di wahana Theater Tony, Saldo anda sekarang adalah Rp.5000

adventurePark.rollerCoaster.checkIn(isroVip)
// Selamat datang di wahana Roller Coaster Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.seaWorld.checkIn(isroVip)
// Selamat datang di wahana SeaWorld Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.bianglala.checkIn(isroVip)
// Selamat datang di wahana Bianglala Isro, tidak dikenakan biaya karena kartu anda adalah VIP.

adventurePark.theater.checkIn(isroVip)
// (VIP dan regular berbayar) Selamat datang di wahana Theater, Saldo anda sekarang adalah Rp.250000

adventurePark.returnCard(tonyRegular)
// Anda telah mengembalikan kartu, uang jaminan kartu anda kembali Rp.10000

adventurePark.returnCard(tonyRegular)
// Pelanggan dengan nama Tony telah mengembalikan kartu, sisa saldo anda adalah Rp.25000

adventurePark.returnCard(semiVip)
// Pelanggan dengan nama Semi telah mengembalikan kartu, sisa saldo anda adalah Rp.500000
