function uniqueSort(data) {
  // Insert your code here
}

const data = [
  {
    money: 1000
  },
  {
    money: 500
  },
  {
    money: 10
  },
  '',
  {
    money: 10
  },
  null,
  undefined,
  {
    value: 30
  },
  {
    value: 10
  },
  Infinity,
  100
]

console.log(uniqueSort(data))

const data2 = [
  {
    value: 1000
  },
  {
    money: 10
  },
  {
    nilai: 10
  },
  '',
  {
    value: 10
  },
  null,
  undefined,
  {
    value: 30
  },
  {
    value: 10
  },
  Infinity,
  100
]

console.log(uniqueSort(data2))
