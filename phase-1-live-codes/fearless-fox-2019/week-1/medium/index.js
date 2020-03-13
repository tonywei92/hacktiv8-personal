function getKeyWord(keyword){

}

function searchInSentence(keyword, sentence){

}

function searchByKeyWord(keyword, sentences){
  
}

// Release 0
console.log(getKeyWord('cat and dog'))
/**
 Result
 [
  'cat and dog',
  'cat and',
  'and dog',
  'cat',
  'and',
  'dog' 
]
*/

console.log(getKeyWord("cat and dog eat"))
/**
Result
[ 'cat and dog eat',
  'cat and dog',
  'and dog eat',
  'cat and',
  'and dog',
  'dog eat',
  'cat',
  'and',
  'dog',
  'eat' ]
*/

// Release 1
console.log(searchInSentence(`cat and dog`,
'At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute'))
/** 
Result
22
*/

console.log(searchInSentence(`cat and dog`,
'Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats'))
/** 
Result
7
*/

// Release 2
console.log(searchByKeyWord('cat and dog',[
  `At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute`,
  `Sometimes Tom ate dog food and because of that the Dog was very angry and chased after Tom`,
  `When a dog chases Tom, it looks funny like a classic cat and dog story`,
  `Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats`,
  `Dog are usually quiet except when it comes to food`
]))
/**
 Result
 [ 
  'At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute',
  'Sometimes Tom ate dog food and because of that the Dog was very angry and chased after Tom',
  'When a dog chases Tom, it looks funny like a classic cat and dog story',
  'Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats',
  'Dog are usually quiet except when it comes to food'
 ]
 */