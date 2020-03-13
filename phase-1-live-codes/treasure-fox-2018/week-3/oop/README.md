# Manufaktur Mobil
Sebuah pabrik mobil bisa memproduksi berbagai macam mobil berdasarkan kategori nya. setiap mobil memiliki kategori dan property yang berbeda. 
buatlah sebuah class `CarFactory` (pabrik mobil) yang bisa memproduksi berbagai macam tipe mobil dan tambahkan kategori nya.

## Release 1
Berikut list mobil yang di buat dari class `Car` dan disimpan di class `CarFactory`
```text
AVENZO
name: "Avenzo"
category: "MVP"
seats: 7

INNAVO
name: "Innavo"
category: "MVP"
seats: 7

TAYETO 86
name: "Tayeto 86"
code: 'tayeto'
category: "Sport"
seats: 2

MIACE
name: "Miace"
category: "Minibus Van"
seats: 15
```

Dari data di atas tentukan apakah kita membutuhkan class lain yang memiliki keterikatan satu dan lainnya ?

Tambahkan method `produceCar` dengan menggunakan metode `aggregation` pada class `carFactory` dan method untuk menampilkan semua mobil yang telah di produksi dengan spesifikasi sebagai berikut:
```javascript

CarFactory.produceCar(avenzo, 10) // 10 merupakan jumlah mobilnya
CarFactory.produceCar(tayeto, 5)
CarFactory.produceCar(innavo, 1)
CarFactory.produceCar(miace, 9)

CarFactory.cars()  // akan menampilkan 25 list mobil 
```

## Release 2
Buatlah method `filter` berdasarkan kategori pada class `CarFactory`
```javascript
CarFactory.filter('mvp') // menampilkan list mobil berkategori 'MVP' 
```

## Release 3
Mobil yang di produksi bisa di distribusikan ke dealer, buatlah method untuk mendistribusikan mobil-mobil tersebut berdasarkan nama maupun kategori.
```javascript
CarFactory.cars()  // akan menampilkan 25 list mobil 
CarFactory.distribute('mvp', 5)
CarFactory.distribute('miace', 10)
CarFactory.cars()  // akan menampilkan 10 list mobil
```