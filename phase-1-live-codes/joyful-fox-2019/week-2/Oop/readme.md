# Yudhistira Bank
##### Estimasi waktu: 120 Menit

## Summary

Yudhistira Bank adalah lembaga keuangan milik Yudhistira Group. Salah satu Lembaga Keuangan Bank yang baru merintis di Indonesia

Seperti layanan bank pada umumnya, setiap Member dapat melakukan Transaction seperti debet, credit, atau transfer antar member

Kamus :
- `credit` adalah proses menyetor / menyimpan uang ke Bank
- `debet` adalah proses mengambil / tarik tunai dari Bank

## Release 0

**Bank** memiliki properti, yaitu:

1. name = nama dari bank
2. members = list semua member yang terdaftar di bank tersebut

**Person** memiliki properti, yaitu:

1. name = nama dari person
2. bankAccount = object member

**Member** atau keanggotaan memiliki beberapa properti, yaitu:

1. memberName = nama dari person
2. accountNumber = nomor akun dari member
3. minimumBalance = batas saldo minimum
4. balance = saldo member, selalu diupdate bila melakukan transaksi
5. transactions = list transaksi apa saja yang pernah dilakukan
6. type = jenis keanggotaan ( 'platinum' atau 'silver')


Terdapat 2 jenis keanggotaan pada Yudhistira Bank, yaitu:  

**PlatinumMember**
  memiliki properti default :
  1. minimumBalance: 50000
  2. type: 'platinum'

**SilverMember**
  memiliki properti default :
  1. minimumBalance: 10000
  2. type: 'silver'

  Buatlah kelas-kelas yang dibutuhkan untuk memenuhi requirement diatas.


## Release 1

Buatlah method `register` pada Bank, yang akan menambahkan member baru ke properti members, 
- Jika tipe akun adalah 'platinum' maka member yang akan ditambahkan adalah instance dari class PlatinumMember
- Jika tipe akun adalah 'silver' maka member yang akan ditambahkan adalah instance dari class SilverMember
- Setiap kali member dibuat, maka kalian harus men-generate isi properti accountNumber, dari 1000-10000. Isi accountNumber tidak boleh ada yang sama (harus unik)
- Setiap kali pendaftaran member baru, maka object member akan dimasukkan ke dalam properti bankAccount di person. 

Validasi method `register`:
- Saldo pendaftaran awal harus lebih besar atau sama dengan minimumBalance.

```javascript
let yudhistiraBank = new Bank('Yudhistira Bank')
let nadia = new Person('Nadia')

yudhistiraBank.register(nadia, 'platinum', 30000)
// Saldo awal kurang dari minimum saldo yang ditentukan

yudhistiraBank.register(nadia, 'platinum', 50000)
//Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 50000

console.log(yudhistiraBank.members)
/*
[
    Platinum {name: "Nadia", ... },
]
*/
```


## Release 2
> Untuk pembuatan member bank pertama kali, member **harus** mempunyai 1 transaksi `credit` untuk penyetoran saldo awal.

**Transaction** yang memiliki properti sebagai berikut:
1. nominal = jumlah uang yang di transaksikan
2. status = jenis transaksi yang dilakukan, hanya `credit`  atau `debet`
3. date = Tanggal transaksi dibuat dan merupakan tanggal HARI INI. Format date harus seperti di contoh.
4. note = catatan tambahan


```javascript
// SAMPLE DRIVER CODE
let nadiaAccount = nadia.bankAccount

console.log(nadiaAccount.transactions)
/*
[
    Transaction 
    {nominal: 50000, status:'credit', date:"2019-10-09T12:22:35.046Z", note:'First Credit'} 
]   
*/
```

## Release 3 

Buatlah method `debet` dan `credit` pada member.

**Rule debet - credit**
- Balance (saldo) member, selalu diupdate setiap kali melakukan transaksi credit/debet.
- date merupakan tanggal hari ini. 

Validasi method `debet`: 
- Tidak boleh melakukan debet jika melebihi saldo member.
- Tidak boleh melakukan debet jika saldo member kurang atau sama dengan minimumBalance.

Validasi method `credit`:
- Tidak boleh melakukan credit jika uang yang di setor kurang dari **10000**


```javascript
// SAMPLE DRIVER CODE

nadiaAccount.credit(300000)
// Anda sukses menyimpan uang ke dalam bank.

nadiaAccount.credit(1000)
// Belum memenuhi minimal uang yang dapat di setor

nadiaAccount.debet(200000, 'Beli Keyboard')
// Anda sukses menarik uang dari bank

nadiaAccount.debet(480000, 'Beli Keyboard Lagi')
// Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.

nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')
// Saldo anda tidak cukup

console.log(nadiaAccount.transactions)
/*
[
    Transaction { nominal: 50000, date: "2019-10-09T12:22:35.046Z", status: "credit",note: "First Credit" },
    Transaction{ ... },
    ...
]
*/
```

## Release 4

Buatlah method `transfer` pada member.

**Rule Transfer**
- Balance (saldo) pengirim dan penerima, selalu diupdate setiap kali melakukan transfer.
- Pada pengirim, status transaksi adalah `debet`
- pada penerima status transaksi adalah `credit`


```javascript
// SAMPLE DRIVER CODE

nadiaAccount.transfer(semmiAccount, 100000)
// Anda sukses transfer ke Semmi Verian

nadiaAccount.transfer(semmiAccount, 1000000)
// Anda gagal transfer ke Semmi Verian

console.log(nadiaAccount.transactions)
/*
[
    ...
    Transaction{ ... },
    ...
    Transaction{ nominal: 100000, status: "debet",date: "2019-10-09T12:22:35.046Z", note: "Transfer to Semmi Verian"}
]
*/

console.log(semmiAccount.transactions)
/*
[
    ...
    Transaction{ ... },
    ...
    Transaction{ nominal: 100000, status: "credit", date: "2019-10-09T12:22:35.046Z", note: "Transfer from Nadia"}
]
*/
```