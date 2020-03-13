module.exports = (value) => {
  return `$ ${value.toLocaleString('USD')}`
}