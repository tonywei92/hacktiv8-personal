function generateBoard(str) {
  
}

function getCagesAnimals(animals) {
  
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