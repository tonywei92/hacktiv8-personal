class Eye {
  constructor(eyeCount){
    this.eyeCount = eyeCount || 2
  }
}
class Animal {
  constructor(params){
    this.name = params.name
    this.eye = new Eye
    this._facingSeason =  null 
    this.isActive = false
    this._activity =  null
  }

  get activity(){
    return `${this.name} is ${this._activity}`
  }

  set facingSeason (value){
    this._facingSeason = value
  }

  makeActivity(){
    if(this._facingSeason === 'bright'){
      this.isActive = true
    } else if(this._facingSeason === 'rainy') {
      this.isActive = false
    }

    if(this.isActive){
      this._activity = 'playing'
    } else {
      this._activity = 'warming'
    }
  }
}

class Bird extends Animal {
  constructor(){
    super({name: 'bird'})
    this.wings = 2
  }
}
class Tiger extends Animal {
  constructor(){
    super({name: 'tiger'})
    this.fangs = 4
  }
}
class HoneyBear extends Animal {
  constructor(){
    super({name: 'honeyBear'})
  }

  makeActivity(){
    super.makeActivity()

    if(this.isActive){
      this._activity = 'climbing tree'
    } else {
      this._activity = 'sleeping'
    }
  }
}

class Zoo {
  constructor(name, season){
    this.name = name
    this.season = season || 'bright'
    this.animals = []
  }

  addAnimals(animals){
    this.animals = animals

    for(let i = 0; i < this.animals.length; i++){
      this.animals[i].facingSeason = this.season
      this.animals[i].makeActivity()
    }
  }

  nextSeason(){
    if(this.season === 'bright'){
      this.season = 'rainy'
    } else {
      this.season = 'bright'
    }

    for(let i = 0; i < this.animals.length; i++){
      this.animals[i].facingSeason = this.season
      this.animals[i].makeActivity()
    }
  }
  
  showAnimalsActivity(){
    for(let i = 0; i < this.animals.length; i++){
      console.log(animals[i].activity)
    }
  }
}

class AnimalFactory {
  static collectAnimals(strAnimals){
    const animals = []

    for(let i = 0; i < strAnimals.length; i++){
      switch(strAnimals[i]){
        case 'tiger': 
          animals.push(new Tiger())
          break
        case 'bird':
          animals.push(new Bird())
          break
        case 'honeyBear':
          animals.push(new HoneyBear())
          break
        default: 
          console.log('error')
      }
    }

    return animals
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

console.log("===========")
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
// zoo <-> animal = aggregation
// animal <-> eye = composition