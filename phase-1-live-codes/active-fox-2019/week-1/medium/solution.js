
// CARA 1
// const mostCommonWordsSorting = (words) => {
//   const splitWords = words.map((word) => word.split(" ")),
//         similarWords = splitWords.map((words , idxSimilar) => ({ similarWordsFound: words.filter((word) => splitWords.some((elSplitWords, idxCheck) => idxCheck !== idxSimilar && new Set(elSplitWords).has(word))), idx: idxSimilar})),
//         sortedWords = similarWords.sort((a, b) => a.similarWordsFound.length > b.similarWordsFound.length)
//   return sortedWords.map((word) => words[word.idx])
// }

// CARA 2
// const mostCommonWordsSorting = (words) => words.map((word) => word.split(" ")).map((words , idxSimilar) => ({ similarWordsFound: words.filter((word) => words.map((word) => word.split(" ")).some((elSplitWords, idxCheck) => idxCheck !== idxSimilar && new Set(elSplitWords).has(word))), idx: idxSimilar})).sort((a, b) => a.similarWordsFound.length > b.similarWordsFound.length).map((word) => words[word.idx])

// CARA 3
const mostCommonWordsSorting = (words) => {
  const splitWords = words.map((word) => word.split(" ").map((elWord) => elWord.toLowerCase()))
  const similarWords = splitWords.map((words , idxSimilar) => {
    return { 
      similarWordsFound: words.filter((word) => {
        return splitWords.some((elSplitWords, idxCheck) => {
          if ( idxCheck !== idxSimilar) {
            const setWords = new Set(elSplitWords)
            if (setWords.has(word)) {
              return true
            }
          }
        })
      }),
      idx: idxSimilar
    }
  })
  const sortedWords = similarWords.sort((a, b) => a.similarWordsFound.length > b.similarWordsFound.length)
  return sortedWords.map((word) => words[word.idx])
}


const words = [
  "Hello my name is Steve",
  "where do you live?",
  "I like music",
  "Sorry, i forgot your name",
  "My pleasure sir"
]
console.log(mostCommonWordsSorting(words))

/*
  [ 
    'where do you live ?',
    'I like music',
    'My pleasure sir',
    'Hello my name is Rama',
    'Sorry, i forgot your name' 
  ]
*/

const secondWords = [
  "yes, it is true",
  "yes, it is",
  "is that true?"
]
console.log(mostCommonWordsSorting(secondWords))
