const data = [
  {
    money: 1000
  },
  {
    money: 500
  },
  {
    money: 10
  },
  '',
  {
    money: 10
  },
  null,
  undefined,
  {
    value: 30
  },
  {
    value: 10
  },
  Infinity,
  100
]

function cleanUniqueSort(data) {
  let cleanResult = []

  // filtering data

  for (let i = 0; i <= data.length; i++) {
    if (data[i] instanceof Object && data[i].money && cleanResult.findIndex(item => item === data[i].money) === -1) {
      cleanResult.push(data[i].money)
    }
  }

  // INSERTION

  for (let i = 0; i <= cleanResult.length - 1; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (cleanResult[j + 1] > cleanResult[j]) {
        const temp = cleanResult[j]
        cleanResult[j] = cleanResult[j + 1]
        cleanResult[j + 1] = temp
      }
    }
  }

  // SELECTION

  // for (let i = 0; i <= cleanResult.length - 1; i++) {
  //   let minIndex = i
  //   for (let j = i + 1; j <= cleanResult.length - 1; j++) {
  //     if (cleanResult[j] < cleanResult[minIndex]) {
  //       minIndex = j
  //     }
  //   }

  //   const temp = cleanResult[i]
  //   cleanResult[i] = cleanResult[minIndex]
  //   cleanResult[minIndex] = temp
  // console.log({cleanResult})
  // }

  return cleanResult
}

console.log(cleanUniqueSort(data))
