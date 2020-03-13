<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 3

# FireSale ECommerce

![MVC/SQLITE3/CALLBACK](https://img.shields.io/badge/Tech%20Stack-MVC%2FSQLITE3%2FCALLBACK-green.svg)

> ⏰ Time limit: **90 min**

Anda ditugaskan untuk membuat app bisnis sederhana untuk me-_manage_ penjualan produk menggunakan _command-line_.

Sederhananya app ini mengizinkan kita untuk menjual produk dengan mengurangi stok dan mencatat Log penjualan dan dapat juga melakukan CRUD produk-nya ketika dibutuhkan.

App ini akan dibangun menggunakan arsitektur `MVC`, `sqlite3` dan menggunakan `callback`.

### Release 0

Sebelum memulai lakukan `npm init` dan `npm install` untuk module yang dibutuhkan, lalu jalankan **setup** dan **seed** untuk memulai pengoperasian _SQL_.

Ada dua tabel yang akan digunakan, yaitu `products` dan `productLogs`, berikut penjelasan masing-masing tabel:

#### Tabel `products`
| Field        | Description          |
|--------------|----------------------|
| id           | ID produk            |
| category     | Kategori produk      |
| stock        | Jumlah stok produk   |
| minimalPrice | Harga minimal produk |

#### Tabel `productLogs`
| Field        | Description                             |
|--------------|-----------------------------------------|
| id           | ID log                                  |
| product_id   | ID Produk                               |
| qty          | Kuantitas pembelian                     |
| priceSatuan  | Harga produk terjual (satuan)           |
| customerName | Nama Konsumen                           |
| createdAt    | Tanggal penjualan dalam format ISO Time |



Buatlah interface pada `index.js` yg menerima _argument_ dari _command line_, beserta helpnya, berikut daftar _commands_-nya:

```
node index.js product:all
node index.js product:update:name product_id new_name
node index.js product:delete product_id
node index.js product:view product_id
node index.js product:buy product_id customer_name qty price
```


1. Buatlah fungsi-fungsi untuk `Update` product:

   - Mengubah nama product berdasarkan _id_ product.

   ```bash
   $ node index.js product:update:name 1 "Kulkas GL 2 Pintu"
   success rename product Kulkas GL 8 Pintu to Kulkas GL 2 Pintu
   ```

   ```bash
   $ node index.js product:update:name 1000 "COOLCASH GGL 10"

   ERROR
   =====
   Id product not found
   ```


### Release 1

1. Buatlah fungsi untuk `Read` semua products:

   ```bash
    $ node index.js product:all

    [1] Kulkas GL 8 Pintu (elektronik), 10 pieces, each Rp1000000
    [2] Kursi Manager Hacktiv8 (furnitur), 3 pieces, each Rp500000
    [3] Meja makan aneka rasa 2x3 (furnitur), 1 pieces, each Rp700000
    [4] Baju Mike B10 uk M grey (fashion), 8 pieces, each Rp2000000
    [5] Hp OddO v17 (elektronik), 30 pieces, each Rp5500000
    [6] Hp VOVI F7 (elektronik), 12 pieces, each Rp4200000
   ```

````

### Release 2

1. Buatlah fungsi-fungsi untuk `Create` dengan membeli produk:

```bash
  $ node index.js product:buy 1 Tony 2 1000000
    Success buy product
    Product: Kulkas GL 8 Pintu
    qty: 2
    Total: 2000000

```

```bash
   $ node index.js product:buy 1 Hardim 2000 1000000
     ERROR
     =====
     Insufficent product qty
```

```bash
    $ node index.js product:buy 1 Isro 3 100
    ERROR
    =====
    Price less than minimal price
```

```bash
    $ node index.js product:buy 8888 Nadia 3 1000000
    ERROR
    =====
    Id product not found
```

2. Buatlah fungsi untuk `Read` **satu product** dengan beserta _log_-nya:

```bash
  $ node index.js product:view 1
  [1] Kulkas GL 8 Pintu - elektronik (5)
  Tue Aug 20 2019 | Bought by Tony, 2 pieces with total Rp. 2000000
  Tue Aug 20 2019 | Bought by Hardim, 3 pieces with total Rp. 3000000
```

```bash
  $ node index.js product:view 1231293
  ERROR
  =====
  Id product not found
```

```bash
  $ node index.js product:view
  ERROR
  =====
  Input tidak lengkap!
```

3. Buatlah fungsi `Delete` product, fungsi ini juga menghapus _log_-nya:

```bash
  $ node index.js product:delete 1
  Deleted product with id 1
```

```bash
  $ node index.js product:delete 1293821
  ERROR
  =====
  Id product not found
```

```bash
  $ node index.js product:delete
  ERROR
  =====
  Input tidak lengkap!
```
