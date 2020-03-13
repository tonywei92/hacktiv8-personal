function getKeyWord(keyword) {
  const result = [];
  const arrKeyword = keyword.split(" ");
  let counter = arrKeyword.length;
  result.push(keyword);
  while (counter > 0) {
    let temp = "";
    arrKeyword.pop();
    if (arrKeyword.length > 1) {
      temp = [...arrKeyword].join(" ");
      if (temp.length > 0) {
        result.push(temp);
      }
    }
    counter--;
  }

  return result.concat(keyword.split(" "));
}

function searchInSentence(keyword, sentence) {
  keyword = getKeyWord(keyword);
  const sentenceLength = sentence.split(" ").length;
  let score = 0;
  for (let j = 0; j < keyword.length; j++) {
    for (let i = 0; i < sentenceLength; i++) {
      const pos = sentence.toLowerCase().indexOf(keyword[j], 0);
      if (pos >= 0) {
        const wordsLength = keyword[j].split(" ").length;
        score += wordsLength * wordsLength;
        sentence = sentence.toLowerCase().replace(keyword[j], "");
      }
    }
  }

  console.log(score);
}

function searchByKeyWord(keyword, sentences) {
  keyword = getKeyWord(keyword);
  const result = [];
  let scores = [];
  for (let i = 0; i < sentences.length; i++) {
    const sentenceLength = sentences[i].split(" ").length;
    const sentence = sentences[i];
    let score = 0;
    for (let j = 0; j < keyword.length; j++) {
      for (let k = 0; k < sentenceLength; k++) {
        if (sentences[i].toLowerCase().indexOf(keyword[j]) >= 0) {
          console.log("found", keyword[j] + " | ", sentences[i]);
          sentences[i] = sentences[i].toLowerCase().replace(keyword[j], "");
          const wordsCount = keyword[j].split(" ").length
          score += wordsCount * wordsCount;
          console.log("score", score);
        }
      }
    }
    scores.push({
      score,
      sentence
    });
  }
  for (let i = 0; i < scores.length - 1; i++) {
    for (let j = 0; j < scores.length - i - 1; j++) {
      if (scores[j].score < scores[j + 1].score) {
        const temp = scores[j];
        scores[j] = scores[j + 1];
        scores[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < scores.length; i++) {
    result.push(scores[i].sentence);
  }
  return result;
}

// Release 0
console.log(getKeyWord("cat and dog"));
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

console.log(getKeyWord("cat and dog eat"));
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
console.log(
  searchInSentence(
    `cat and dog`,
    "At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute"
  )
);
/** 
Result
22
*/

console.log(
  searchInSentence(
    `cat and dog`,
    "Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats"
  )
);
/** 
Result
7
*/

// Release 2
console.log(
  searchByKeyWord("cat and dog", [
    `At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute`,
    `Sometimes Tom ate dog food and because of that the Dog was very angry and chased after Tom`,
    `When a dog chases Tom, it looks funny like a classic cat and dog story`,
    `Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats`,
    `Dog are usually quiet except when it comes to food`
  ])
);
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
