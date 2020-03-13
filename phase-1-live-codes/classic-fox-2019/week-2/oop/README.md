# Harverst Moon : Back To Hacktiv8
> ⏰ Time Estimation: ? mins

Selamat datang di dunia Harverst Moon, dimana kamu diundang ke sebuah desa untuk membantu mengelola sebuah kebun dan membantu karakter utama bisa mendapatkan kekasih idamannya.

Di dalam game ini, terdapat `Character` yang memiliki attribute sebagai berikut: name, money, marriageStatus

dan di dalam game ini terdapat 2 tipe `Character`:
- `Farmer`
  <br> memiliki attribute tambahan: bags
- `Female`
  <br> memiliki attribute tambahan: heartPoin, favGift

## Relase 0
Buatlah `Farmer` dan `Female` dengan data sbb:
1. Alex
- Name: Alex
- Money: 5000
- Marriage Status: false
- Bags = []

2. Keren
- Name: Keren
- Money: 0
- Marriage Status: false
- Heart Poin = 0
- Fav Gift = cucumber

3. Popuri
- Name: Popuri
- Money: 0
- Marriage Status: false
- Heart Poin = 0
- Fav Gift = spinach

## Release 1
`Character` ini memiliki cara sendiri untuk memperkenalkan diri, buatlah sebuah method dengan nama `greeting` sehingga menghasilkan:

```javascript
// Halo! saya Alex.
// Mohon bantu saya ya!

// Halo! saya Keren
// Salam kenal ya -.^
```

## Release 2
Untuk mendapatkan uang, kamu harus bekerja untuk mulai menanam dan merawat tanaman yang ada di kebunmu. `Farm` kamu tentunya akan memiliki banyak `Vegetable` yang akan memungkinkan kamu menghasilkan uang tersebut.

Buatlah beberapa `Vegetable` sesuai dengan data berikut

1. Cucumber
- Name: cucumber
- Water Poin: 0
- Avalaible Poin: 5
- Max Water: 10
- Buy: 400
- Sell: 300
- Planted: false

2. Spinach
- Name: spinach
- Water Poin: 0
- Avalaible Poin: 4
- Max Water: 12
- Buy: 500
- Sell: 300
- Planted: false

3. Sweet Potato
- Name: sweet potato
- Water Poin: 0
- Avalaible Poin: 3
- Max Water: 15
- Buy: 500
- Sell: 200
- Planted: false

4. Durian
- Name: durian
- Water Poin: 0
- Avalaible Poin: 3
- Max Water: 30
- Buy: 5000
- Sell: 2500
- Planted: false

`Farmer` memiliki method `buyingSeed` yang menerima parameter berupa `Vegetable` yang ingin dibeli. Method ini secara otomatis uang farmer akan berkurang dan masuk ke dalam bags `Farmer`
<br> Jika kamu berhasil membeli sayur tersebut, berikan info:
``` javascript
// Berhasil membeli <nama_sayur> seharga <harga_sayur>
// Sisa uangmu: <sisa_uang>
```
Namun, jika uang kamu tidak cukup, berikan info:
``` javascript
// Uang kamu tidak cukup untuk membeli <nama_sayur>
```

**Lakukan urutan pembelian sbb: cucumber - spinach - sweetPotato - durian**

```javascript
// testcase
Farmer {
  ...
  bags: [
    Vegetable {...},
    Vegetable {...},
    Vegetable {...}
  ]
}
```

## Release 3
Saatnya mulai menanam!
<br>
Buatlah class baru bernama `Farm` dengan data name, vegetables, bins.
<br>

`Farmer` akan melakukan proses `farming` dengan memilih sayuran apa yang akan ditanam. 
Buatlah sebuah method `farming` dengan menerima 2 parameter berupa `Vegetable` dan lokasi `Farm` tersebut, dan ketika itu dieksekusi maka sayur yang ada pada bags, pindah ke vegetables `Farm` dan status planted pada `Vegetable` tersebut akan menjadi `true`. Jangan lupa berikan informasi sbb:
``` javascript
// Kamu Berhail menanam <nama_sayur>
```
dan jika tidak ada vegetable tersebut pada bags kamu, infokan:
``` javascript
// Tidak ada <nama_sayur> di bags kamu
```
**Lakukan urutan farming sbb: spinach - durian - cucumber - sweetPotato**

```javascript
Farm {
  name: "HacktivFarm",
  vegetables: [
    Vegetable {
      ...
      planted: true
    },
    ...
  ],
  bins: []
}
```
> PERHATKAN! lakukan cara terbaik untuk merubah data pada constructor

## Release 4
Tidak hanya melakukan `farming`, sebagai petani agar tanaman tersebut bisa dijual, maka `Farmer` memiliki method bernama `watering` yang menerima 1 parameter `Farm`.

Adapun alur sayuran tersebut bisa dijual:
- Saat melakukan `watering`, maka waterPoin pada semua sayuran pada `Farm` akan bertambah 1.
```javascript
// <nama_sayur> berhasil disiram
```
- Jika sisa bagi waterPoin terhadap avalaiblePoin adalah 0, maka sayur tersebut akan tercopy dan masuk ke dalam bins pada class `Farm`.
Contoh, jika sayur tersebut memiliki avalaiblePoin 2, dan maxWater adalah 4, maka sayur tersebut akan ada 2 di dalam bins. berikan info jika sayur tersebut masuk ke dalam bins
```javascript
// <nama_sayur> masuk ke dalam bins
```
- Jika waterPoin sama dengan maxWater, maka sayuran tersebut akan hilang/ habis dari list vegetables dalam Farm tesebut

Berikan informasi
```javascript
// <nama_sayur> sudah selesai masa panen!
```
**lakukan proses `watering` sebanyak 15 kali, maka semua sayur SEHARUSNYA habis dan siap dijual!**

## Release 5
"Siapa yang menanam, dia yang akan menuai"
<br> Setelah lelah bekerja, saatnya kita menerima hasil penjualan hasil panennya! Yey!

Buatlah method `sellingBins` pada `Farmer` yang menerima 1 parameter berupa `Farm`, proses ini akan mengakumulasi hasil penjualan (harga jual pada vegetable) dan menambahkan uang tersebut kepada `Farmer`. jangan lupa, bins pada `Farm` akan habis terjual :D

```javascript
// Kamu berhasil mendapatkan <total_uang_yang_didapat>
// Uang kamu sekarang maenjadi <money>
```

Loh nikahnya gimana? Hanya yang Maha Jodoh yang tahu :D
Good Luck!

### All Testcase
jika kalian mengikuti release, harusnya urutannya sbb
``` terminal
Halo! saya Alex
Mohon bantu saya ya!
Halo! saya Keren
Salam kenal ya -.^
Berhasil membeli cucumber seharga 400
Sisa uangmu: 4600
Berhasil membeli spinach seharga 500
Sisa uangmu: 4100
Berhasil membeli sweet potato seharga 500
Sisa uangmu: 3600
Uang kamu tidak cukup untuk membeli durian
Kamu berhasil menanam spinach
Kamu berhasil menanam cucumber
Kamu berhasil menanam sweet potato
Tidak ada durian di bags kamu
spinach berhasil disiram
cucumber berhasil disiram
sweet potato berhasil disiram
spinach berhasil disiram
cucumber berhasil disiram
sweet potato berhasil disiram
spinach berhasil disiram
cucumber berhasil disiram
sweet potato berhasil disiram
sweet potato berhasil masuk ke bin!
spinach berhasil disiram
spinach berhasil masuk ke bin!
cucumber berhasil disiram
sweet potato berhasil disiram
spinach berhasil disiram
cucumber berhasil disiram
cucumber berhasil masuk ke bin!
sweet potato berhasil disiram
spinach berhasil disiram
cucumber berhasil disiram
sweet potato berhasil disiram
sweet potato berhasil masuk ke bin!
spinach berhasil disiram
cucumber berhasil disiram
sweet potato berhasil disiram
spinach berhasil disiram
spinach berhasil masuk ke bin!
cucumber berhasil disiram
sweet potato berhasil disiram
spinach berhasil disiram
cucumber berhasil disiram
sweet potato berhasil disiram
sweet potato berhasil masuk ke bin!
spinach berhasil disiram
cucumber berhasil disiram
cucumber berhasil masuk ke bin!
sweet potato berhasil disiram
cucumber sudah selesai masa panen!
spinach berhasil disiram
sweet potato berhasil disiram
spinach berhasil disiram
spinach berhasil masuk ke bin!
sweet potato berhasil disiram
sweet potato berhasil masuk ke bin!
spinach sudah selesai masa panen!
sweet potato berhasil disiram
sweet potato berhasil disiram
sweet potato berhasil disiram
sweet potato berhasil masuk ke bin!
sweet potato sudah selesai masa panen!
===== sebelum dijual =====
Farm {
  name: 'HacktivFarm',
  vegetables: [],
  bins:
   [ { name: 'sweet potato',
       waterPoin: 3,
       avalailePoin: 3,
       maxWater: 15,
       buy: 500,
       sell: 200,
       planted: true },
     { name: 'spinach',
       waterPoin: 4,
       avalailePoin: 4,
       maxWater: 12,
       buy: 500,
       sell: 300,
       planted: true },
     { name: 'cucumber',
       waterPoin: 5,
       avalailePoin: 5,
       maxWater: 10,
       buy: 400,
       sell: 300,
       planted: true },
     { name: 'sweet potato',
       waterPoin: 6,
       avalailePoin: 3,
       maxWater: 15,
       buy: 500,
       sell: 200,
       planted: true },
     { name: 'spinach',
       waterPoin: 8,
       avalailePoin: 4,
       maxWater: 12,
       buy: 500,
       sell: 300,
       planted: true },
     { name: 'sweet potato',
       waterPoin: 9,
       avalailePoin: 3,
       maxWater: 15,
       buy: 500,
       sell: 200,
       planted: true },
     { name: 'cucumber',
       waterPoin: 10,
       avalailePoin: 5,
       maxWater: 10,
       buy: 400,
       sell: 300,
       planted: true },
     { name: 'spinach',
       waterPoin: 12,
       avalailePoin: 4,
       maxWater: 12,
       buy: 500,
       sell: 300,
       planted: true },
     { name: 'sweet potato',
       waterPoin: 12,
       avalailePoin: 3,
       maxWater: 15,
       buy: 500,
       sell: 200,
       planted: true },
     { name: 'sweet potato',
       waterPoin: 15,
       avalailePoin: 3,
       maxWater: 15,
       buy: 500,
       sell: 200,
       planted: true } ] }
Kamu berhasil mendapatkan 2500
Uang kamu sekarang maenjadi 6100
===== setelah dijual =====
Farm { name: 'HacktivFarm', vegetables: [], bins: [] }
Farmer { name: 'Alex', money: 6100, marriageStatus: false, bags: [] }
```
