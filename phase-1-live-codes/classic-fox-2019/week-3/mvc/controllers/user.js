const User = require('../models/user')
const Transaction = require('../models/transaction')
const Price = require('../models/price')

class UserController {
  static list() {
    User.findAll(function (err, users) {
      if (err) {
        console.log(err)
      } else {
        Transaction.findAll((err, transactions) => {
          if (err) {
            console.log(err)
          } else {
            users.forEach(user => {
              let lastTransaction = transactions
                .filter(trx => trx.userId === user.id)
                .sort((a, b) => a.time < b.time)[0]
              user.createdAt = user.createdAt.toString()
              user.lastActivity = ((lastTransaction && lastTransaction.time) || user.createdAt).toString()
              console.log(users)
            })
          }
        })
      }
    })
  }

  static register(name, email, phone) {
    User.create({ name, email, phone }, err => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Selamat ${name}, anda telah berhasil terdaftar di sistem kami.`)
      }
    })
  }

  static fund(userId, ticker, amount) {
    User.findOne({ id: Number(userId) }, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        let currency = ''
        if (ticker.toUpperCase() === 'BTC') currency = 'bitcoin'
        else if (ticker.toUpperCase() === 'IDR') currency = 'rupiah'
        if (currency) {
          user.balance[currency] = user.balance[currency] + Number(amount)
          if (user.balance[currency] < 0) {
            console.log('Maaf, saldo anda tidak cukup')
          } else {
            user.save(err => {
              if (err) {
                console.log(err)
              } else {
                console.log(`Anda telah berhasil melakukan ${amount > 0 ? 'deposit' : 'withdraw'} ${currency} sebesar ${Math.abs(amount)}`)
              }
            })
          }
        }
      }
    })
  }

  static makeTransaction(userId, amount) {
    User.findOne({ id: Number(userId) }, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        Price.findAll((err, prices) => {
          if (err) {
            console.log(err)
          } else {
            let last = prices[prices.length - 1]
            let trx = amount < 0
              ? { userId: user.id, type: 'sell', price: last.sell, amount: Math.abs(amount) }
              : { userId: user.id, type: 'buy', price: last.buy, amount }
            Transaction.create(trx, (err) => {
              if (err) {
                console.log(err)
              } else {
                user.balance.rupiah = Math.round(user.balance.rupiah - amount * trx.price)
                user.balance.bitcoin = user.balance.bitcoin + amount
                if (user.balance.rupiah < 0 || user.balance.bitcoin < 0) {
                  console.log('Maaf, saldo anda tidak cukup')
                } else {
                  user.save(err => {
                    if (err) {
                      console.log(err)
                    } else {
                      console.log(`Anda telah berhasil melakukan ${amount > 0 ? 'pembelian' : 'penjualan'} ${Math.abs(amount)} bitcoin`)
                    }
                  })
                }
              }
            })
          }
        })
      }
    })
  }
}

module.exports = UserController