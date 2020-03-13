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
    this.isActive = null;
    this._activity = null;
  }

  set facingSeason(season) {
    this._facingSeason = season;
    this.makeActivity();
  }

  get activity() {
    return `${this.name} is ${this._activity}`;
  }

  makeActivity() {
    if (this._facingSeason === 'bright') {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    if (this.isActive === true) {
      this._activity = 'playing';
    } else {
      this._activity = 'warming';
    }
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.wings = 2;
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name);
    this.fangs = 4;
  }
}

class HoneyBear extends Animal {
  constructor(name) {
    super(name);
  }

  makeActivity() {
    if (this._facingSeason === 'bright') {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    if (this.isActive === true) {
      this._activity = 'climbing tree';
    } else {
      this._activity = 'sleeping';
    }
  }
}

class AnimalFactory {
  static collectAnimals(inputAnimal) {
    const animals = [];
    inputAnimal.forEach(animal => {
      if (animal === 'bird') {
        animals.push(new Bird('bird', 'bright'));
      } else if (animal === 'tiger') {
        animals.push(new Tiger('tiger', 'bright'));
      } else {
        animals.push(new HoneyBear('honeyBear', 'bright'));
      }
    })
    return animals;
  }
}

class Zoo {
  constructor(name) {
    this.name = name;
    this.season = 'bright';
    this.animals = [];
  }

  addAnimals(animals) {
    animals.forEach(animal => {
      animal.facingSeason = this.season;
    })
    this.animals = this.animals.concat(animals);
  }

  showAnimalsActivity() {
    this.animals.forEach(animal => {
      console.log(animal.activity);
    })
  }

  nextSeason() {
    if (this.season === 'bright') {
      this.season = 'rainy';
    } else {
      this.season === 'bright'
    }
    this.animals.forEach(animal => {
      animal.facingSeason = this.season;
    })
  }
}

// Driver Code
const zoo = new Zoo('Taman Safari');
console.log(zoo);
/*
  Zoo {
    name: 'Taman Safari',
    season: 'bright',
    animals: []
  }
*/

const animals = AnimalFactory.collectAnimals(['tiger', 'honeyBear', 'bird', 'bird']);
console.log(animals[0])
/*
Tiger {
  name: 'tiger',
  eye: Eye { eyeCount: 2 },
  facingSeason: 'bright',
  isActive: true,
  activity: 'playing',
  fangs: 4 }
*/

zoo.addAnimals(animals);
console.log(zoo);
/*
  Zoo {
    name: 'Taman Safari',
    season: 'bright',
    animals: [ Object Animals ]
  }
*/
console.log(zoo.animals[0]);
/*
Tiger {
  name: 'tiger',
  eye: Eye { eyeCount: 2 },
  facingSeason: 'bright',
  isActive: true,
  activity: 'playing',
  fangs: 4 }
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
// contoh: person <-> cinema = aggregation
// 
// Jawaban:
// <jawaban disini>
//