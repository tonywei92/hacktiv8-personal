# Yudhistira Bank

![alt text](logo.jpg 'Logo Title Text 1')

## Summary

Yudhistira Bank adalah lembaga keuangan milik Yudhistira Group. Salah satu Lembaga Keuangan Bank terbesar di Indonesia

Seperti layanan bank pada umumnya, setiap Member dapat melakukan Transaction seperti debet, credit, transfer antar member

Kamus :

- credit adalah proses menyetor / menyimpan uang ke Bank
- debet adalah proses mengambil / tarik tunai dari Bank

## Release 0

Setiap Bank memiliki properti sebagai berikut :

```
name = nama dari bank
members = list semua member yang sudah terdaftar di bank tersebut
```

Semua jenis Membership memiliki beberapa properti diantaranya:

```
account_number = nomor akun dari member
name = nama member
balance_minimum = saldo endapan, artinya setiap member tidak boleh debet yang menyebabkan saldo nya lebih kecil dari saldo minimum
balance = saldo akhir, selalu diupdate bila melakukan transaksi
transactions = list transaksi apa saja yang pernah dilakukan
type = jenis keanggotaan ( platinum, gold, atau silver)
```

Terdapat 3 jenis keanggotaan pada Yudhistira Bank dengan beberapa perbedaan property

```
Platinum
  memiliki properti default :
  1. balance_minimum = 50000
  2. admin_rate = 10000
Gold
  memiliki properti default :
  1. balance_minimum = 30000
  2. admin_rate = 5000
Silver
  memiliki properti default :
  1. balance_minimum = 10000
  2. admin_rate = 2000
```

setiap Membership dapat melakukan Transaction yang memiliki data sebagai berikut:

```
date = tanggal transaksi dibuat
nominal = jumlah uang yang di transaksikan
status = jenis transaksi yang dilakukan, hanya `credit`  atau `debet`
note = catatan tambahan
```

**Buatlah class - class yang diperlukan**

**Buatlah dua member dengan data sebagai berikut**

- name: Dimas , balance_minimum: 50000, admin_rate: 10000 , balance: 500000, type: Platinum, saldo_awal: 500000
- name: Semmi Verian, balance_minimum: 30000, admin_rate : 5000, type: Gold, saldo_awal: 50000

```
saldo awal merupakan transaksi (credit) pertama kali yang dilakukan member ketika membuka akun bank.

Format awal transaksi
  status: 'credit'
  date: 1
  note: 'First Credit'
  nominal: { nominal }
```

**Check , apakah data transaksi pertama sudah masuk ke data member ?**

```javascript
console.log(dimas.transactions)
/*
[
    Transaction 
    {nominal: 500000, status:'credit', date:1, note:'First Credit'} 
]   
*/
```

## Release 1 - Register Membership

Buatlah class `Bank` yang dapat menyimpan data - data seluruh member pada property `members`. Bank tersebut juga memiliki method untuk mendaftarkan member baru yang datanya akan dimasukkan ke dalam property `members`.

> Member yang dapat di daftarkan ke dalam bank harus merupakan instance dari class Membership yang tersedia.

> Ketika member di daftarkan maka, member tersebut akan mendapatkan account_number yang berupa angka random dari **1000** sampai **10000**

```javascript
let yudhistiraBank = new Bank('Yudhistira Bank')

yudhistiraBank.register(dimas)
yudhistiraBank.register(semmi)

// outpu: Selamat datang ke {bank_name} {member_name}, Nomor Akun anda adalah { account_number}
```

**Check , apakah data Membership sudah masuk ke property members pada Bank ?**

```javascript
console.log(yudhistiraBank.members)
/*
[
    Platinum {name: "Aries Dimas", ... },
    Gold {name: "Semmi Verian", ... }
]
*/
```

## Release 2 - debet dan credit

**Rule debet - credit**

- Balance (saldo), selalu di update setiap kali melakukan transaksi
  credit/debet.
- Tidak boleh melakukan debet melebihi balance yang dimiliki user.
- Hanya dapat melakukan credit jika uang yang di setor melebihi atau sama dengan **20000**
- Hanya boleh melakukan debet ketika balance member tersebut lebih besar dari balance_minimum
- Date dari debet/credit merupakan tanggal hari ini.

```javascript
console.log(dimas.credit(100000))
// Anda sukses menyimpan uang ke dalam bank

console.log(dimas.credit(1000))
// Belum memenuhi minimal uang yang dapat di setor

console.log(dimas.debet(200000, 'Beli Keyboard'))
// Anda sukses menarik uang dari bank

console.log(dimas.debet(480000, 'Beli Keyboard'))
// Saldo minimun anda tidak terpenuhi ketika melakukan transaksi

console.log(dimas.debet(600000, 'Bisa gak ya lebih besar dari balance ? '))
// Saldo anda tidak cukup
// data transaksi ini tidak masuk ke `transactions` di members
```

**Check `transactions` disetiap Membership**

```javascript
console.log(dimas.transactions)
/*
[
    Transaction { nominal: 500000, date: 1,status: "credit",note: "First Credit" },
    Transaction{ ... },
    Transaction{ ... },
    Transaction{ ... },
    ...
]
*/
```

## Release 3 - Transfer

**Rule Transfer**

- Nominal yang ingin dikirim tidak boleh dibawah 20000
- Nominal nya tidak boleh lebih dari balance / saldo
- Balance / saldo tidak boleh kurang dari balance_minimum / saldo minimum
- Pada pengirim status transaksinya adalah debet sedangkan pada penerima status transaksinya adalah credit
- Date dari transaksi merupakan tanggal hari ini.

```javascript
// Membership melakukan transaksi
dimas.transfer(semmi, 100000)

// Anda sukses transfer ke semmi verian

// Maka, tampilan data transaksi sebagai Pengirim transfer di Membership dimas adalah
console.log(dimas.transactions)
/*
[
    ...
    Transaction{ ... },
    Transaction{ ... },
    ...
    Transaction{ nominal: 100000, status: "debet",date: 9, note: "Transfer to Semmi Verian"}
]
*/

// tampilan data transaksi sebagai Penerima transfer di Membership semmi adalah
console.log(semmi.transactions)
/*
[
    ...
    Transaction{ ... },
    Transaction{ ... },
    ...
    Transaction{ nominal: 100000, status: "credit", date: 9, note: "Transfer from Aries Dimas"}
]
*/
```
