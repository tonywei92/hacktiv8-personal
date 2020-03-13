var satuan = ['ton', 'kwintal','','kg','ons','dag','g','dg','cg','mg']

function convertWeight(question, convertTo) {
  question = question.split('+')
  let result = 0

  question.forEach(function(q) {
    q = q.split(' ')

    //get multiplier / divider
    let fromIdx = satuan.indexOf(q[1])
    let toIdx = satuan.indexOf(convertTo)

    let diff = toIdx - fromIdx
    let multiplier = 1
    let multiply = false

    if(diff > 0) {
      multiplier = Math.pow(10, diff)
      multiply = true
    } else {
      multiplier = Math.pow(10, Math.abs(diff))
    }

    if(multiply) {
      let count = q[0] * multiplier
      result += count
    } else {
      let count = q[0] / multiplier
      result += count

    }
  })

  return result
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg'))
