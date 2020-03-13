class Character {
  constructor(name, money, mirrageStatus) {
    this.name = name
    this.money = money
    this.mirrageStatus = mirrageStatus
  }

  greeting() {
    console.log(`Halo! saya ${this.name}`)
  }
}

class Vegetable {
  constructor(name, avalailePoin, maxWater, buy, sell) {
    this.name = name
    this.waterPoin = 0
    this.avalailePoin = avalailePoin
    this.maxWater = maxWater
    this.buy = buy
    this.sell = sell
    this.planted = false
  }
}

class Farmer extends Character {
  constructor(name, money, mirrageStatus) {
    super(name, money, mirrageStatus)
    this.bags = []
  }
  greeting() {
    super.greeting()
    console.log(`Mohon bantu saya ya!`)
  }

  buyyingSeed(vegetable) {
    if(this.money >= vegetable.buy) {
      this.money -= vegetable.buy
      this.bags.push(vegetable)
      console.log(`Berhasil membeli ${vegetable.name} seharga ${vegetable.buy}`)
      console.log(`Sisa uangmu: ${this.money}`)
    } else {
      console.log(`Uang kamu tidak cukup untuk membeli ${vegetable.name}`)
    }
  }

  farming(vegetable, farm) {
    let index = -1
    let vege = {}
    for(let i = 0; i < this.bags.length; i++) {
      if(this.bags[i].name === vegetable.name) {
        index = i
        vege = this.bags[i]
      }
    }

    if(index !== -1) {
      this.bags.splice(index, 1)
      farm.addVegetable(vege)
      console.log(`Kamu berhasil menanam ${vege.name}`)
    } else {
      console.log(`Tidak ada ${vegetable.name} di bags kamu`)
    }
  }

  watering(farm) {
    for(let i = 0; i < farm.vegetables.length; i++) {
      farm.vegetables[i].waterPoin++
      console.log(`${farm.vegetables[i].name} berhasil disiram`)

      if(farm.vegetables[i].waterPoin % farm.vegetables[i].avalailePoin === 0) {
        let vege = {...farm.vegetables[i]}
        farm.addBins(vege)
      }
    }
  }

  checkFarm(farm) {
    for(let i = 0; i < farm.vegetables.length; i++) {
      if(farm.vegetables[i].waterPoin === farm.vegetables[i].maxWater) {
        farm.deleteVegetable(farm.vegetables[i])
      }
    }
  }

  sellingBins(farm) {
    let total = 0
    for(let i = 0; i < farm.bins.length; i++) {
      total += farm.bins[i].sell
    }

    this.money += total
    console.log(`Kamu berhasil mendapatkan ${total}`)
    console.log(`Uang kamu sekarang maenjadi ${this.money}`)

    farm.bins = []
  }
}

class Female extends Character {
  constructor(name, money, mirrageStatus, favGift) {
    super(name, money, mirrageStatus)
    this.hearthPoin = 0
    this.favGift = favGift
  }
  greeting() {
    super.greeting()
    console.log(`Salam kenal ya -.^`)
  }
}

class Farm {
  constructor(name) {
    this.name = name
    this.vegetables = []
    this.bins = []
  }

  addVegetable(vegetable) {
    vegetable.planted = true
    this.vegetables.push(vegetable)
  }

  addBins(vegetable) {
    this.bins.push(vegetable)
    console.log(`${vegetable.name} berhasil masuk ke bin!`)
  }

  deleteVegetable(vegetable) {
    for(let i = 0; i < this.vegetables.length; i++) {
      if(this.vegetables[i].name === vegetable.name) {
        console.log(`${this.vegetables[i].name} sudah selesai masa panen!`)
        this.vegetables.splice(i, 1)
      }
    }
  }
}

// list character
let alex = new Farmer("Alex", 5000, false)
let keren = new Female("Keren", 0, false, "cucumber")
let popuri = new Female("Popuri", 0, false, "spinach")
let ann = new Female("Keren", 0, false, "sweet potato")

alex.greeting()
keren.greeting()

// list vegetables
let cucumber = new Vegetable("cucumber", 5, 10, 400, 300)
let spinach = new Vegetable("spinach", 4, 12, 500, 300)
let sweetPotato = new Vegetable("sweet potato", 3, 15, 500, 200)
let durian = new Vegetable("durian", 3, 30, 5000, 2500)

// list Farm
let hacktivFarm = new Farm("HacktivFarm")

alex.buyyingSeed(cucumber)
alex.buyyingSeed(spinach)
alex.buyyingSeed(sweetPotato)
alex.buyyingSeed(durian)

alex.farming(spinach, hacktivFarm)
alex.farming(cucumber, hacktivFarm)
alex.farming(sweetPotato, hacktivFarm)
alex.farming(durian, hacktivFarm)

for(let i = 0; i < 15; i++) {
  alex.watering(hacktivFarm)
  alex.checkFarm(hacktivFarm)
}
console.log('===== sebelum dijual =====')
console.log(hacktivFarm)
alex.sellingBins(hacktivFarm)
console.log('===== setelah dijual =====')
console.log(hacktivFarm)
console.log(alex)