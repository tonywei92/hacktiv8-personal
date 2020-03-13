class Songwriter {
  constructor(name, birthplace, age, totalWritten) {
    this.name = name
    this.birthplace = birthplace
    this.age = age
    this.totalWritten = totalWritten
    this.list_song = []
    this.totalOnSpotify = 0
    this.bonus = 0
  }

  createSong(title) {
    var song = new Attention(title)
    this.list_song.push(song)
  }

  launchToSpotify(title) {
    let isFound = false
    for(let i=0; i<this.list_song.length; i++) {
      if(this.list_song[i].title == title) {
        this.totalOnSpotify++
        this.list_song[i].status = true
        isFound = true
      }
    }

    if(!isFound) {
      console.log('Song tidak ditemukan')
    }
  }

  addSinger(songTitle, objSinger) {
    let isFound = false
    for(let i=0; i<this.list_song.length; i++) {
      if(this.list_song[i].title == songTitle) {
        this.list_song[i].singers.push(objSinger)
        this.bonus += 1000
        isFound = true
      }
    }

    if(!isFound) {
      console.log('Song tidak ditemukan')
    }
  }
}

class JKash extends Songwriter {
  constructor(name, birthplace, age, totalWritten) {
    super(name, birthplace, age, totalWritten)
  }
}

class Song {
  constructor(title) {
    this.title = title
    this.status = false
    this.singers = []
  }
}

class Attention extends Song {
  constructor(title) {
    super(title)
  }
}

class Singer {
  constructor(name, debuted_year) {
    this.name = name
    this.debuted_year = debuted_year
  }
}

var jKash = new JKash('Jacob Kash', 'Virginia', 35, 64)
jKash.createSong('attention')
jKash.launchToSpotify('attention')

// release 3
var objSinger = new Singer('charlie puth', '2001')
jKash.addSinger('attention', objSinger)

console.log(jKash)
