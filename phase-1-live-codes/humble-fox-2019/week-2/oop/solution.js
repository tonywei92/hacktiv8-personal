class Person {
  constructor(name, email, phone) {
    this.name = name 
    this.email = email
    this.phone = phone
  }
}

class Emoney {
  constructor(user, balance) {
    this.user = user
    this.balance = balance
  }

  topUp(money) {
    this.balance += money
    console.log(`Top up success, you added ${money} to your balance, your current balance is ${this.balance}`)
  }

  orderRide(distance) {
    let price = 3000 * Math.ceil(distance)
    if(this.balance < price) {
      price -= this.balance
      this.balance = 0
      console.log(`Succes order ride. You need to pay ${price} more when arrived on destination`)
    } else {
      this.balance -= price
      console.log(`Success order ride. You spent ${price} on your balance, your current balance is ${this.balance}`)
    }
  }
}

class Company {
  constructor(name) {
    this.name = name
    this.users = []
  }

  registerUser(user, balance) {
    let account
    let exist = this.users.findIndex(el => {
      return el.user.phone === user.phone
    })
    if(exist === -1) {
      if(this.name === 'gojek') {
        account = new Gopay(user, balance)
        this.users.push(account)
        console.log(`You success register your gopay ! Welcome abroad ${user.name}`)
        return account
      } else if(this.name === 'grab') {
        account = new Ovo(user,balance)
        this.users.push(account)
        console.log(`You success register your grab ! Welcome abroad ${user.name}`)
        return account
      } else {
        console.log('failed to add')
        return
      }
    } else {
      console.log('Phone number already registered')
      return
    }
    
  }

}

class Gopay extends Emoney {
  constructor(user, balance) {
    super(user, balance)
  }
  orderTickets(type, title, quantity) {
    let output = []
    if(type === 'movie') {
      for(let i = 0; i < quantity; i++) {
        output.push(new MovieTicket(title, this.user.phone))
      }
      return output
    } else if (type === 'event') {
      for(let i = 0; i < quantity; i++) {
        output.push(new EventTicket(title, this.user.phone))
      }
      return output
    }
  }
  payTickets(tickets) {
    if(tickets[0].orderedBy === this.user.phone) {
      let price = tickets[0].price * tickets.length
      if(this.balance >= price) {
        this.balance -= price
        console.log(`Payment for tickets success. You spent ${price}`)
      } else {
        console.log(`Payment for tickets failed, please top up first`)
      }
    } else {
      console.log(`Sorry this ticket already ordered by another person`)
    }
  }
}

class Ovo extends Emoney {
  constructor(user, balance) {
    super(user, balance)
  }
}

class Ticket {
  constructor(type, price, name, ordererPhone) {
    this.title = name
    this.type = type
    this.price = price
    this.ticketCode = this._generateRandomCode()
    this.status = 'booked'
    this.orderedBy = ordererPhone
  }

  _generateRandomCode() {
    
  }
}

class MovieTicket extends Ticket {
  constructor(name, orderedBy) {
    console.log(orderedBy, '<<<')
    super('cinema', 50000, name, orderedBy)
  }
}

class EventTicket extends Ticket {
  constructor(name, orderedBy) {
    super('event', 300000, name, orderedBy)
  }
}

module.exports = {
  Person,
  Company
}
