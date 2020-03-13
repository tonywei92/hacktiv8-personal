function matchExpectations(user, targetUser) {
  let userExpectation = 0
  let targetExpectation = 0
  for(let i = 0; i < user.expectation.length; i++) {
    let expectFound = targetUser.traits.indexOf(user.expectation[i])
    if(expectFound !== -1) {
      userExpectation++
    }
  }

  for(let i = 0; i < targetUser.expectation.length; i++) {
    let expectFound = user.traits.indexOf(targetUser.expectation[i])
    if(expectFound !== -1) {
      targetExpectation++
    }
  }

  if(targetExpectation !== 0 && userExpectation !== 0) {
    return {
      targetName: targetUser.name, 
      matchRate: userExpectation / user.expectation.length * 100
    }
  } else {
    return false
  }

}

function tinderApps(people) {
  const output = {}
  for(let i = 0; i < people.length; i++) {
    let collectionMatch = []
    for(let j = 0; j < people.length; j++) {
      if(i !== j && people[i].gender !== people[j].gender) {
        let match = matchExpectations(people[i], people[j])
        if(match) {
          collectionMatch.push(match)
        }
      }
    }
    output[people[i].name] = {}
    if(!collectionMatch.length) {
      output[people[i].name].status = 'Belum dapat match'
    } else {
      let status = 'Match dengan '
      for(let x = 0; x < collectionMatch.length; x++) {
        status += collectionMatch[x].targetName + ' '
        output[people[i].name][collectionMatch[x].targetName] = 'Expectation Match ' + Math.round(collectionMatch[x].matchRate) + '%'
      }
      //output[people[i].name][collectionMatch[i].targetName] = `Expectation match ${collectionMatch[i].matchRate}`
      output[people[i].name].status = status
    }
    //console.log(people[i].name, collectionMatch)
  }
  return output
}

console.log(tinderApps([
  { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
  { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
  { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
  { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] }
]))



console.log(tinderApps([
  { name: 'Giant', gender: 'Men', traits: ['Kaya', 'Tampan'], expectation: ['Pintar', 'Kuat']},
  { name: 'Shizuka', gender: 'Women', traits: ['Cantik', 'Pintar', 'Imut'], expectation: ['Sederhana', 'Jujur'] },
  { name: 'Nobita', gender: 'Men', traits: ['Pintar', 'Jujur'], expectation: ['Pintar', 'Imut', 'Rajin'] },
  { name: 'Doremi', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur', 'Kaya', 'Tampan'] },
  { name: 'Sakura', gender: 'Women', traits: ['Kuat', 'Sederhana'], expectation: ['Jujur', 'Tampan'] }
]))
