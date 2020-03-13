function featureExtraction(data) {
  // your code here
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
/*

  [ 
    { 
      id: 1,
      firstName: 'yoki',
      lastName: 'suprayogi',
      age: 32,
      address: 'jakarta',
      gender: 'male',
      netflixAccount: '',
      tinderAccount: '' 
    },
    { 
      id: 2,
      firstName: 'armedi',
      age: 26,
      gender: 'male',
      lastName: '',
      address: '',
      netflixAccount: '',
      tinderAccount: '' 
    },
    { 
      id: 3,
      firstName: 'wika',
      lastName: 'silo',
      age: 32,
      address: 'jakarta',
      gender: 'male',
      netflixAccount: '@wikanyaa',
      tinderAccount: '' 
    },
    { 
      id: 4,
      firstName: 'Aries',
      lastName: 'Dimas Yudistira',
      address: 'jakarta',
      tinderAccount: '@yudim',
      age: '',
      gender: '',
      netflixAccount: '' 
    } 
  ]
*/