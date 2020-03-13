// Kode anda disini
class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

class Wahana {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    checkIn(card) {
        if (card.type === 'vip') {
            console.log(`Selamat datang di wahana ${this.name} ${card.person.name}, tidak dikenakan biaya karena kartu anda adalah VIP.`)
        }
        else {
            if (card.saldo < this.price) {
                console.log(`Maaf, saldo ${card.person.name} tidak mencukupi, biaya wahana ${this.name} adalah Rp.${this.price}, saldo anda Rp.${card.saldo}`)
            }
            else {
                card.saldo -= this.price;
                console.log(`Selamat datang di wahana ${this.name} ${card.person.name}, Saldo anda sekarang adalah ${card.saldo}`)
            }
        }
    }

}

class RollerCoaster extends Wahana {
    constructor() {
        super('Roller Coaster', 25000);
    }
}

class SeaWorld extends Wahana {
    constructor() {
        super('Seaworld', 30000);
    }
}

class Bianglala extends Wahana {
    constructor() {
        super('Bianglala', 20000);
    }
}

class Theater extends Wahana {
    constructor() {
        super('Theater', 50000);
    }

    checkIn(card) {
        if (card.saldo < this.price) {
            console.log(`(VIP dan regular berbayar) Maaf, saldo ${card.person.name} tidak mencukupi, biaya wahana ${this.name} adalah Rp.${this.price}, saldo anda Rp.${card.saldo}`)
        }
        else {
            card.saldo -= this.price;
            console.log(`(VIP dan regular berbayar) Selamat datang di wahana ${this.name} ${card.person.name}, Saldo anda sekarang adalah ${card.saldo}`)
        }
    }
}

class WahanaCard {
    constructor(person, type, saldo) {
        this.person = person;
        this.type = type;
        this.saldo = saldo;
    }

    topup(saldo) {
        this.saldo += saldo;
        console.log(`Selamat, saldo sebesar ${saldo} telah ditambahkan pada kartu ${this.person.name}, saldo sekarang ${this.saldo}`);
    }
}

class VIPCard extends WahanaCard {
    constructor(person, saldoKartu) {
        super(person, 'vip', saldoKartu);
    }
}

class RegularCard extends WahanaCard {
    constructor(person, saldoKartu) {
        super(person, 'regular', saldoKartu);
    }
}

class WahanaPark {
    constructor() {
        this.rollerCoaster = new RollerCoaster();
        this.seaWorld = new SeaWorld();
        this.theater = new Theater();
        this.bianglala = new Bianglala();
        this.customers = [];
    }

    register(person, type, saldo) {
        let found = false;
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].person.phone === person.phone) {
                found = true;
                break;
            }
        }
        if (found) {
            return console.log('Maaf nomor hp anda telah terdaftar dalam customer kami, silahkan daftar dengan nomor hp lain');
        }

        let card = null;

        if (type === 'vip') {
            if (saldo < 500000) {
                console.log('Gagal membeli kartu wahana, uang anda tidak cukup');
                return;
            }
            else {
                let saldoKartu = saldo - 500000;
                card = new VIPCard(person, saldoKartu);
            }
        }
        if (type === 'regular') {
            if (saldo < 150000) {
                console.log('Gagal membeli kartu wahana, uang anda tidak cukup');
                return
            }
            else {
                let saldoKartu = saldo - 150000;
                card = new RegularCard(person, saldoKartu);
            }
        }
        this.customers.push(card);
        return card;
    }

    returnCard(card) {
        let index = this.customers.indexOf(card);
        if (index === -1) {
            console.log(`Pelanggan dengan nama ${card.person.name} telah mengembalikan kartu / tidak terdaftar dalam daftar customer kami`)
        }
        else {
            this.customers.splice(index, 1);
            console.log(`Pelanggan dengan nama ${card.person.name} telah mengembalikan kartu, sisa saldo anda adalah Rp.${card.saldo}`)
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
