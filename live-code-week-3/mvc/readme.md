<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 3

# 7 Days Boba Festive 

![MVC/SQLITE3/CALLBACK](https://img.shields.io/badge/Tech%20Stack-MVC%2FSQLITE3%2FCALLBACK-green.svg)

> ⏰ Time limit: **120 min**

Boba Festival kini hadir kembali selama 7 hari!
Kamu akan diminta untuk membuat app sederhana untuk me-_manage_ pesanan dari setiap customer suatu booth menggunakan _command-line_.

App ini akan dibangun menggunakan arsitektur `MVC`, `sqlite3` dan menggunakan `callback`.
> Tidak diperkenankan menggunakan Pragma.

<br />

### Release 0
Telah disediakan file `package.json`, `setup.js`, dan `seed.js` untuk membuat *database* dan *table* yang diperlukan. Jadi, kamu hanya perlu menjalankan perintah ini sebelum memulai coding:
```bash 
npm install
node setup.js
node seed.js
```

Ada dua tabel yang akan digunakan, yaitu `customers` dan `orders`. Berikut penjelasan masing-masing tabel:

#### Tabel `customers`
| Field | Description   | Data Type |
| ----- | ------------- | --------- |
| id    | ID customer   | INTEGER   |
| name  | Nama Customer | TEXT      |

  

#### Tabel `orders`
| Field      | Description                                 | Data Type |
| ---------- | ------------------------------------------- | --------- |
| id         | ID Order                                    | INTEGER   |
| customerId | ID Customer                                 | INTEGER   |
| quantity   | Kuantitas pembelian                         | INTEGER   |
| totalPrice | Total harga sebanyak quantity               | INTEGER   |
| day        | Hari pembelian                              | INTEGER   |
|            | (value antara 1-7)                          |           |
| itemName   | Nama Item                                   | TEXT      |
| status     | Status Order                                | TEXT      |
|            | (value antara 'processed' atau 'completed') |           |
|            |                                             |           |



Buatlah interface pada `index.js` yg menerima _argument_ dari _command line_, beserta helpnya, berikut daftar _commands_-nya:

```
node index.js order:all <customerName> <day>
node index.js order:complete <orderId>
node index.js order:create <customerName> <day> <itemName> <pricePerItem> <quantity>
node index.js order:omzet <day>
node index.js customer:delete <customerName>
```

1. Buatlah fungsi `All` pesanan/order berdasarkan customerName dan day:

   Contoh item yang disediakan adalah: (List item di-hardcode, tidak perlu dibuat)
      - Boba Milk, harga per item: Rp. 40000
      - Wanzo, harga per item: Rp. 35000
      - Kokumi, harga per item: Rp. 45000
      - Sushi Boba, harga per item: Rp. 30000
  
  Validasi bila pesanan di hari tersebut tidak ada:
  ```bash
  $ node index order:all Stefani 2 
    ERROR
    ================
    Customer Stefani tidak mempunyai pesanan di hari-ke 2
  ```

  Bila Berhasil, tampilkan id, itemName, quantity, totalPrice dan status
  
  ```bash
  $ node index order:all Stefani 1   
    Day: 1
    Nama Customer: Stefani
    [id-1].   Wanzo      2        Rp.70000  processed  
    [id-2].   Boba Milk      1        Rp.40000  processed
  ```
<br />

2. Buatlah fungsi `Update` untuk mengubah status pesanan/order menjadi `completed`:
  
  Validasi bila orderId tidak ada:
  ```bash
  $ node index order:complete 50  
    ERROR
    ================
    Pesanan tidak terdaftar
  ```


  ```bash
  $ node index order:complete 2  
    SUCCESS
    ================
    Pesanan [id-2] Boba Milk atas nama Stefani sudah bisa diambil
  ```

<br />
<br />

## Release 2

Buatlah fungsi `Create` order berdasarkan customerName, day, itemName, pricePerItem, quantity:

  ### Rules: 
  1. Booth ini hanya menyediakan 25 kuantiti untuk setiap item, per harinya.
  2. Satu Customer hanya dapat memesan maksimal 5 item per hari. (Boleh campur)
  3. Status awal pesanan adalah `processed`

  Validasi bila day yang dimasukkan melebihi 7 hari:

  ```bash
    $ node index order:create Billy 8 "Boba Milk" 40000 1
    ERROR
    ================
    Penjualan hanya sampai hari ke-7
  ```


  Validasi bila customer tidak ditemukan:

  ```bash
    $ node index order:create Billy 1  "Boba Milk" 40000 1
    ERROR
    ================
    Customer dengan nama Billy tidak terdaftar
  ```

  Validasi bila total pesanan sudah melebihi batas. 
  > Cek berdasarkan total item yang dapat customer beli per hari **dan** total item yang disediakan oleh booth):

  ```bash
    $ node index order:create Toni 1 Wanzo 35000 1
    ERROR
    ================
    Hi Toni, pesanan kamu tidak bisa diproses karena sudah melebihi batas maksimal jumlah per hari.
  ```

Bila pesanan berhasil dilakukan, tampilkan pesan:

  ```bash
    $ node index order:create Isro 1  "Boba Milk" 40000 1
    Hi Isro, pesanan kamu sedang diproses ya.. 
    Untuk hari ke-1 ini, kamu sudah memesan sebanyak 3 boba item
    Kamu masih bisa memesan sekitar 2 boba item lagi.
    ================
    Ditunggu pesanan selanjutnya!
  ```

<br />
<br />

## Release 3
Buatlah fungsi `Delete` customer, fungsi ini juga menghapus semua order milik customer tersebutnya:
  
Validasi bila customer tidak ditemukan:
```bash
$ node index order:delete Billy
ERROR
================
Customer dengan nama Billy tidak terdaftar.
```

Bila berhasil: 
```bash
$ node index customer:delete Isro
SUCCESS
================  
Berhasil menghapus customer Isro dan 3 pesanan-nya.
```
<br />
<br />


## Release 4
1. Buatlah fungsi `Omzet` untuk melihat total penjualan yang didapatkan oleh booth berdasarkan hari.

```bash
$ node index order:omzet 1
SUCCESS
================
Total penjualan hari ke-1 adalah Rp.1500000
```

2. Sesuaikan tampilan `All` pesanan. Tambahkan jumlah pesanan per hari (total order), jumlah item yang dipesan (total quantity) dan total price. (Tampilan tidak harus rapi. tapi setidaknya manusiawi)

```bash
$ node index order:all Stefani 1                        
=======================================================
---------           BOBA FESTIVE          -------------
-------------------------------------------------------
Day: 1
Nama Customer: Stefani
Total Order: 2
-------------------------------------------------------
[id-1].   Wanzo       2       Rp.70000    processed
[id-2].   Boba Milk      1        Rp.40000   completed


-------------------------------------------------------
Total           Quantity: 3         Price: Rp.120000
=======================================================
```


