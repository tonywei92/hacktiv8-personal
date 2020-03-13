
function calculate(str) {
    var result = "";
    var lastpos = 10;
    var operator = "";
    for (var i = str.length - 1; i >= 0; i--) {
      lastpos = i;
      var found = false;
      for (var j = 0; j < 10; j++) {
        if (j === Number(str[i])) {
          result = str[i]+result;
          found = true;
        }
      }
      if (!found) {
        operator = str[i];
        break;
      }
      
    }
    var sliced = str.slice(0,lastpos);
    console.log(result,operator, sliced)
    if (operator === "+") {
      return calculate(sliced) + Number(result);
    }
    if (operator === "-") {
      return calculate(sliced) - Number(result);
    }
    if (operator === "/") {
      return calculate(sliced) / Number(result);
    }
    if (operator === "*") {
      return calculate(sliced) * Number(result);
    }
    else{
      return Number(result);
    }
  }
  
  console.log(calculate('123+234*56-10')); //19982