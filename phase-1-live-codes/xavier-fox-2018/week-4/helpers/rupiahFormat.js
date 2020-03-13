module.exports = function (value) {
  return `$ ${value.toLocaleString('USD')}`
}