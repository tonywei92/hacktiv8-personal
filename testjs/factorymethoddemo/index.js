// aggregation
class Cinema {
    constructor() {
        this.tukangSobekTiket = new Person();
        this.persons = [];
    }

    addPerson(person) {
        this.persons.push(person)
    }
}

class Person {

}

const isro = new Person;

const xxi = new Cinema;


// composition
class Brain {
    think() {

    }
}

class Human {
    constructor() {
        this.brain = new Brain();
    }

    mengerjakanMTK() {
        this.brain.think();
    }
}

const ilham = new Human();
