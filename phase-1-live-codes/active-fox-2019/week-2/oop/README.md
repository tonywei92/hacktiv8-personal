# VENDING MACHINE

Kamu akan membuat sebuah prototype Vending Machine sederhana. Berikut requirement dari Vending Machine tersebut.

Saat pertama kali `vending machine` terbuat, `vending machine` tidak memiliki jenis minuman apapun. Minuman akan tersedia jika sebuah proses penambahan dilakukan.

1. Terdapat 3 jenis `Minuman/Beverage` yaitu `Coke`, `Tea` dan `Coffee`. Dimana setiap jenis minuman memiliki:
  - name
  - price

  Khusus untuk `Coffee` dan `Tea` akan memiliki attribute khusus yaitu `caffeine` dimana untuk `Coffee` value-nya adalah 40mg dan untuk `Tea` value-nya adalah 11mg

  Harga dari `Coke` adalah 15000
  Harga dari `Tea` adalah 5000
  Harga dari `Coffee` adalah 18500

2. `Vending Machine` memiliki attribute:
  - saldo
  - minuman
  - pecahanUang


## RELEASE 0
Buatlah class-class yang diperlukan untuk mengimplementasikan `Minuman` (Coba kamu pikirkan apakah memerlukan inheritance, composition, aggreagtion)

## RELEASE 1
- Implementasikan `Vending Machine` dimana attribute-nya memiliki default value:
    - saldo: 0
    - minuman: {}
    - pecahanUang:
        {
          100000: 0,
          50000: 0,
          20000: 0,
          10000: 0,
          5000: 0,
          1000: 0,
          500: 0
        };


- Buatlah method **setter** untuk meng-assign value `pecahanUang`. method setter ini menerima input parameter berupa string

  ```
    /*example paramater*/
    let listPecahanUang = '10000=2;5000=3'
  ```

  Dimana value `pecahanUang` akan bertambah sesuai dengan parameter yang telah diberikan

## RELEASE 2
Buatlah method refill yang menerima parameter berupa object literal, dimana method ini berfungsi untuk mengisi `Vending Machine` dengan jenis minuman sesuai dengan parameter yang telah diinput.

```
/* example parameter*/
let list = {
  Coke: 2,
  Tea: 1
}
```

Output dari release ini adalah attribute `minuman` pada `Vending Machine` akan berisi object literal yang berisi dengan keyName sesuai minuman yang terdapat di-list dimana value-nya adalah **array of Objcet Class**

```
{ Coke:
   [ [Object object],
     [Object object] ],
  Tea: [ [Object object] ] }
```

**UNTUK RELEASE INI: PROSES HARUS DINAMIS (JIKA TIDAK MAKA SCORE YANG DIDAPATKAN HANYA 60% DARI RELEASE INI)**

## RELEASE 3
- Buatlah method inputUang pada `Vending Machine` yang memiliki parameter uang bertipe number. Method ini berfungsi untuk mengisi saldo sesuai dengan parameter.

`Vending Machine` hanya menerima saldo tidak kurang dari 5000

- Buatlah method beliMinuman yang memiliki parameter pilihan minuman bertipe string. Method ini berfungsi untuk membeli minuman dimana:
  - Jika `saldo` tidak cukup/kurang dari 5000 maka tampilkan "Sorry, insufficient balance"

  - jika minuman yang dipilih tidak terdapat pada attribute `minuman` maka tampilkan "Sorry, [namaMinuman] unavailable for this Vending Machine"

  - jika minuman yang dipilih telah habis maka tampilkan "Sorry, [namaMinuman] out of stock"

  - Jika minuman tersedia, tampilkan
  ```
  "Enjoy your drink: [namaMinuman].
  Your change(s):
    xxxxx x lembar
    xxxx x lembar
    dst
  ```

  Value `minuman` akan berkurang (sesuai dengan minuman yang dipilih), value `saldo` berkurang, value `pecahanUang` akan berkurang sesuai dengan kembalian yang diberikan

  **NOTE**
  (gunakanlah logic yang kamu telah buat di part **logic** untuk memenuhi requirement ini)

  - Jika pecahanUang yang tersedia tidak mencukupi uang untuk kembalian  maka tampilkan "Not have sufficient change(s)". Value `pecahanUang` tidak berkurang, value `minuman` tidak berkurang dan value `saldo` tidak berkurang
