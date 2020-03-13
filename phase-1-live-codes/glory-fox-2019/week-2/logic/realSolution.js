let dataPerson = {
  A: ['Olive', 'Queen', 'Scala', 'Uranium', 'Wick', 'Yongki'],
  B: ['Nancy', 'Patrick', 'Rust', 'Tesla', 'Vans', 'Xavier'],
  AB: ['Bolt', 'Daniel', 'Frans', 'Hans', 'Jack', 'Laura'],
  O: ['Alan', 'Charly', 'Ester', 'George', 'Intan', 'Mona', 'Zend']
}

function bloodCompability(korban, pendonor) {
  let bloodMatcher = {
      A: ["A", "AB"],
      B: ["B", "AB"],
      AB: ["AB"],
      O: ["A", "B", "AB", "O"]
  }
  let golonganDarahKorban, golonganDarahPendonor
  for(let key in dataPerson) {
      for(let i = 0; i < dataPerson[key].length; i++) {
          if(dataPerson[key][i] === korban) {
              golonganDarahKorban = key
          } else if (dataPerson[key][i] === pendonor) {
              golonganDarahPendonor = key
          }
      }
  }
  return bloodMatcher[golonganDarahPendonor].includes(golonganDarahKorban)
}

console.log(bloodCompability("Bolt", "Alan"));
// true
console.log(bloodCompability("Charly", "Daniel"));
// false

function transfusionProcess(recipients, donors) {
  let survivor = []
  let donor = []
  let die = []
  let str = ''

  for(let i = 0; i < recipients.length; i++) {
      for(let j = 0; j < donors.length; j++) {
          if(!donor.includes(donors[j])) {
              if(bloodCompability(recipients[i], donors[j])) {
                  survivor.push(recipients[i])
                  donor.push(donors[j])
                  break;
              }
          }
      }
  }

  for(let i = 0; i < recipients.length; i++) {
      if(!survivor.includes(recipients[i])) {
          die.push(recipients[i])
      }
  }

  for(let i = 0; i < survivor.length; i++) {
      str += `${survivor[i]} menerima donor dari ${donor[i]}` + '\n'
  }

  die.forEach((el, i) => {
      str += `${el} tidak selamat` 
      if(i != die.length - 1) {
          str += '\n'
      }
  })

  return str
}

console.log(transfusionProcess(["Bolt", "Queen"], ["Alan", "Tesla"]));
/*
  Bolt menerima donor dari Alan
  Queen tidak selamat
*/

console.log(transfusionProcess(["Nancy", "Frans", "Scala", "Alan"], ["Ester", "Bolt", "Rust"]))
/*
  Nancy menerima donor dari Ester
  Frans menerima donor dari BoltScala tidak selamat
  Alan tidak selamat
*/

