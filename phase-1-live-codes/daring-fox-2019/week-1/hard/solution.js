const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let idx = i
    for (let j = i + 1; j < arr.length; j++) {
      let searchDistance = arr[idx][3]
      let compareDistance = arr[j][3]
      if (searchDistance > compareDistance) {
        idx = j
      }
    }
    [arr[idx], arr[i]] = [arr[i], arr[idx]]
  }
  return arr
}

const kNearestNeighbours = (data, k) => {
  let coordinates = []
  data.forEach((rows, i) => {
    rows.forEach((col, j) => {
      let getCoor = [ i, j, col ]
      col === "X" ? coordinates.unshift(getCoor) : col !== " " ? coordinates.push(getCoor) : ""
    })
  })
  coordinates.forEach((coor, _, originalArr) => {
    let xTarget = originalArr[0][0]
    let yTarget = originalArr[0][1]
    if (coor[2] !== "X") {
      let xTrain = coor[0]
      let yTrain = coor[1]
      let distances = Math.abs(xTarget - xTrain) + Math.abs(yTarget - yTrain)
      coor.push(distances)
    } else {
      coor.push(0)
    }
  })
  coordinates = selectionSort([...coordinates])
  const neighbours = Array(k).fill("").map((_, i) => coordinates[i + 1][2])
  const getNeighbour = Array(...new Set(neighbours)).map((char) => ({char, count: neighbours.filter((e) => char === e).length})).sort((a, b) => a.count < b.count)[0].char
  return getNeighbour
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
  ["A", " ", " ", " ", "C", "", " ", " ", " "],
  [" ", "A", " ", " ", " ", "B", "B", " ", " "],
  [" ", " ", "A", " ", "A", " ", " ", "X", "C"],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["A", " ", " ", "B", "B", " ", " ", " ", "C"],
  [" ", " ", " ", " ", "C", " ", "C", " ", " "],
  [" ", " ", "B", " ", " ", " ", " ", " ", " "],
]

console.log(kNearestNeighbours(data2, 5)) // C