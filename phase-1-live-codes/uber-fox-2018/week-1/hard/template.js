function findFox(map) {
  //your code here
  //silakan menambahkan function atau parameter yang kamu perlukan
}

let mapOne = [
  ['UBER', ' ', 'X', 'X', 'X'],
  ['X', ' ', 'X', 'X', 'X'],
  [' ', ' ', 'X', ' ', 'FOX'],
  [' ', 'X', 'X', ' ', 'X'],
  [' ', ' ', ' ', ' ', 'X'],
];

findFox(mapOne);
// kanan, bawah, bawah, kiri, bawah, bawah, kanan, kanan, kanan, atas, atas, kanan

let mapTwo = [
  ['X', 'X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X'],
  ['X', 'UBER', 'X', ' ', 'X'],
  ['X', ' ', 'X', 'FOX', 'X'],
  ['X', ' ', ' ', ' ', 'X'],
]

findFox(mapTwo);
// bawah, bawah, kanan, kanan, atas
