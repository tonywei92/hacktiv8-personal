class Passenger {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  pay(ticket) {
    ticket.status = 'paid'
    console.log(`${this.name} paid the ticket with booking code ${ticket.bookingCode}`)
  }

  checkIn(ticket, baggage = 0) {
    let msg
    if (ticket.status === 'booked') {
      msg = `Oh sorry, ${this.name} hasn't paid the ticket yet.`
    } else if (ticket.status === 'canceled') {
      msg = `The ticket was canceled.`
    } else if (ticket.status === 'checked-in') {
      msg = `${ticket.passenger.name} already checked in before.`
    } else if (this !== ticket.passenger) {
      msg = `Only ${ticket.passenger.name} can check in with this ticket.`
    } else {
      msg = `${ticket.passenger.name} checked in successfully.`
      let excessBaggage = baggage - ticket.freeBaggage
      if (excessBaggage > 0) {
        let extraFee = excessBaggage * ticket.extraBaggageFee
        msg += ` and paid ${extraFee} for extra baggage.`
      }
      ticket.status = 'checked-in'
    }
    console.log(msg)
  }
}

class Airline {
  constructor(name) {
    this.name = name
    this.flights = []
  }

  addFlight(flightCode, time, capacity) {
    let flight = new Flight(flightCode, time, capacity)
    this.flights.push(flight)
    console.log(`Flight ${flightCode} added to ${this.name}`)
    return flight
  }

  issueTicket(flight, flightClass, passenger) {
    if (!this.flights.includes(flight)) {
      console.log(`Invalid flight for ${this.name}`)
    } else {
      let ticket = null
      switch (flightClass) {
        case 'economy':
          ticket = new Economy(passenger)
          break;
        case 'business':
          ticket = new Business(passenger)
          break;
        case 'first':
          ticket = new First(passenger)
          break;
        default:
          break;
      }
      console.log(`Booking code ${ticket.bookingCode} is issued for ${passenger.name}. Please pay in 24 hours.`)
      flight.tickets.push(ticket)
      return ticket
    }
  }
}

class Flight {
  constructor(flightCode, time, capacity) {
    this.flightCode = flightCode
    this.time = time
    this.capacity = capacity
    this.tickets = []
  }

  depart() {
    console.log(`Flight ${this.flightCode} has departed with ${this.passengersInFlight} passengers, and ${this.emptySeats} empty seats`)
  }

  get passengersInFlight() {
    return this.tickets.filter(t => t.status === 'checked-in').length
  }

  get emptySeats() {
    return this.capacity - this.passengersInFlight
  }
}

class Ticket {
  constructor(price, classCode, freeBaggage, passenger) {
    this.bookingCode = Ticket.generateBookingCode(classCode)
    this.passenger = passenger
    this.status = 'booked'
    this.price = price
    this.freeBaggage = freeBaggage
    this.extraBaggageFee = 10
  }

  static generateBookingCode(initialChar) {
    return initialChar + '     '
      .split('')
      .map(c => String.fromCharCode(Math.floor(Math.random() * 26) + 65))
      .join('')
  }
}

class Economy extends Ticket {
  constructor(passenger) {
    super(200, 'Y', 0, passenger)
  }

}

class Business extends Ticket {
  constructor(passenger) {
    super(300, 'J', 20, passenger)
  }
}

class First extends Ticket {
  constructor(passenger) {
    super(400, 'F', 45, passenger)
  }

  refund() {
    let message = ''
    if (this.status === 'paid') {
      message = `${this.price} has been transfered back to ${this.passenger.name} bank account`
      this.status = 'canceled'
    } else {
      message = `This ticket can't get refund.`
    }
    console.log(message)
  }
}


let hacktivAirways = new Airline('Hacktiv Airways')
let indoAirways = new Airline('Indo Airways')

console.log(hacktivAirways)
/* 
Airline { name: 'Hacktiv Airways', flights: [] }
*/

let ht610 = hacktivAirways.addFlight('HT610', '2019-06-30 08:00', 200)
// message:
/* 
Flight HT610 added to Hacktiv Airways
*/

let js789 = indoAirways.addFlight('JS789', '2019-06-30 08:35', 180)
// message:
/* 
Flight JS789 added to Indo Airways
*/

console.log(ht610)
/* 
Flight {
  flightCode: 'HT610',
  time: '2019-06-30 08:00',
  capacity: 200,
  tickets: [] }
*/

console.log(hacktivAirways)
/* 
Airline {
  name: 'Hacktiv Airways',
  flights:
   [ Flight {
       flightCode: 'HT610',
       time: '2019-06-30 08:00',
       capacity: 200,
       tickets: [] } ] }
*/

let harry = new Passenger('Harry', 26)
let bob = new Passenger('Bob', 40)
let tian = new Passenger('Tian', 18)
let hasan = new Passenger('Hasan', 18)

console.log(harry)
/* 
Passenger { name: 'Harry', age: 26 }
*/

let harryTicket = hacktivAirways.issueTicket(ht610, 'economy', harry)
// message:
/* 
Booking code YUCEVR is issued for Harry. Please pay in 24 hours.
*/

let bobTicket = hacktivAirways.issueTicket(ht610, 'business', bob)
// message:
/* 
Booking code JZFICT is issued for Bob. Please pay in 24 hours.
*/

let tianTicket = indoAirways.issueTicket(ht610, 'economy', tian)
// message:
/* 
Invalid flight for Indo Airways
*/

let hasanTicket = indoAirways.issueTicket(js789, 'first', hasan)
// message:
/* 
Booking code FTTIKO is issued for Hasan. Please pay in 24 hours.
*/

console.log(harryTicket)
/* 
Economy {
  bookingCode: 'YUCEVR',
  passenger: Passenger { name: 'Harry', age: 26 },
  status: 'booked',
  price: 200,
  freeBaggage: 0,
  extraBaggageFee: 10 }
*/


harry.pay(harryTicket)
// message
/* 
Harry paid the ticket with booking code YUCEVR
*/

bob.pay(bobTicket)
// message
/* 
Bob paid the ticket with booking code JZFICT
*/

hasan.pay(hasanTicket)
// message
/* 
Hasan paid the ticket with booking code FTTIKO
*/

console.log(harryTicket)
/* 
Economy {
  bookingCode: 'YUCEVR',
  passenger: Passenger { name: 'Harry', age: 26 },
  status: 'paid',
  price: 200,
  freeBaggage: 0,
  extraBaggageFee: 10 }
*/

hasanTicket.refund()
// message:
/* 
400 has been transfered back to Hasan bank account
*/

console.log(hasanTicket)
/* 
First {
  bookingCode: 'FTTIKO',
  passenger: Passenger { name: 'Hasan', age: 18 },
  status: 'canceled',
  price: 400,
  freeBaggage: 45,
  extraBaggageFee: 10 }
*/

harry.checkIn(harryTicket, 10)
// message:
/* 
Harry checked in successfully. and paid 100 for extra baggage.
*/

tian.checkIn(bobTicket, 10)
// message:
/* 
Only Bob can check in with this ticket.
*/

bob.checkIn(bobTicket, 20)
// message:
/* 
Bob checked in successfully.
*/

console.log(harryTicket)
/* 
Economy {
  bookingCode: 'YRPMEK',
  passenger: Passenger { name: 'Harry', age: 26 },
  status: 'checked-in',
  price: 200,
  freeBaggage: 0,
  extraBaggageFee: 10 }
*/

ht610.depart()
// message:
/* 
Flight HT610 has departed with 2 passengers, and 198 empty seats
*/

