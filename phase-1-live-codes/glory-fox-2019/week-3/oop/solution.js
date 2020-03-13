class Bacterium {
  constructor(tails, birthAge) {
    this.age = this.generateAge();
    this.tails = tails || 0;
    this.birthAge = birthAge || 0;
  }

  generateAge() {
    return Math.round(Math.random() * (5 - 2) + 2)
  }

  birth() {
    return `I am a parent!`;
  }
}

class Propionbacterium extends Bacterium {
  constructor() {
    super(4, 3);
  }

  birth() {
    return `Propionbacterium membelah diri`;
  }
}

class Staphylobacterium extends Bacterium {
  constructor() {
    super(3, 1);
  }

  birth() {
    return `Staphylobacterium bertelur`;
  }
}

class Corynebacterium extends Bacterium {
  constructor() {
    super(1, 2);
  }

  birth() {
    return `Corynebacterium bermutasi`;
  }
}

class Ecosystem {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.bacteria = [];
  }

  getBacteria(bacteria) {
    for (let bacterium in bacteria) {
      for (let i = 0; i < bacteria[bacterium]; i++) {
        this.bacteria.push(eval(`new ${bacterium}()`))
      }
    }
  }
}

let ecosystem = new Ecosystem('Epidermis', 'skin');
ecosystem.getBacteria({
  Propionbacterium: 3,
  Corynebacterium: 2,
  Staphylobacterium: 3,
  Bacterium: 1
});

console.log(ecosystem);

ecosystem.bacteria.forEach(backterium => {
  console.log(backterium.birth());
})
