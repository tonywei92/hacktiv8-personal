const moneyDictionaries = {
  100000: 1,
  50000: 3,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

function getMoneyChange(money) {
  // your code below here...

}

getMoneyChange(75000)
/*OUTPUT
  50000 1 lembar
  10000 2 lembar
  5000 1 lembar
*/

getMoneyChange(190000)
/*OUTPUT
  Maaf uang kembalian tidak cukup
*/

console.log(moneyDictionaries)

/*
{ '500': 5,
  '1000': 10,
  '5000': 4,
  '10000': 5,
  '20000': 3,
  '50000': 2,
  '100000': 1 }
*/
