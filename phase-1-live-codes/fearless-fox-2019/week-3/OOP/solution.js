class Property{
  constructor(alamat, luas, hargaSewa){
    this.alamat = alamat
    this.luas = luas
    this.hargaSewa = hargaSewa
    this.furnitur = []
  }

  addFurnitur(furnitur){
    this.furnitur.push(furnitur)
    this.hargaSewa+=furnitur.hargaSewa
  }
}

class Kontrakan extends Property{
  constructor(alamat, luas, hargaSewa, jumlahRuangan){
    super(alamat, luas, hargaSewa)
    this.jumlahRuangan = jumlahRuangan
  }

  get kapasitas(){
    return (this.jumlahRuangan*2) + ' Orang'
  }
}

class Kosan extends Property{  
  constructor(alamat, luas, hargaSewa, kamarMandi){
    super(alamat, luas, hargaSewa)
    this.kamarMandi = kamarMandi
  }

  get kapasitas(){
    return Math.ceil(Number(this.luas)/7) + ' Orang'
  }
}

class furniture{
  constructor(nama, hargaSewa){
    this.nama = nama
    this.hargaSewa = hargaSewa
  }
}

console.log(`//Relesase 1 : Membuat property & buat getter kapasitas`)
let kosAnggrek = new Kosan('Jl.Anggrek', 9, 700000, true)
let kontrakanBegonia = new Kontrakan('Jl.Begonia', 36, 2000000, 3)
let kosCamelia = new Kosan('Jl.Camelia', 7, 400000, true)
let kontrakanDahlia = new Kontrakan('Jl.Dahlia', 40, 2200000, 4)

console.log(kosAnggrek)
console.log(kontrakanBegonia)
console.log(kosCamelia);
console.log(kontrakanDahlia);

console.log(kosAnggrek.kapasitas)
console.log(kontrakanBegonia.kapasitas)
console.log(kosCamelia.kapasitas);
console.log(kontrakanDahlia.kapasitas);


console.log(`//Relesase 2 : Membuat furniture & add furniture ke property tersebut`)
let lemari = new furniture('lemari', 5000)
let tempatTidur = new furniture('tempatTidur', 3000)
let ac = new furniture('ac', 50000)

console.log(lemari)
console.log(tempatTidur)
console.log(ac)

console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`)
kosAnggrek.addFurnitur(lemari)
console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`)
kosAnggrek.addFurnitur(tempatTidur)
console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`)
kosAnggrek.addFurnitur(ac)
console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`)