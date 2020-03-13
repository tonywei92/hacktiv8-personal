function matchExpectations(user, targetUser) {

}

function tinderApps(people) {

}

console.log(tinderApps([
  { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
  { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
  { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
  { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] }
]))

/*
  { 
    Andre: { status: 'Belum dapat match' },
    Marsya: { Dimas: 'Expectation Match 50%', status: 'Match dengan Dimas' },
    Dimas: { 
      Marsya: 'Expectation Match 50%',
      Bella: 'Expectation Match 100%',
      Derpina: 'Expectation Match 50%',
      status: 'Match dengan Marsya, Bella, Derpina' 
    },
    Bella: { Dimas: 'Expectation Match 50%', status: 'Match dengan Dimas' },
    Derpina: { Dimas: 'Expectation Match 33%', status: 'Match dengan Dimas' } 
  }
*/



console.log(tinderApps([
  { name: 'Giant', gender: 'Men', traits: ['Kaya', 'Tampan'], expectation: ['Pintar', 'Kuat']},
  { name: 'Shizuka', gender: 'Women', traits: ['Cantik', 'Pintar', 'Imut'], expectation: ['Sederhana', 'Jujur'] },
  { name: 'Nobita', gender: 'Men', traits: ['Pintar', 'Jujur'], expectation: ['Pintar', 'Imut', 'Rajin'] },
  { name: 'Doremi', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur', 'Kaya', 'Tampan'] },
  { name: 'Sakura', gender: 'Women', traits: ['Kuat', 'Sederhana'], expectation: ['Jujur', 'Tampan'] }
]))

/*
  { 
  Giant: 
   { Doremi: 'Expectation Match 50%',
     Sakura: 'Expectation Match 50%',
     status: 'Match dengan Doremi, Sakura' },
  Shizuka: 
   { Nobita: 'Expectation Match 50%',
     status: 'Match dengan Nobita' },
  Nobita: 
   { Shizuka: 'Expectation Match 67%',
     Doremi: 'Expectation Match 33%',
     status: 'Match dengan Shizuka, Doremi' },
  Doremi: 
   { Giant: 'Expectation Match 50%',
     Nobita: 'Expectation Match 50%',
     status: 'Match dengan Giant, Nobita' },
  Sakura: { Giant: 'Expectation Match 50%', status: 'Match dengan Giant' } 
  }
*/
