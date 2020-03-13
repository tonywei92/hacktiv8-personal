class Hero {
  constructor(name, job, health, mana, attack, money) {
    this.name   = name
    this.job    = job
    this.health = health
    this.mana   = mana
    this.attack = attack
    this.money  = money
    this.items  = []
  }
  buyItem(item){
    if(this.job == item.job){
      if(this.money >= item.price){
        this.health += item.healthpoint
        this.mana += item.manapoint
        this.attack += item.attackpoint
        this.money -= item.price
        this.items.push(item)
      }else{
        console.log('Uang Tidak Cukup');
      }
    }else{
      console.log('Job Tidak Sesuai');
    }
  }
  sellItem(name){
    let checkItem = false;
    let indexItem = 0;
    this.items.forEach((item, index) => {
      if(item.name == name){
        checkItem = true
        indexItem = index
      }
    })
    if(checkItem == true){
      this.health -= this.items[indexItem].healthpoint
      this.mana -= this.items[indexItem].manapoint
      this.attack -= this.items[indexItem].attackpoint
      this.money += this.items[indexItem].price / 2
      this.items.splice(indexItem, 1);
    }else{
      console.log("Apa yang mau di jual bro");
    }
  }
  attackMonster(monster){
    if(monster.weakness == this.job){
      monster.health -= this.attack * 1.5
    }else{
      monster.health -= this.attack
    }

    if(monster.health <= 0){
      console.log(`Kamu berhasil membunuh monster ${monster.name}. dan sisa darah kamu adalah ${this.health}`);
    }else {
      this.health -= monster.attack
      if(this.health <= 0){
        console.log('Kamu kalah sebaiknya pulang ke kota dan beli item lagi');
      }else{
        console.log(`Kamu Berhasil Menyerang ${} dengan jumlah serangan [angka dari serangan termasuk yang sudah ditambah] Darah kamu terisaa [sisa Healt karakter] jadi barhati-hatilah`);
      }
    }
  }
}
class Knight extends Hero{
  constructor(name, health, mana, attack, money) {
    super(name, 'Knight', health, mana, attack, money)
  }
  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}
class Assassin extends Hero{
  constructor(name, health, mana, attack, money) {
    super(name, 'Knight', health, mana, attack, money)
  }
  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}
class Mage extends Hero{
  constructor(name, health, mana, attack, money) {
    super(name, 'Knight', health, mana, attack, money)
  }
  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}


let rikimaru = new Assassin('Rikimaru', 1200, 543, 431, 1200);
let leonidas = new Knight('Leonidas', 3213, 126, 431, 1700);
let gandalf = new Mage('Gandalf', 1130, 603, 231, 2500);
let ezio = new Assassin('Ezio', 1250, 523, 431, 2100);


class Item {
  constructor(name, job, detail, healthpoint, manapoint, attackpoint, price) {
    this.name        = name
    this.job         = job
    this.detail      = detail
    this.healthpoint = healthpoint
    this.manapoint   = manapoint
    this.attackpoint = attackpoint
    this.price       = price
  }
}


class Monster {
  constructor(name, health, attack, weakness) {
    this.name = name
    this.health = health
    this.attack = attack
    this.weakness = weakness
  }
}


let pedangSakti = new Item('Pedang Sakti', 'Knight', 'pedang ini warisan dari nenek moyang', 100, 0, 200, 1500)

let roshan = new Monster("Roshan", 1000, 300, "Knights")

console.log(leonidas);
leonidas.buyItem(pedangSakti)
console.log(leonidas);
leonidas.sellItem('Pedang Sakti')
console.log(leonidas);

leonidas.attackMonster(roshan)
