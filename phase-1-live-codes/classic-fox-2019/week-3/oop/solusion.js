class Ticket{
  constructor(price, type){
    this._ticketNumber = this.generateRandomNumber()
    this.price = price
    this.type = type
  }

  generateRandomNumber(){
    let num = Math.ceil(Math.random() * 999999);
    for (let i = String(num).length; i < 6; i++) {
      num = '0'+num
    }
    return num
  }

  checkAccess(){
    return `Tiket ini memiliki akses`
  }
}

class CinematicPass extends Ticket{
  constructor(){
    super(75000, 'CinematicPass')
  }

  get ticketNumber(){
    return `cp${this._ticketNumber}`
  }

  checkAccess(){
    console.log(super.checkAccess(), `ke wahana cinematic`)
  }
}

class DayPass extends Ticket{
  constructor(){
    super(100000, 'DayPass')
  }

  get ticketNumber(){
    return `dp${this._ticketNumber}`
  }

  checkAccess(){
    console.log(super.checkAccess(), `ke semua wahana`)
  }
}

class MemberPass extends Ticket{
  constructor(name){
    super(120000, 'CinematicPass')
    this.memberName = name
  }

  get ticketNumber(){
    return `mp${this._ticketNumber}`
  }

  checkAccess(){
    console.log(super.checkAccess(), `prioritas ke semua wahana`)
  }
}

class Gate{
  constructor(name){
    this.name = name
    this._ticketIn = []
    this._ticketOut = []
  }

  buyTicket(type, money, member){
    if(type === 'cinematicPass' && money >= 75000){
      let ticket = new CinematicPass()
      let harga = 75000
      this._ticketIn.push(ticket)
      console.log(`tiket masuk : cinematic pass dengan nomor '${ticket.ticketNumber}'`)
      if(money > harga){
        console.log(`kembalian : Rp. ${money-harga}`);
      }
      this._ticketIn.push(ticket)
      return ticket
    }
    else if(type === 'dayPass' && money >= 100000){
      let ticket = new CinematicPass()
      let harga = 100000
      this._ticketIn.push(ticket)
      console.log(`tiket masuk : day pass dengan nomor '${ticket.ticketNumber}'`)
      if(money > harga){
        console.log(`kembalian : Rp. ${money-harga}`);
      }
      this._ticketIn.push(ticket)
      return ticket
    }
    else if(type === 'memberPass' && money >= 120000){
      let ticket = new MemberPass(member)
      let harga = 120000
      this._ticketIn.push(ticket)
      console.log(`tiket masuk : member pass dengan nomor '${ticket.ticketNumber}' atas nama ${ticket.memberName}`)
      if(money > harga){
        console.log(`kembalian : Rp. ${money-harga}`);
      }
      this._ticketIn.push(ticket)
      return ticket
    }
    else{
      console.log('uang tidak cukup');
    }
  }
}

let GateA = new Gate('Gate A')
let GateB = new Gate('Gate B')
let GateC = new Gate('Gate C')
//membeli tiket Cinematic Pass
let ticket1 = GateA.buyTicket('cinematicPass', 80000)
/* output
tiket masuk : cinematic pass dengan nomor 'cp000001'
kembalian : Rp. 5000
*/
//membeli tiket Day Pass
let ticket2 = GateA.buyTicket('dayPass', 100000)
/* output
tiket masuk : cinematic pass dengan nomor 'dp000002'
*/
//membeli tiket Member Pass
let ticket3 = GateA.buyTicket('memberPass', 150000, 'Daniel')
/* output
tiket masuk : member pass dengan nomor 'mp000003' atas nama Daniel
kembalian : Rp. 30000
*/
//membeli tiket Member Pass
let ticket4 = GateA.buyTicket('memberPass', 50000, 'Anton')
/* output
uang tidak cukup
*/
console.log(GateA);



/**
 Opsional
 Buatlah method `returnTicket` pada class `Gate` yang menerima Object `Ticket` dan menyimpannya pada propperty ticketOut
 */