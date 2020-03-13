const paragraph = [
  `At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute`,
  `Sometimes Tom ate dog food and because of that the Dog was very angry and chased after Tom`,
  `When a dog chases Tom, it looks funny like a classic cat and dog story`,
  `Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats`,
  `Dog are usually quiet except when it comes to food`
];

function searchByKeyWord(keyword, paragraphs){

  let words = keyword.split(" ")

  let toSearch = []

  let lenDict = words.length
  for(let i = lenDict-1; i >= 0 ; i--) {
    let word = []
    let start = 0
    while(true) {     
      if(start+i >= lenDict) {
        break
      } else {
        // console.log(start, i + start)
        for(let j = start; j <= i + start; j++){
          word.push(words[j])
        }
        toSearch.push(word.join(" "))
        word = []
        start += 1
      }
    }
  }
  // console.log(toSearch)

  let point = []
  for(let i=0; i < paragraphs.length; i++){
    let paragraph = paragraphs[i].toLowerCase()
    point[i] = {
      id : i,
      point: 0,
      paragraph: paragraph 
    }
    for(let j=0; j < toSearch.length; j++ ){
      const searchSentence = toSearch[j]
      // console.log(searchSentence)
      while(paragraph.search(searchSentence) > -1){
        // console.log(`sentence : ${paragraph}`)
        // console.log(`search : ${searchSentence}`)
  
        const first = paragraph.substr(0, paragraph.search(searchSentence))
        const last = paragraph.substr(paragraph.search(searchSentence)+searchSentence.length)
        paragraph = first+last
        point[i].point+=(searchSentence.split(" ").length ** 2)
      }
    }  
  }

  point.sort((a,b)=>{
    return b.point - a.point
  })

  let result = [];
  for(let i = 0; i < point.length; i++){
    result.push(paragraphs[i])
  }

  console.log(point)
  // console.log(paragraphs)
  return result
}

console.log(searchByKeyWord('cat and dog', paragraph))