const { getRandomInt } = require('./getRandInt.js')
exports.generateUname = (name) => {
  return `${name}${getRandomInt(1,9)}${getRandomInt(1,9)}${getRandomInt(1,9)}`
}