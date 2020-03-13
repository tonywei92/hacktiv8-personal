"use strict"

class Eye {
  constructor() {
    this._eyeCount = 2
  }
}

class Animals {
  constructor(name) {
    this.name = name
    this._eye = new Eye
    this._facingSeason = "bright"
    this._activity = null
    this.isActive = false
  }
  set facingSeason(value) {
    this._facingSeason = value
  }
  // set facingSeason(cek) {
  //   const season = Zoo.nextSeason()
  //   if (season['season'] == "bright") {
  //     this._facingSeason = "bright"
  //   } else {
  //     this._facingSeason = "rainy"
  //   }
  //   console.log(this._facingSeason)
  // }

  static makeActivity() {
    console.log(this._facingSeason, 'cek')
    if (this._facingSeason == "bright") {
      this.isActive = true
      this._activity = "playing"
    } else {
      this.isActive = false
      this._activity = "warming"
    }
  }
}

class Bird extends Animals {
  constructor() {
    super("bird")
    this.wings = 2
  }
}

class Tiger extends Animals {
  constructor() {
    super("tiger")
    this.fangs = 4
  }
}

class HoneyBear extends Animals {
  constructor() {
    super("honeyBear")
  }
  makeActivity() {
    if (this._facingSeason == "bright") {
      this.isActive = false
      this._activity = "climbing tree"
    } else {
      this.isActive = true
      this._activity = "playing"
    }
  }
}

class Zoo {
  constructor(namaZoo) {
    this.name = namaZoo
    this.season = "bright"
    this.animals = []
  }

  addAnimals(data) {
    for (let i = 0; i < data.length; i++) {
      this.animals.push(data[i])
    }

    for (let i = 0; i < this.animals.length; i++) {
      this.animals.facingSeason = this.season
    }
    return data
  }

  nextSeason() {
    const random = Math.round(Math.random())
    if (random == 0) {
      this.season = "rainy"
    } else {
      this.season = "bright"
    }
    return this.season
  }
}

class AnimalFactory {
  constructor() {
  }

  static collectAnimals(data) {
    const arr = []
    for (let i = 0; i < data.length; i++) {
      if (data[i] === "tiger") {
        arr.push(new Tiger)
      } else if (data[i] === "honeyBear") {
        arr.push(new HoneyBear)
      } else if (data[i] === "bird") {
        arr.push(new Bird)
      }
    }
    return arr
  }
}

// Driver Code
const zoo = new Zoo('Taman Safari');
console.log(zoo);
/*
Zoo { name: 'Taman Safari', season: 'bright', animals: [] }
*/

const animals = AnimalFactory.collectAnimals(['tiger', 'honeyBear', 'bird', 'bird']);
console.log(animals[0])
/*
Tiger {
  name: 'tiger',
  _eye: Eye { _eyeCount: 2 },
  _facingSeason: null,
  _activity: null,
  isActive: false,
  fangs: 4
}
*/
zoo.addAnimals(animals);
// zoo.nextSeason()
// animal.makeActivity()
console.log(zoo);
/*
Zoo {
  name: 'Taman Safari',
  season: 'bright',
  animals: [
    Tiger {
      name: 'tiger',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'playing',
      isActive: true,
      fangs: 4
    },
    HoneyBear {
      name: 'honeyBear',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'climbing tree',
      isActive: false
    },
    Bird {
      name: 'bird',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'playing',
      isActive: true,
      wings: 2
    },
    Bird {
      name: 'bird',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'playing',
      isActive: true,
      wings: 2
    }
  ]
}
*/
console.log(zoo.animals[0]);
/*
Tiger {
  name: 'tiger',
  _eye: Eye { _eyeCount: 2 },
  _facingSeason: 'bright',
  _activity: 'playing',
  isActive: true,
  fangs: 4
}
*/
return

zoo.showAnimalsActivity();
/*
tiger is playing
honeyBear is climbing tree
bird is playing
bird is playing
*/
zoo.nextSeason();
zoo.showAnimalsActivity();
/*
tiger is warming
honeyBear is sleeping
bird is warming
bird is warming
*/


// Tunjukan hubungan-hubungan antar class yang telah kalian buat diatas:
// contoh: person <-> bioskop = aggregation
// 
// Jawaban:
// <jawaban disini>
//