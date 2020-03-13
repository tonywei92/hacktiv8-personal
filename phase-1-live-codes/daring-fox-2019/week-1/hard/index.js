function kNearestNeighbours(data, k) {
  // your code here
}

const data1 = [
  ["A", " ", " ", " ", " ", " "],
  [" ", "A", " ", " ", " ", "B"],
  [" ", " ", "A", " ", " ", " "],
  [" ", " ", " ", "X", " ", " "],
  ["A", " ", " ", "B", "B", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", "B", " ", " ", " "],
]

console.log(kNearestNeighbours(data1, 3)) // B

const data2 = [
  ["A", " ", " ", " ", "C", " ", " ", " ", " "],
  [" ", "A", " ", " ", " ", "B", "B", " ", " "],
  [" ", " ", "A", " ", "A", " ", " ", "X", "C"],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["A", " ", " ", "B", "B", " ", " ", " ", "C"],
  [" ", " ", " ", " ", "C", " ", "C", " ", " "],
  [" ", " ", "B", " ", " ", " ", " ", " ", " "],
]

console.log(kNearestNeighbours(data2, 5)) // C