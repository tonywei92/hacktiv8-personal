function mountainView(heights, landscapeHeight, landscapeWidth) {
  // Masukkan koding anda disini
}

// Release 0

console.log(mountainView([3], 6, 5)) // Lebar Landscape tidak cukup untuk gunung dengan tinggi 3
console.log(mountainView([3, 4], 10, 10)) // Lebar Landscape tidak cukup untuk gunung dengan tinggi 3, 4
console.log(mountainView([3], 5, 4)) // Tinggi Landscape dan Lebar Landscape tidak sama

// Release 1

// console.log(mountainView([3], 5, 5))

/*
[ [ ' ', ' ', ' ', ' ', ' ' ],
 [ ' ', ' ', ' ', ' ', ' ' ],
 [ ' ', ' ', ' ', ' ', ' ' ],
 [ ' ', ' ', ' ', ' ', ' ' ],
 [ ' ', ' ', ' ', ' ', ' ' ] ]
*/

// Release 2

// console.log(mountainView([3], 5, 5))
/*
[ [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', '🏔', ' ', ' ' ],
  [ ' ', '🏔', ' ', '🏔', ' ' ],
  [ '🏔', ' ', ' ', ' ', '🏔' ] ]
 */

// Release 3
// console.log(mountainView([3, 4], 12, 12))
/*
[ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '🏔', ' ', ' ', ' ' ],
  [ ' ', ' ', '🏔', ' ', ' ', ' ', ' ', '🏔', ' ', '🏔', ' ', ' ' ],
  [ ' ', '🏔', ' ', '🏔', ' ', ' ', '🏔', ' ', ' ', ' ', '🏔', ' ' ],
  [ '🏔', ' ', ' ', ' ', '🏔', '🏔', ' ', ' ', ' ', ' ', ' ', '🏔' ] ]
 */
