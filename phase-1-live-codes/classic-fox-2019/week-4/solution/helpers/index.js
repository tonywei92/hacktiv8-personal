module.exports = {
  pascalCase(input) {
    let title = input.split('')
    title[0] = title[0].toUpperCase()
    title = title.join('')
    return title
  },

  romanNumerals(input) {
    const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    if (input === 0) {
        return ''
    }
    for (var i = numbers.length; i >= 0; i--) {
      if (input - numbers[i] >= 0) {
        input -= numbers[i]
        return romans[i] + this.romanNumerals(input);
      }
    }
  },

  statusValue(WC, WTC) {
    return Math.floor((Number(WC)/ Number(WTC)) * 100)
  },
  
  statusOption(WC, WTC, id, SeasonId) {
    let value = Math.floor((Number(WC)/ Number(WTC)) * 100)
    if(value < 1) {
      return(`
        <td>
          <span><a href="/vegetables/${id}/buy/${SeasonId}" class="text-success">Buy</a></span>
        </td>
      `)
    } else if(value > 99) {
      return(`
        <td>
          <span><a href="/vegetables/${id}/sell/${SeasonId}" class="text-success">Sell</a></span>
        </td>
      `)
    } else {
      return(`
        <td>
          <span><a href="/vegetables/${id}/watering" class="text-success">Watering</a></span>
        </td>
      `)
    }
  }
}