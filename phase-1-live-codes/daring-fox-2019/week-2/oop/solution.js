class Participant {
  constructor(name, birthday, role) {
    this.name = name
    this.birthday = new Date(birthday)
    this.role = role
  }

  get age() {
    return (new Date().getFullYear() - this.birthday.getFullYear())
  }
}

class Politician extends Participant {
  constructor(name, birthday) {
    super(name, birthday, 'politician')
  }
}

class Voter extends Participant {
  constructor(name, birthday) {
    super(name, birthday, 'voter')
    this.voted = false
  }

  vote(candidate) {
    if (this.age < 17) {
      console.log(`Maaf, ${this.name} belum memiliki hak untuk memilih`)
    } else if (this.voted === true) {
      console.log(`Dilarang memilih lebih dari satu kali!!!`)
    } else {
      candidate.vote++
      this.voted = true
      console.log(`Selamat, ${this.name} telah berhasil melakukan pemilihan`)
    }
  }
}


class Candidate {
  constructor(presidentCandidate, vicePresidentCandidate) {
    this.presidentCandidate = presidentCandidate
    this.vicePresidentCandidate = vicePresidentCandidate
    this.supportingParties = []
    this.votes = 0
  }

  getTotalLegislativeSeats() {
    return this.supportingParties.reduce((acc, party) => acc + party.legislativeSeats, 0)
  }

  getTotalNationalVotes() {
    return this.supportingParties.reduce((acc, party) => acc + party.nationalVotes, 0)
  }
}

class Party {
  constructor(name, legislativeSeats, nationalVotes) {
    this.name = name
    this.legislativeSeats = legislativeSeats
    this.nationalVotes = nationalVotes
    this.supportedCandidate = null
  }

  declareSupport(candidate) {
    this.supportedCandidate = candidate
    candidate.supportingParties.push(this)
  }
}

class PresidentialElection {
  constructor(schedule) {
    this.schedule = new Date(schedule)
    this.candidates = []
  }

  registerCandidate(candidate) {
    const { presidentCandidate, vicePresidentCandidate, supportingParties } = candidate
    const totalLegislativeSeats = candidate.getTotalLegislativeSeats()
    const totalNationalVotes = candidate.getTotalNationalVotes()

    let unfulfilledRequirements = []

    if (totalLegislativeSeats < 112 && totalNationalVotes < 0.25) {
      unfulfilledRequirements.push('ambang batas partai pengusung capres dan cawapres')
    }

    if (presidentCandidate.age < 40 || vicePresidentCandidate.age < 40) {
      unfulfilledRequirements.push('umur minimal 40 tahun')
    }

    if (unfulfilledRequirements.length === 0) {
      this.candidates.push(candidate)
      console.log(`${presidentCandidate.name} dan ${vicePresidentCandidate.name} berhasil terdaftar sebagai pasangan capres dan cawapres untuk pilpres ${this.schedule.getDate()}-${this.schedule.getMonth() + 1}-${this.schedule.getFullYear()}`)
      console.log(`Pasangan ini diusung oleh ${supportingParties.length} partai (${(totalNationalVotes * 100).toFixed(2)}% suara nasional atau ${totalLegislativeSeats} kursi legislatif)`)
    } else {
      console.log(`Maaf, pasangan ${presidentCandidate.name} dan ${vicePresidentCandidate.name} tidak memenuhi syarat:`)
      unfulfilledRequirements.forEach(req => {
        console.log(`- ${req}`)
      })
    }
  }
}


const jokowi = new Politician('Joko Widodo', '1961-06-21')
const prabowo = new Politician('Prabowo Subianto', '1951-10-17')
const maruf = new Politician('Ma\'ruf Amin', '1943-03-11')
const sandi = new Politician('Sandiaga Uno', '1969-06-28')

let anto = new Voter('Anto', '2000-08-29')
let budi = new Voter('Budi', '2010-07-04')
let ani = new Voter('Ani', '1995-02-13')

const pdip = new Party('PDIP', 109, 0.1895)
const golkar = new Party('Golkar', 91, 0.1475)
const gerindra = new Party('Gerindra', 73, 0.1181)
const demokrat = new Party('Demokrat', 61, 0.1019)
const pan = new Party('PAN', 49, 0.0759)
const pkb = new Party('PKB', 47, 0.0904)
const pks = new Party('PKS', 40, 0.0679)
const ppp = new Party('PPP', 39, 0.0653)
const nasdem = new Party('NasDem', 35, 0.0672)
const hanura = new Party('Hanura', 16, 0.0526)

console.log(pdip)
// terminal output
/* 
Party {
  name: 'PDIP',
  legislativeSeats: 109,
  nationalVotes: 0.1895,
  supportedCandidate: null }
  */

console.log(gerindra)
// terminal output
/* 
Party {
  name: 'Gerindra',
  legislativeSeats: 73,
  nationalVotes: 0.1181,
  supportedCandidate: null }
  */

const pilpres = new PresidentialElection('2019-04-17')

const jokowiAmin = new Candidate(jokowi, maruf)
const prabowoSandi = new Candidate(prabowo, sandi)

console.log(jokowiAmin)
// terminal output
/* 
Candidate {
  presidentCandidate:
    Politician {
      name: 'Joko Widodo',
      birthday: 1961-06-21T00:00:00.000Z,
      role: 'politician' },
  vicePresidentCandidate:
    Politician {
      name: 'Ma\'ruf Amin',
      birthday: 1943-03-11T00:00:00.000Z,
      role: 'politician' },
  supportingParties: [],
  votes: 0 }
*/

console.log(prabowoSandi)
// terminal output
/* 
Candidate {
  presidentCandidate:
    Politician {
      name: 'Prabowo Subianto',
      birthday: 1951-10-17T00:00:00.000Z,
      role: 'politician' },
  vicePresidentCandidate:
    Politician {
      name: 'Sandiaga Uno',
      birthday: 1969-06-28T00:00:00.000Z,
      role: 'politician' },
  supportingParties: [],
  votes: 0 }
*/

pilpres.registerCandidate(jokowiAmin)
// terminal output
/* 
Maaf, pasangan Joko Widodo dan Ma'ruf Amin tidak memenuhi syarat:
- ambang batas partai pengusung capres dan cawapres
*/

pilpres.registerCandidate(prabowoSandi)
// terminal
/* 
Maaf, pasangan Prabowo Subianto dan Sandiaga Uno tidak memenuhi syarat:
- ambang batas partai pengusung capres dan cawapres
*/

pdip.declareSupport(jokowiAmin)
golkar.declareSupport(jokowiAmin)
gerindra.declareSupport(prabowoSandi)
pkb.declareSupport(jokowiAmin)
pks.declareSupport(prabowoSandi)
ppp.declareSupport(jokowiAmin)
nasdem.declareSupport(jokowiAmin)
hanura.declareSupport(jokowiAmin)
pan.declareSupport(prabowoSandi)
demokrat.declareSupport(prabowoSandi)

console.log(demokrat)
// terminal
/* 
Party {
  name: 'Demokrat',
  legislativeSeats: 61,
  nationalVotes: 0.1019,
  supportedCandidate:
    Candidate {
      presidentCandidate:
        Politician {
          name: 'Prabowo Subianto',
          birthday: 1951-10-17T00:00:00.000Z,
          role: 'politician' },
      vicePresidentCandidate:
        Politician {
          name: 'Sandiaga Uno',
          birthday: 1969-06-28T00:00:00.000Z,
          role: 'politician' },
      supportingParties: [ [Party], [Party], [Party], [Circular] ],
      votes: 0 } }
*/

pilpres.registerCandidate(jokowiAmin)
// terminal output
/* 
Joko Widodo dan Ma'ruf Amin berhasil terdaftar sebagai pasangan capres dan cawapres untuk pilpres 17-4-2019
Pasangan ini diusung oleh 6 partai (61.25% suara nasional atau 337 kursi legislatif)
*/

pilpres.registerCandidate(prabowoSandi)
// terminal output
/* 
Prabowo Subianto dan Sandiaga Uno berhasil terdaftar sebagai pasangan capres dan cawapres untuk pilpres 17-4-2019
Pasangan ini diusung oleh 4 partai (36.38% suara nasional atau 223 kursi legislatif)
*/

const nurhadi = new Politician('Nurhadi', '1969-08-10')
const aldo = new Politician('Aldo', '2019-01-01')

const dildo = new Candidate(nurhadi, aldo)
pilpres.registerCandidate(dildo)
// terminal output
/*
Maaf, pasangan Nurhadi dan Aldo tidak memenuhi syarat:
- ambang batas partai pengusung capres dan cawapres
- umur minimal 40 tahun
*/

anto.vote(jokowiAmin)
// terminal output
/* 
Selamat, Anto telah berhasil melakukan pemilihan
*/

budi.vote(jokowiAmin)
// terminal output
/* 
Maaf, Budi belum memiliki hak untuk memilih
*/

ani.vote(prabowoSandi)
// terminal output
/* 
Selamat, Ani telah berhasil melakukan pemilihan
*/

ani.vote(prabowoSandi)
//terminal output
/*
Dilarang memilih lebih dari satu kali!!!
*/