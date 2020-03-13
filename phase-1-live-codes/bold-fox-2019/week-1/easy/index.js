const calculateAlgebra = (equation, value) => {
  const calculatedEquation = equation.split("+").map((val) => {
    const separateNumbers = []
    let coeficient = ""
    let xPos = null
    let quadratIdx = val.split("").findIndex((char) => {
      if (char === "X") return true
      coeficient += char
    })
    if (+coeficient) separateNumbers.push(+coeficient)
    xPos = val[quadratIdx]
    if (xPos && val[quadratIdx + 1] === "^") {
      separateNumbers.push(Math.pow(value, +val.slice(quadratIdx + 2)))
    } else if (xPos) {
      separateNumbers.push(value)
    }
    return separateNumbers
  })
  return calculatedEquation.reduce((accTotal, currentValue) => accTotal + currentValue.reduce((accPow, currentNum) => accPow * currentNum, 1), 0)
}

console.log(calculateAlgebra("2X^2+7X+1", 3)) // 40
console.log(calculateAlgebra("X^2+7X+1", 1)) // 9
console.log(calculateAlgebra("X^10", 2)) // 1024
console.log(calculateAlgebra("3X^1000", 1)) // 3

