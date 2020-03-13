let dataPerson = {
  A: ['Olive', 'Queen', 'Scala', 'Uranium', 'Wick', 'Yongki'],
  B: ['Nancy', 'Patrick', 'Rust', 'Tesla', 'Vans', 'Xavier'],
  AB: ['Bolt', 'Daniel', 'Frans', 'Hans', 'Jack', 'Laura'],
  O: ['Alan', 'Charly', 'Ester', 'George', 'Intan', 'Mona', 'Zend']
}

function findBloodType(name) {
  for (let [key, people] of Object.entries(dataPerson)) {
    if (people.includes(name)) return key
  }
}

function bloodCompatibility(korban, pendonor) {
  let bloodMatcher = {
    A: ["A", "AB"],
    B: ["B", "AB"],
    AB: ["AB"],
    O: ["A", "B", "AB", "O"]
  }
  return bloodMatcher[findBloodType(pendonor)].includes(findBloodType(korban))
}

function getListRecipientDonorPairs(matches, donors = []) {
  if (matches.length === 0) return []
  let possibilities = []
  for (let donor of matches[0][1]) {
    if (!donors.includes(donor)) {
      possibilities.push([[matches[0][0], donor]].concat(getListRecipientDonorPairs(matches.slice(1), donors.concat([donor]))))
    }
  }
  possibilities = possibilities.sort((a, b) => b.length - a.length)
  return possibilities[0] || []
}

function transfusionProcess(recipients, donors) {
  let matches = {}
  for (let recipient of recipients) {
    for (let donor of donors) {
      if (bloodCompatibility(recipient, donor)) {
        if (matches[recipient]) matches[recipient].push(donor)
        else matches[recipient] = [donor]
      }
    }
  }
  let bestChoices = getListRecipientDonorPairs(Object.entries(matches))

  console.log(`${bestChoices.length} nyawa terselamatkan`)
  for (let [recipient, donor] of bestChoices) {
    console.log(`${recipient} menerima transfusi dari ${donor}`)
  }
}

transfusionProcess(['Bolt', 'Queen'], ['Alan', 'Tesla'])
// 2 nyawa terselamatkan
// Bolt menerima transfusi dari Tesla
// Queen menerima transfusi dari Alan

