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
// <jawaban disini>
//