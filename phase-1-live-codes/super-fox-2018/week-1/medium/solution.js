function calc(arith) {
  var operators = ['+','-',':','x']
  var priority_ops = ['x',':']

  let arr = []
  let str = ''
  for(let i=0; i<arith.length; i++) {
    if(operators.indexOf(arith[i]) < 0) { //bukan operator
      str += arith[i]
    } else {
      arr.push(str)
      str = ''
      arr.push(arith[i])
    }
  }

  if(str) {
    arr.push(str)
  }

  //find priority
  // [ '21', '+', '15', ':', '3', '-', '5', 'x', '4', '+' ]
  for(let i=0; i<arr.length; i++) {
    if(priority_ops.indexOf(arr[i]) > -1) {
      let startIdx = i-1
      let endIdx = i+1
      let op = arr[i]

      let sub_result = count_num(arr[startIdx], arr[endIdx], op)

      arr.splice(startIdx, 3, sub_result)

      i = 0
    }
  }

  let result = 0
  for(let i=0; i<arr.length; i++) {
    if(i == 0) {
      result += Number(arr[i])
    }

    if(operators.indexOf(arr[i]) > -1) {
      let endIdx = i+1
      let op = arr[i]
      result = count_num(result, arr[endIdx], op)
    }
  }

  return result
}

function count_num(firstNum, secondNum, op) {
  firstNum = Number(firstNum)
  secondNum = Number(secondNum)

  if(op == '+') {
    return firstNum + secondNum
  } else if(op == '-') {
    return firstNum - secondNum
  } else if(op == 'x') {
    return firstNum * secondNum
  } else {
    return firstNum / secondNum
  }
}

console.log(calc('21+15:3-5x4+32'))  //38
console.log(calc('2+100:5x4-48'))  //34
console.log(calc('16x10:40+27'))  //31
