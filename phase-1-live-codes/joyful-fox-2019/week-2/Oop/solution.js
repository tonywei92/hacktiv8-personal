class Bank {
  constructor(name){
    this.name = name 
    this.members = [] 
  }

  register(person, type, firstBalance){
    let success = false
    let member = null

    if (type === 'platinum' && firstBalance >= 50000){
      member = new PlatinumMember(person.name, Math.round(Math.random()*1000000), firstBalance)
      success = true
    } 
    else if (type === 'silver'&& firstBalance >= 10000){
      member = new SilverMember(person.name, Math.round(Math.random()*1000000), firstBalance)
      success = true
    }

    if (success) {
      this.members.push(member)
      person.bankAccount = member
      console.log(`Selamat datang ke ${this.name}, ${person.name}. Nomor Akun anda adalah ${member.accountNumber}. Total saldo adalah ${member.balance}
      `)
    } else if (!success) {
      console.log("Saldo awal kurang dari minimum saldo yang ditentukan")
    }
  }
}

class Person {
  constructor(name, bankAccount) {
    this.name = name 
    this.bankAccount = bankAccount || null
  }
}

class Member {
  constructor(memberName, accountNumber, minimumBalance, balance, type){
    this.memberName = memberName
    this.accountNumber = accountNumber
    this.minimumBalance = minimumBalance
    this.balance = 0
    this.transactions = []
    this.type = type
    this.credit(balance, 'First Credit', 'First Transaction')
  }

  credit(nominal, note, creditType){
    if (nominal < 10000) {
      console.log("Belum memenuhi minimal uang yang dapat di setor")
      return
    }

    let transaction = null
    this.balance += nominal
    transaction = new Transaction(nominal, 'credit', note)
    this.transactions.push(transaction)

    if (!creditType){
      console.log("Anda sukses menyimpan uang ke dalam bank.")
    }
  }

  debet(nominal, note, debetType) {
    if (nominal > this.balance) {
      console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.")
      return
    }

    let transaction = null
    this.balance -= nominal
    transaction = new Transaction(nominal, 'debet', note)
    this.transactions.push(transaction)

    if (!debetType){
      console.log("Anda sukses menarik uang dari bank.")
    }
  }

  transfer(recipient, nominal){
    if(nominal > this.balance) {
      console.log(`Anda gagal transfer ke ${recipient.memberName}`)
      return 
    }

    this.debet(nominal, `Transfer ke ${recipient.memberName}`, 'transfer')
    recipient.credit(nominal,  `Transfer dari ${this.memberName}`, 'transfer')
    console.log(`Anda sukses transfer ke ${recipient.memberName}`)
  }
}

class PlatinumMember extends Member{
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 50000, balance, 'platinum')
  }
}

class SilverMember extends Member {
  constructor(memberName, accountNumber, balance) {
    super(memberName, accountNumber, 10000, balance, 'silver')
  }
}

class Transaction {
  constructor(nominal, status, note) {
    this.nominal = nominal
    this.status = status
    this.date = new Date().toISOString()
    this.note = note || ''
  }
}

let yudhistiraBank = new Bank('Yudhistira Bank')
let nadia = new Person('Nadia')
yudhistiraBank.register(nadia, 'platinum', 30000)
// Saldo awal kurang dari minimum saldo yang ditentukan
yudhistiraBank.register(nadia, 'platinum', 50000)
//Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 50000

let nadiaAccount = nadia.bankAccount

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
