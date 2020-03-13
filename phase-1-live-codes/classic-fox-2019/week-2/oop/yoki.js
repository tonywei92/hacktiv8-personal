// mirrageStatus ? marriage
// 2 Alex name Keren ?
// buyingSeed terima apa?
//r3 lokasi buat apa
// r3 urutan pembelian ? penanaman
class Character{
  constructor(name, money=0, mirrageStatus=false){
    this.name = name
    this.money = money
    this.mirrageStatus = mirrageStatus
  }
}

class Farmer extends Character{
  constructor(name, money, mirrageStatus, bags = []){
    super(name, money, mirrageStatus)
    this.bags = bags
  }

  greeting(){
    console.log(`Halo! saya ${this.name}.
Mohon bantu saya ya!`);
  }

  buyingSeed(seed){
    if(this.money >= seed.buy){
      this.money-=seed.buy
      console.log(`Berhasil membeli ${seed.name} seharga ${seed.buy}`);
      this.bags.push(seed)
      console.log(`Sisa uangmu: ${this.money}`);
    }
    else{
      console.log(`Uang kamu tidak cukup untuk membeli ${seed.name}`);   
    }
  }

  farming(seed, location){
    for (let i in this.bags) {
      if(this.bags[i].name === seed){
        console.log(`Kamu Berhail menanam ${seed}`);
        this.bags[i].planted = true
        location.vegetables.push(this.bags[i])
        this.bags.splice(i, 1)
        return farm
      }
    }
    console.log(`Tidak ada ${seed} di bags kamu`);
  }

  watering(lokasi){
    for (let i in lokasi.vegetables) {
      lokasi.vegetables[i].water++
      console.log(`${lokasi.vegetables[i].name} berhasil disiram`)
      if(lokasi.vegetables[i].max === lokasi.vegetables[i].water){
        lokasi.bins.push(lokasi.vegetables[i])
        lokasi.vegetables.splice(i, 1)
      }
    }
  }
}

class Female extends Character{
  constructor(name, fav, money, mirrageStatus, heart=0){
    super(name, money, mirrageStatus)
    this.heart = heart
    this.fav = fav
  }

  greeting(){
    console.log(`Halo! saya ${this.name}
Salam kenal ya -.^`)
  }
}

class Vegetable{
  constructor(name, water, available, max, buy, sell, planted=false){
    this.name = name
    this.water = water
    this.available = available
    this.max = max
    this.buy = buy
    this.sell = sell
    this.planted = planted
  }
}

class Farm{
  constructor(name, vegetables = [], bins = []){
    this.name = name
    this.vegetables = vegetables
    this.bins = bins
  }
}

let alex = new Farmer("Alex", 5000)
let popuri = new Female("Popuri", "spinach")

alex.greeting()
popuri.greeting()

let cucumber = new Vegetable('cucumber', 0, 5, 10, 400, 300)
let spinach = new Vegetable('spinach', 0, 4, 12, 500, 300)
let potato = new Vegetable('sweet potato', 0, 3, 15, 500, 200)
let durian = new Vegetable('durian', 0, 3, 30, 5000, 2500)
alex.buyingSeed(cucumber)
alex.buyingSeed(spinach)
alex.buyingSeed(potato)
alex.buyingSeed(durian)
console.log('-----bags----');
console.log(alex.bags);

let farm = new Farm('farm')
alex.farming('cucumber', farm)
alex.farming('spinach', farm)
console.log('-----bags----');
console.log(alex.bags);
console.log('-----vegetables----');
console.log(farm);

for (let i = 0; i < 15; i++) {
  alex.watering(farm)
}

console.log('-----vegetables----');
console.log(farm);



