function format_currency(price) {
  return `Rp. ${price.toLocaleString()}`
}

module.exports = format_currency
