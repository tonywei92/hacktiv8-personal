var stock = [{
  nominal: 50000,
  qty: 2
},{
  nominal: 20000,
  qty: 3
},{
  nominal: 10000,
  qty: 5
},{
  nominal: 5000,
  qty: 8
},{
  nominal: 2000,
  qty: 6
},{
  nominal: 1000,
  qty: 10
}]

function exchange(input, priority) {
  result = []
  for(let i=0; i<stock.length; i++) {
    if(priority) {
      if(stock[i].nominal <= priority) {
        while(stock[i].nominal <= input && stock[i].qty > 0) {
          result.push(stock[i].nominal)
          input -= stock[i].nominal
          stock[i].qty--
        }
      }
    } else {
      while(stock[i].nominal <= input && stock[i].qty > 0) {
        result.push(stock[i].nominal)
        input -= stock[i].nominal
        stock[i].qty--
      }
    }
  }
  if(input != 0) {
    return "Uang pecahan tidak mencukupi"
  } else {
    return result
  }
}

console.log(exchange(100000))   //[ 50000, 50000 ]
console.log(exchange(100000, 20000))   //[ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]
console.log(exchange(100000, 5000))   //Uang pecahan tidak mencukupi
