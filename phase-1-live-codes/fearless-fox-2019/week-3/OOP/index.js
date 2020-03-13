console.log(`//Relesase 1 : Membuat property & buat getter kapasitas`)

/** Buat sebuah kosan di Jl.Anggrek, luas 9, harga sewa 700000, dan ada kamar mandi dalam */
let kosAnggrek = `----Instance class disini----`

/** Buat sebuah kontrakan di Jl.Begonia, luas 36, harga sewa 200000, dan memiliki 3 ruangan */
let kontrakanBegonia = `----Instance class disini----`


console.log(kosAnggrek) // --Mengembalikan hasil instance class-nya--
console.log(kontrakanBegonia) // --Mengembalikan hasil instance class-nya--


console.log(kosAnggrek.kapasitas) // 2 Orang
console.log(kontrakanBegonia.kapasitas) // 6 Orang 


console.log(`//Relesase 2 : Membuat furniture & add furniture ke property tersebut`)
let lemari = new Furniture('lemari', 5000)
let tempatTidur = new Furniture('tempatTidur', 3000)
let ac = new Furniture('ac', 50000)

console.log(lemari) // Furniture { nama: 'lemari', hargaSewa: 5000 }
console.log(tempatTidur) // Furniture { nama: 'tempatTidur', hargaSewa: 3000 }
console.log(ac) // Furniture { nama: 'ac', hargaSewa: 50000 }

console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`) // harga sewa Jl.Anggrek saat ini adalah 700000

/** 
 * ================================================
 * PANGGIL METHOD ADDFURNITURE SEBUAH lemari DISINI
 * ================================================ 
 * */
console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`) // harga sewa Jl.Anggrek saat ini adalah 705000

/** 
 * ================================================
 * PANGGIL METHOD ADDFURNITURE SEBUAH tempatTidur DISINI
 * ================================================
 * */
console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`) // harga sewa Jl.Anggrek saat ini adalah 708000

/** 
  * ================================================
  * PANGGIL METHOD ADDFURNITURE SEBUAH ac DISINI
  * ================================================ 
 * */
console.log(`harga sewa ${kosAnggrek.alamat} saat ini adalah ${kosAnggrek.hargaSewa}`) // harga sewa Jl.Anggrek saat ini adalah 758000