const generateBoard = (str) => {
  const dummiesArr = new Array(Math.sqrt(str.length)).fill('')
  let count = -1
  return dummiesArr.map((_, i) => dummiesArr.map((_, j) => {
    count++
    let char = str[count]
    return char === 'C' ? 'Cow' : char === 'S' ? 'Sheep' : char === 'H' ? 'Horse' : 'Pig'
  }))
}

const getCagesAnimals = (animals) => {
  const cagesLimit = [{
    animal: 'Pig',
    max: 3
  }, {
    animal: 'Sheep',
    max: 1
  }, {
    animal : 'Cow',
    max: 2
  }, {
    animal: 'Horse',
    max: 2
  }]
  let cages =[]
  animals.forEach((animalList, idx) => {
    animalList.forEach((animal, idy) => {
      const index = cagesLimit.findIndex((cageInfo) => cageInfo.animal === animal)
      const cagesIndex = cages.findIndex((el) => el.includes(animal) ? cagesLimit[index].max > el.reduce((prev, curr) => curr === animal ? prev + 1: prev, 0) ? true : false : true)
      if (cagesIndex === - 1) {
        cages.push([ animal ])
      } else {
        cages[cagesIndex].push(animal)
      }
    })
  })
  return cages
}

console.log(getCagesAnimals(generateBoard('CHCPSCSHHPSHCPPH')))
/* OUTPUT
[ 
  [ 'Cow', 'Horse', 'Cow', 'Pig', 'Sheep', 'Horse', 'Pig', 'Pig' ],
  [ 'Cow', 'Sheep', 'Horse', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Horse' ] 
]
*/
console.log(getCagesAnimals(generateBoard('CCCCHHHHPPPPSSSS')))
/* OUTPUT
[ 
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Pig', 'Pig', 'Sheep' ],
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Sheep' ],
  [ 'Sheep' ],
  [ 'Sheep' ] 
]
*/