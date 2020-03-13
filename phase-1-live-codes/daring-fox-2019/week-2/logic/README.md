# King VS Queen
###### Estimasi waktu: 45 Menit

This is the last minute of a chess game. When you only have your king left, and your opponent has his/her king and queen.

Your king need to escape the attack of your opponent. Your job is to instruct the king where he can go in the board based on coordinate that is out of the range of opponent's attack.

Show it in an array of possible coordinates

### Movement of king and queen

> The king can move in any direction, one square at a time. A king cannot move to a square that is under attack by the opponent. 

![king](https://cdn.instructables.com/FLR/GB1U/FD80BVWD/FLRGB1UFD80BVWD.LARGE.jpg?auto=webp)

> The queen moves in continuous diagonal and straight lines. Forward, backward and side-to-side.

![queen](https://cdn.instructables.com/F6H/BZ4B/FD80BVWA/F6HBZ4BFD80BVWA.LARGE.jpg?auto=webp)

**Follow this link to read more about chess rules: [Basic Chess Rules](https://www.instructables.com/id/Playing-Chess/)**


## RELEASE 0

Find coordinates of the king and the queen

## RELEASE 1

Get coordinates surrounding the king

## RELEASE 2

Filter out coordinates which are within the queen's attack range



___

```javascript
let game1 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', 'K', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', 'Q', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]

console.log(escape(game1)) // [ 'B6', 'B7', 'C6', 'C8', 'D7', 'D8' ]

let game2 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', 'Q', ' ', 'K' ] 
]
console.log(escape(game2)) // [ 'H2' ]

let game3 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', 'Q', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', 'K', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game3)) // [ 'E2', 'E3', 'G2', 'G3' ]

let game4 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', 'Q', ' ', ' ', ' ', ' ', 'K' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game4)) // [ 'G6', 'G8', 'H6', 'H8' ]

let game5 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', 'Q', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game5)) // [ 'A2', 'B1' ]

let game6 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', 'K', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', 'Q', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game6)) // [ 'A5', 'A6', 'A7', 'C5', 'C6', 'C7' ]
```