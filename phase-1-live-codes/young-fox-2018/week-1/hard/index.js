function catFindMouse(cat, mouse) {

}

// TEST CASE 1
let cat = {
  icon: 'K',
  moves: ['left', 'down', 'left'],
  pos: [1, 3]
 }
let mouse = {
  icon: 'T',
  pos: [4, 2]
 }
console.log(catFindMouse(cat, mouse)) // Kucing gagal memakan tikus


// TEST CASE 2
cat = {
  icon: 'K',
  moves: ['down', 'right', 'right', 'down', 'left'],
  pos: [2, 2],
 }
mouse = {
  icon: 'T',
  pos: [3, 3]
 }
console.log(catFindMouse(cat, mouse)) // Kucing berhasil memakan tikus

