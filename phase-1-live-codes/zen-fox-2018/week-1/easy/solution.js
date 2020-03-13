const polynominal = (str) => {
  let array = Array.from(str)
  let temp = []
  let operators = []
  let results = []
  do {
    let index = array.findIndex((e) => e === '+')
    let tempArr = []
    if ( index === -1 ) {
      tempArr = array.slice(0)
      array = []
    } else {
      operators.push(array[index])
      tempArr = array.slice(0, index)
      array = array.slice(index + 1)
    }
    let tempArrIdx = tempArr.findIndex((e) => e.charCodeAt() >= 97 && e.charCodeAt() <= 122)
    if (tempArrIdx === -1) {
      temp.push({
        value: Number(tempArr.slice(0).join('')),
        polynoms: ''
      })
    } else {
      let val = tempArr.slice(0, tempArrIdx)
      temp.push({
        value: val.length === 0 ? 1 : Number(val.join('')),
        polynoms: tempArr.slice(tempArrIdx).join('')
      })
    }
    
  } while (array.length > 0)
  temp.sort((a, b) => a.polynoms > b.polynoms)
  do {
    let obj = temp[0]
    temp = temp.slice(1)
    let index = temp.findIndex((e) => e.polynoms === obj.polynoms)
    if (index !== -1) {
      temp.unshift({
        value: obj.value + temp[index].value,
        polynoms: obj.polynoms
      })
      temp.splice(index + 1, 1)
    } else {
      if(obj.value === 1 && obj.polynoms.length > 0) {
        results.push(obj.polynoms)
      } else {
        results.push(obj.value + obj.polynoms)
      }
    }
  } while (temp.length > 0)
  return results.join('+')
}

// JAWABAN GAK HARUS URUT
console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // 


