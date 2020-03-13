function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Farm {
  constructor(name, location) {
    this.name = name
    this.location = location
    this.animals = []
  }

  getAnimals(animals) {
    for (const animal in animals) {
      for (let i = 0; i < animals[animal]; i++) {
        this.animals.push(eval(`new ${animal}(getRandomInt(2, 5))`))
      }
    }
  }

  nextYear() {
    let tempAnimals = []
    this.animals.forEach((animal) => {
      animal.age += 1
      if (animal.age % animal.spawnAge === 0 || animal.age % animal.birthAge === 0) {
        if (typeof animal.birth === "function") {
          tempAnimals.push(animal.birth())
        } else {
          tempAnimals = [...tempAnimals, ...animal.spawn(getRandomInt(1, 4))]
        }
      }
    })
    this.animals = [...this.animals, ...tempAnimals]
  }
  
  getInfo() {
    console.log("Farm name: " + this.name)
    console.log("Farm location: " + this.location)
    console.log("Farm List Animals: ")
    console.log("===========================")
    const listAnimal = {}
    for (const animal of this.animals) {
      if (!listAnimal[animal.constructor.name]) {
        listAnimal[animal.constructor.name] = 0
      }
      listAnimal[animal.constructor.name] += 1
    }
    for (const animal in listAnimal) {
      console.log(`Jumlah ${animal}: ${listAnimal[animal]} ekor`)
    }
  }
}

class Animal {

  constructor(age, legs) {
    this.age = age
    this.legs = legs
  }
}

class Cow extends Animal {
  constructor(age) {
    super(age, 4)
    this.birthAge = 4
  }

  birth() {
    return new Cow(0, 4)
  }
}

class Chicken extends Animal {
  constructor(age) {
    super(age, 2)
    this.spawnAge = 2
  }

  spawn(count) {
    let eggs = []
    for (let i = 0; i < count; i++) {
      eggs.push(new Chicken(0))
    }
    return eggs
  }
  
}

class Sheep extends Animal {
  constructor(age) {
    super(age, 4)
    this.birthAge = 2
  }

  birth() {
    return new Sheep(0)
  }
}

const safari = new Farm("Taman Safari", "Puncak")
const ragunan = new Farm("Ragunan", "Cilandak")
safari.getAnimals({
  Cow: 1,
  Chicken: 2,
  Sheep: 3
})
console.log(safari)
safari.nextYear()
// safari.nextYear()
// safari.nextYear()

console.log(safari)
safari.getInfo()