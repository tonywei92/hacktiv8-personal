const moneyDictionaries = {
  100000: 1,
  50000: 3,
  20000: 0,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

const getChange = (money) => {
  let cek = {...moneyDictionaries} //Object.assign({}, moneyDictionaries)//JSON.parse(JSON.stringify(moneyDictionaries));

  const keys = Object.keys(moneyDictionaries)
  const changes = []
  for (let i = keys.length - 1; i >= 0; i--) {
    while(money >= keys[i] && moneyDictionaries[keys[i]] > 0) {
      changes.push(keys[i])
      moneyDictionaries[keys[i]] -= 1
      money -= keys[i]
    }
  }
  let objChange = {}
  changes.forEach((change) => {
    if (!objChange[change]) {
      objChange[change] = 0
    }
    objChange[change] += 1
  })

  if (money > 0) {
    console.log('Pecahan uang tidak cukup');
  } else {
    let changeKeys = Object.keys(objChange)
    for (let i = changeKeys.length - 1; i >= 0; i--) {
      console.log(`${changeKeys[i]} ${objChange[changeKeys[i]]} lembar`)
    }
  }

  console.log("===> ", cek);
}

getChange(75000)

getChange(395000)
console.log(moneyDictionaries);
