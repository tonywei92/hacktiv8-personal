function formatUang(uang) {
  let stringUang = String(uang).split('').reverse()
  
  let mapUang = stringUang.map((el, i) => {
    if((i+1) % 3 === 0 && i !== stringUang.length - 1) {
      el = '.' + el
    }
    return el
  })

  return 'Rp ' + mapUang.reverse().join('')
}

module.exports = formatUang