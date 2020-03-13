const input1 = 'ABDEF' // [ C ]
const input2 = 'GIHGWYUWCE' // [ H, X, V, D]
const input3 = 'POLQWRTWY' // [S, X]

function findLetter(string) {
  const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const split = string.split('')
  const missingLetter = []

  for (let i = 0; i < split.length - 1; i++) {
    const currentWord = split[i]
    const nextAfterThis = split[i + 1]
    const findWordPosition = dictionary.split('').findIndex(char => char === currentWord)
    const supposedNextWord = dictionary[findWordPosition + 1]
    const supposedTwoNextWord = dictionary[findWordPosition + 2]

    if (nextAfterThis !== supposedNextWord && supposedTwoNextWord === nextAfterThis) {
      console.log({currentWord, nextAfterThis, findWordPosition, supposedNextWord, supposedTwoNextWord})
      missingLetter.push(supposedNextWord)
    }
  }

  return missingLetter
}

// console.log(findLetter(input1))
// console.log(findLetter(input2))
console.log(findLetter(input3))
