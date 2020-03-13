


console.log('===========RELEASE 1===============')
let hardhim = new Person('hary dhimas', 'hardhim@gmail.com', '080989999')
let isro = new Person('Isro', 'isro@gmail.com','0881239123')
let tony = new Person('Tony', 'tony@gmail.com', '0881239124')
let semmy = new Person('Semmi', 'semmy@gmail.com', '0881239124')

let gojek = new Company('gojek')
let grab = new Company('grab')

let hardhimGopay = gojek.registerUser(hardhim, 100000)
/*
  You success register your gopay ! Welcome abroad hary dhimas
*/
let isroGopay = gojek.registerUser(isro, 500000)
/*
  You success register your gopay ! Welcome abroad Isro
*/
let tonyOvo = grab.registerUser(tony, 10000)
/*
  You success register your grab ! Welcome abroad Tony
*/
let semmyOvo = grab.registerUser(semmy, 2000)
/*
  Phone number already registered
*/

console.log('===========RELEASE 2===============')
tonyOvo.orderRide(9)
/*
  Succes order ride. You need to pay 17000 more when arrived on destination
*/
hardhimGopay.orderRide(10)
/*
  Success order ride. You spent 30000 on your balance, your current balance is 70000
*/

let orderedTickets = hardhimGopay.orderTickets('movie', 'Lion King', 2)
console.log(orderedTickets)
/*
  [ MovieTicket {
    type: 'movie',
    price: 50000,
    ticketCode: '206535692',
    status: 'booked',
    title: 'Lion King',
    orderedBy: '080989999' },
  MovieTicket {
    type: 'movie',
    price: 50000,
    ticketCode: '800939523',
    status: 'booked',
    title: 'Lion King',
    orderedBy: '080989999' } ]
*/

let orderedEventTickets = isroGopay.orderTickets('event', 'Coldplay Concert', 1)
console.log(orderedEventTickets)
/*
  [ EventTicket {
    type: 'event',
    price: 300000,
    ticketCode: '729053281',
    status: 'booked',
    title: 'Coldplay Concert',
    orderedBy: '0881239123' } ]
*/

console.log('===========RELEASE 3===============')
hardhimGopay.payTickets(orderedTickets)
/*
  Payment for tickets failed, please top up first
*/

hardhimGopay.topUp(500000)
/*
  Top up success, you added 500000 to your balance, your current balance is 570000
*/

hardhimGopay.payTickets(orderedEventTickets)
/*
  Sorry this ticket already ordered by another person
*/

hardhimGopay.payTickets(orderedTickets)
/*
  Payment for tickets success. You spent 100000
*/
isroGopay.payTickets(orderedEventTickets)
/*
  Payment for tickets success. You spent 300000
*/
isroGopay.payTickets(orderedEventTickets)
/*
  Ticket has been bought
*/


