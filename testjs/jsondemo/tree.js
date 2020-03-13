class FruitTree {
    constructor() {
        this._fruits = [];
    }

    produce() {
        let fruitCount = Math.floor(Math.random() * 10);
        for (let i = 0; i < fruitCount; i++) {
            this._fruits.push(new Fruit)
        }
    }
}

class Fruit {
    constructor() {
        this.quality = Boolean(Math.round(Math.random()));
    }
}

class MangoTree extends FruitTree {
    produce(type) {
        let fruitCount = Math.floor(Math.random() * 10);
        for (let i = 0; i < fruitCount; i++) {
            this._fruits.push(new type)
        }
    }
}


class Mango extends Fruit {

}

const pohonMangga = new MangoTree()
pohonMangga.produce(Mango)