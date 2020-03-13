# Penyewaan Property
> ⏰ time estimation: ?? minutes

Kali ini kamu akan diminta membuat sebuah sistem penyewaan property dengan menggunakan metode OOP (Object Oriented Programming).

----

## RELEASE 0

Terdapat 2 jenis `Property` yang tersedia yaitu:
  - `Kosan`
  - `Kontrakan`

Dimana akan selalu memiliki propperty berikut:
  - `alamat`
  - `luas`
  - `hargaSewa`
  - `furnitures` (daftar furniture yang ada di ikut disewakan bersama property tersebut)

Untuk `Kosan` memiliki property berikut:
  - `kamarMandi` ( true jika tersedia kamar mandi di dalam dan false jika diluar)

Untuk `Kontrakan` memiliki property berikut:
  - `jumlahRuangan`

#### Buatlah class yang sesuai dengan ketentuan diatas 
#### Buatlah geter kapasitas dengan ketentuan berikut
- Akan mengembalikan nilai jumlah orang yang dapat menempati properti tersebut dengan ketentuan :
  1. Untuk kosan sejumlah `luas` / 7 dibulatkan ke atas
  2. Untuk kontrakan sejumlah `jumlahRuangan` * 2



## RELEASE 1
#### Buatlah class furnitur 
Setiap `furniture` akan memiliki property sebagai berikut:
  - `nama`
  - `hargaSewa`

#### Buatlah Method addFurniture 
Method ini akan berfungsi menambakan sebuah `furniture` ke dalam property `furnitures` pada `property` yang di pilih.\
Setiap penambahan furniture maka akan menambahkan `hargaSewa` pada `property` sejumlah `hargaSewa` dari `furniture` tersebut.

Note :
```
Pertimbangkanlah pada `class` manakah `method` ini berada ?
Relasi manakah yang lebih tepat apakah `Aggregation` atau `Composition` ?
```

~ Good Luck ~





