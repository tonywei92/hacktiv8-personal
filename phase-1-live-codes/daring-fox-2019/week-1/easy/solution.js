const featureExtraction = (data) => {
  const keys = new Set()
  data.forEach((user) => {
    let objKeys = Object.keys(user)
    objKeys.forEach((key) => {
      keys.add(key)
    })
  })
  const columns = [...keys]
  data.forEach((user) => {
    columns.forEach((col) => {
      if (!user[col]) {
        user[col] = ""
      } else {
        user[col] = user[col]
      }
    })
  })
  return data
}

const data1 = [
  {
    id: 1,
    firstName: "yoki",
    lastName: "suprayogi",
    age: 32,
    address: "jakarta",
    gender: "male"
  },
  {
    id: 2,
    firstName: "armedi",
    age: 26,
    gender: "male"
  },
  {
    id: 3,
    firstName: "wika",
    lastName: "silo",
    age: 32,
    address: "jakarta",
    gender: "male",
    netflixAccount: "@wikanyaa"
  },
  {
    id: 4,
    firstName: "Aries",
    lastName: "Dimas Yudistira",
    address: "jakarta",
    tinderAccount: "@yudim"
  },
]

console.log(featureExtraction(data1))