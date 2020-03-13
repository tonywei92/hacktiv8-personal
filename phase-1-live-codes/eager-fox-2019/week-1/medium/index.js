function bagOfWords(sentences) {

}

const sentences = "The cat sat on the hat.The dog ate the cat and the hat."
bagOfWords(sentences)

/* 

[ { Sentence: 'The cat sat on the hat',
    the: 2,
    cat: 1,
    sat: 1,
    on: 1,
    hat: 1,
    dog: 0,
    ate: 0,
    and: 0 },
  { Sentence: 'The dog ate the cat and the hat',
    the: 3,
    cat: 1,
    hat: 1,
    dog: 1,
    ate: 1,
    and: 1,
    sat: 0,
    on: 0 } ]

*/