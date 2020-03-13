# ** PABRIK SEPATU (30 Menit) **

Sebuah Pabrik Sepatu memiliki 3 macam jenis sepatu yang akan diproduksi  yaitu Casual, Formal dan Sport. Masing-masing jenis sepatu memiliki tagLine yang berbeda.  

Buatlah class Sepatu dengan property name dan price

Adapun spesifikasi setiap sepatu adalah sebagai berikut:

```text
Casual

name: 'Casual',
price: 500000
method:
tagLine(), menuliskan 'Membuat anda merasa nyaman'

BayMax

name: 'Formal'
price: 1000000
method:
tagLine(), menuliskan 'Menemani karir anda!'

AutoBot

name: 'Sport'
price: 750000
method:
tagLine(), menuliskan 'Lari dari kenyataan pahit? Siapa takut!'
```

Buatlah class SepatuFactory dengan method orderShoes yang menerima parameter berupa object yang berisi sepatu apa saja yang ingin dibuat beserta jumlahnya.

Method akan mengembalikan array of Objects dari jenis semua sepatu beserta total invoice yang harus dibayarkan

```javascript
let pesan = {
  'Casual': 5,
  'Sport': 3,
  'Formal': 2
}

let sepatus = SepatuFactory.orderShoes(pesan);
console.log(sepatus);
  // { shoes:
  //    [ Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Casual { name: 'Casual', price: 500000 },
  //      Sport { name: 'Sport', price: 750000 },
  //      Sport { name: 'Sport', price: 750000 },
  //      Sport { name: 'Sport', price: 750000 },
  //      Formal { name: 'Formal', price: 1000000 },
  //      Formal { name: 'Formal', price: 1000000 } ],
  //   invoice: 27000000 }

sepatus.shoes.forEach(shoe => {
  shoe.tagLine();
})
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Membuat anda merasa nyaman
  // Lari dari kenyataan pahit? Siapa takut!
  // Lari dari kenyataan pahit? Siapa takut!
  // Lari dari kenyataan pahit? Siapa takut!
  // Menemani karir anda!
  // Menemani karir anda!

```
