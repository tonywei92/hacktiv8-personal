const fs = require('fs');
const path = require('path');

class Ingredient {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

class Cookie {
    constructor(ingredients) {
        this.status = "mentah";
        this.ingredients = ingredients;
    }

    bake() {
        this.status = "selesai dimasak";
    }
}

class PeanutButter extends Cookie {
    name = "peanut butter"
    constructor() {
        super();
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    name = "chocolate chip";
    constructor() {
        super();
        this.choc_chip_count = 200;
    }
}

class ChocolateCheese extends Cookie {
    name = "chocolate cheese";
    constructor() {
        super();
        this.choc_cheese_count = 150;
    }
}

class ChocolateButter extends Cookie {
    name = "chocolate butter";
    constructor() {
        super();
        this.choc_butter_count = 150;
    }
}

class CookieFactory {
    static create(options) {
        let result = [];
        for (let i = 0; i < options.length; i++) {
            switch (options[i]) {
                case "peanut butter":
                    result.push(new PeanutButter())
                    break;
                case "chocolate chip":
                    result.push(new ChocolateChip());
                    break;
                case "chocolate cheese":
                    result.push(new ChocolateCheese());
                    break;
                case "chocolate butter":
                    result.push(new ChocolateButter());
                    break;
            }
        }
        return result;
    }
}

let options = fs.readFileSync(path.join(__dirname, './cookies.txt'), { encoding: "utf8" }).split('\n');
let batch_of_cookies = CookieFactory.create(options);

console.log(batch_of_cookies);