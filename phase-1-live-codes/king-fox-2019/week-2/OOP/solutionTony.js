class Eye {
  constructor() {
    this._eyeCount = 2;
  }
}

class Animal {
  constructor(name) {
    this.name = name;
    this._eye = new Eye();
    this._facingSeason = null;
    this._activity = null;
    this.isActive = false;
  }

  set facingSeason(value) {
    this._facingSeason = value;
  }

  makeActivity() {
    this.isActive = this._facingSeason === 'bright';
    if (this.isActive) {
      this._activity = 'playing';
    }
    else {
      this._activity = 'warming';
    }
  }

  get activity() {
    return this.name + ' is ' + this._activity;
  }
}

class Bird extends Animal {
  constructor() {
    super('bird');
    this.wings = 2;
  }
}

class Tiger extends Animal {
  constructor() {
    super('tiger');
    this.fangs = 4;
  }
}

class HoneyBear extends Animal {
  constructor() {
    super('honeyBear');
  }

  makeActivity() {
    this.isActive = this._facingSeason === 'bright';
    if (this._facingSeason === 'bright') {
      this._activity = 'climbing tree';
    }
    else {
      this._activity = 'sleeping';
    }
  }
}

class Zoo {
  constructor(name) {
    this.name = name;
    this.season = 'bright';
    this.animals = [];
  }

  addAnimals(animals) {
    this.animals = animals;
    for (let i = 0; i < this.animals.length; i++) {
      this.animals[i]._facingSeason = this.season;
      this.animals[i].makeActivity();
    }
  }

  nextSeason() {
    if (this.season === 'bright') {
      this.season = 'rainy';
    }
    else {
      this.season = 'bright';
    }
    for (let i = 0; i < this.animals.length; i++) {
      this.animals[i].facingSeason = this.season;
      this.animals[i].makeActivity();
    }
  }

  showAnimalsActivity() {
    for (let i = 0; i < this.animals.length; i++) {
      console.log(this.animals[i].activity)
    }
  }
}

class AnimalFactory {
  static collectAnimals(animals) {
    const arrAnimals = [];
    for (let i = 0; i < animals.length; i++) {
      if (animals[i] === 'tiger') {
        arrAnimals.push(new Tiger);
      }
      if (animals[i] === 'bird') {
        arrAnimals.push(new Bird);
      }
      if (animals[i] === 'honeyBear') {
        arrAnimals.push(new HoneyBear);
      }
    }
    return arrAnimals;
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
// Zoo <-> Animal = aggregation
// Animal <-> Eye = composition