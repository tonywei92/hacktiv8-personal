module.exports = function generateFuel(fuel, maxFuel, gasolineQuota) {
  const output = []

  let maxNumber = Math.min(maxFuel - fuel, gasolineQuota)

  for (let i = 2; i <= maxNumber; i += 2) {
    output.push(i)
  }

  console.log(output)

  return output
}
