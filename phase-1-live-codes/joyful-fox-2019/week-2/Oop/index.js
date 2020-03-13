
let yudhistiraBank = new Bank('Yudhistira Bank')
let nadia = new Person('Nadia')
yudhistiraBank.register(nadia, 'platinum', 30000)
// Saldo awal kurang dari minimum saldo yang ditentukan
yudhistiraBank.register(nadia, 'platinum', 50000)
//Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 50000

let nadiaAccount = nadia.bankAccount
console.log(nadiaAccount.transactions)


/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
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


let semmi = new Person('Semmi Verian')
yudhistiraBank.register(semmi, 'silver', 10000000)
let semmiAccount = semmi.bankAccount

nadiaAccount.transfer(semmiAccount, 100000)
// Anda sukses transfer ke Semmi Verian
nadiaAccount.transfer(semmiAccount, 1000000)
// Anda gagal transfer ke Semmi Verian
