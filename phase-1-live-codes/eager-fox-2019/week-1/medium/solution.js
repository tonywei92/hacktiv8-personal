const bagOfWords = (words) => {
  words = words.split(".").slice(0, -1)
  const tables = []
  const bags = new Set()
  words.forEach((sentence) => {
    sentence.split(" ").forEach((word) => {
      bags.add(word.toLowerCase())
    })
  })
  tables[0] = ["Sentence", ...bags.keys()]
  words.forEach((sentence, i) => {
    tables[i+1] = [sentence]
    const splitSentence = sentence.split(" ").map((el) => el.toLowerCase())
    tables[0].slice(1).forEach((bag, j) => {
      let totalWords = splitSentence.reduce((prev, curr) => {
        if (curr === bag) {
          return prev + 1
        } else {
          return prev
        }
      }, 0)
      tables[i + 1][j + 1] = totalWords
    })
  })
  const objTables = tables.slice(1).map((table) => {
    const newObj = new Object()
    // save keys
    const keys = []
    const counts = []
    tables[0].forEach((key, i) => {
      if(i > 0) keys.push(key)
      if(i > 0) counts.push(table[i])
      newObj[key] = table[i]
    })
    // sorting keys
    // for(let i = 0; i < keys.length; i++) {
    //   let min = keys[i]
    //   let indexMin = i
    //   for(let j = i + 1; j < keys[i].length; j++) {
    //     if(min > keys[j]) {
    //       min = keys[j]
    //       indexMin = j
    //     }
    //   }
    //   let temp = keys[i]
    //   keys[i] = keys[indexMin]
    //   keys[indexMin] = temp
    // }
   
    return newObj
  })
  let sortedTable = []
  objTables.forEach((table) => {
    let newObjTable = {}
    newObjTable["Sentence"] = table["Sentence"]
    const values = Object.entries(table).sort((a, b) => a[1] < b[1])
    values.forEach((key) => {
      newObjTable[key[0]] = key[1]
    })
    sortedTable.push(newObjTable)
  })
  console.log(sortedTable)
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