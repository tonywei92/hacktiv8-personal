function mostCommonWordsSorting(words) {
  // your code below here
}

const words = [
  "hello my name is rama",
  "where do you live ?",
  "i like music",
  "sorry, i forgot your name",
  "my pleasure sir"
]
console.log(mostCommonWordsSorting(words))
/*OUTPUT
  [ 
    'where do you live ?',
    'i like music',
    'my pleasure sir',
    'hello my name is rama',
    'sorry, i forgot your name' 
  ]
*/

const secondWords = [
  "yes, it is true",
  "yes, it is",
  "is that true?"
]
console.log(mostCommonWordsSorting(secondWords))
/*OUTPUT

  [ 
    'is that true?', 
    'yes, it is true', 
    'yes, it is' 
  ]

*/