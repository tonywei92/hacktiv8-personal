const Price = require('../models/price')

class PriceController {
  static current() {
    Price.findAll(function (err, prices) {
      if (err) {
        console.log(err)
      } else {
        let last = prices[prices.length - 1]
        console.log(last)
      }
    })
  }

  static setPrice(buy, sell) {
    Price.create(Number(buy), Number(sell), (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Input harga terbaru berhasil')
      }
    })
  }
}

module.exports = PriceController