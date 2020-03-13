function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Election {
  constructor(eletionTitle, year) {
    this.eletionTitle = eletionTitle
    this.year = year
    this.participants = {}
    this.votesData = []
  }

  registerParticpants(participantData) {
    for (const participantType in participantData) {
      let participants = participantData[participantType]
      participants.forEach((participant) => {
        let newParticipant = null
        if (participantType === "politicians") {
          let politicianId = Election.generateParticipantId(participant) + `-${participant.party.name.slice(0, 3)}`
          newParticipant = new Politician(politicianId, participant.fullName, participant.age, participant.gender, participant.party)
          participant.party.politicians.push(newParticipant)
        } else if (participantType === "voters") {
          let voterId = Election.generateParticipantId(participant)
          newParticipant = new Voter(voterId, participant.fullName, participant.age, participant.gender)
        }
        if (!this.participants[participantType]) {
          this.participants[participantType] = []
        }
        this.participants[participantType].push(newParticipant)
      })
    }
  }

  votes(votesData) {
    // validasi
    let validVotes = 0
    let invalidVotes = 0
    votesData.forEach((vote) => {
      let listPoliticians = this.participants.politicians
      let listVoters = this.participants.voters
      let politicianIdx = listPoliticians.findIndex((politician) => politician.politicianId === vote.politicianId)
      let voterIdx = listVoters.findIndex((voter) => voter.voterId === vote.voterId)
      if (politicianIdx === -1) {
        invalidVotes += 1
      } else if (voterIdx === -1) {
        invalidVotes += 1
      } else {
        let votesIndex = this.votesData.findIndex((voteData) => vote.voterId === voteData.voter.voterId)
        if (votesIndex === -1) {
          this.votesData.push({
            politician: listPoliticians[politicianIdx],
            voter: listVoters[voterIdx]
          })
          validVotes += 1
        } else {
          invalidVotes += 1
        }
      }
    })
    console.log(`TOTAL VOTES: Valid Votes: ${validVotes} Invalid Votes: ${invalidVotes}`)
  }

  showElectability() {
    let listPoliticians = [...this.participants.politicians]
    console.log("LIST POLITICIANS")
    console.log("================")
    listPoliticians = listPoliticians.map((pol) => {
      pol.totalVotes = this.votesData.filter(({politician}) => politician.politicianId === pol.politicianId).length
      return pol
    })
    listPoliticians.sort((pol1, pol2) => pol1.totalVotes < pol2.totalVotes)
    listPoliticians.forEach((politician) => {
      console.log(`
Name: ${politician.fullName}
party: ${politician.party.name}
totalVotes: ${politician.totalVotes}`)
    })
  }

  static generateParticipantId(participant) {
    return `${participant.fullName.slice(0, 3)}-${new Date().getFullYear() - participant.age}-${getRandomInt(100, 999)}`
  }
}

class Participant {
  constructor(fullName, age, gender) {
    let [firstName, lastName] = fullName.split(" ")
    this.firstName = firstName
    this.lastName = lastName || firstName
    this.age = age
    this.gender = gender
  }

  get fullName() {
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
    return `${this.firstName.capitalize()} ${this.lastName.capitalize()}`
  }
}

class Politician extends Participant {
  constructor(politicianId, fullName, age, gender, party) {
    super(fullName, age, gender)
    this.party = party
    this.politicianId = politicianId
  }
}

class Voter extends Participant {
  constructor(voterId, fullName, age, gender) {
    super(fullName, age, gender)
    this.voterId = voterId 
  }
}

class Party {
  constructor(name) {
    this.name = name
    this.politicians = []
  }
}

const presidentElection = new Election("President Election", 2019)
const golkar = new Party("Golkar")
const pdip = new Party("PDIP")
const pks = new Party("PKS")

presidentElection.registerParticpants({
  politicians: [{
    fullName: "yoki suprayogi",
    age: 28,
    gender: "male",
    party: golkar
  }, {
    fullName: "aries dimas",
    age: 27,
    gender: "male",
    party: pdip
  }, {
    fullName: "irsyah mardiah",
    age: 29,
    gender: "female",
    party: pks
  }, {
    fullName: "ryan akbar",
    age: 30,
    gender: "male",
    party: golkar
  }],
  voters: [{
    fullName: "ramadiansyah muhammad",
    age: 24,
    gender: "male"
  }, {
    fullName: "wika silo",
    age: 25,
    gender: "male"
  }, {
    fullName: "windiana krismanuyar",
    age: 26,
    gender: "female"
  }]
})

let voter1 = presidentElection.participants.voters[0].voterId
let voter2 = presidentElection.participants.voters[1].voterId
let voter3 = presidentElection.participants.voters[2].voterId

let politician1 = presidentElection.participants.politicians[0].politicianId
let politician2 = presidentElection.participants.politicians[1].politicianId
let politician3 = presidentElection.participants.politicians[2].politicianId

presidentElection.votes([{
  politicianId: politician1,
  voterId: voter1
}, {
  politicianId: politician1,
  voterId: voter2
}, {
  politicianId: politician2,
  voterId: voter3
}])

presidentElection.votes([{
  politicianId: politician2,
  voterId: voter1
}])

presidentElection.showElectability()