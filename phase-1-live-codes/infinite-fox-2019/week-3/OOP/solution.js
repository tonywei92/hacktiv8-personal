class Phone {
    constructor(name) {
        this.name = name;
        this.clan = null;
    }

    createNewClan(clan) {
        if (clan === 'druid') {
            this.clan = new Druid(this.name);
        } else if (clan === 'warrior') {
            this.clan = new Warrior(this.name);
        }
    }
}

class Clan {
    constructor(owner, name, power) {
        this.owner = owner;
        this.name = name;
        this._budget = 0;
        this.power = power;
    }

    get budget() {
        return `(${this.name}-${this.owner}) current budget are ${this._budget.toLocaleString('USD')}$`;
    }

    set budget(budget) {
        if (budget >= 0) {
            this._budget = budget;
        }
    }
}

class Warrior extends Clan {
    constructor(name) {
        super(name, 'warrior', 1000);
    }
}

class Druid extends Clan {
    constructor(name) {
        super(name, 'druid', 1000);
    }

    powerUp(power) {
        this.power += power;
        console.log(`Successfully added ${power} power to ${this.name}, current power are ${this.power}.`)
    }
}

class GameCenter {
    static clanWars(home, away) {
        if (home.clan.power > away.clan.power) {
            console.log(`Congratulations ${home.name} won the game!`);
        } else if (home.clan.power < away.clan.power) {
            console.log(`Congratulations ${away.name} won the game!`);
        } else {
            console.log(`It's a draw.`)
        }
    }
}

// Release 1
const isroPhone = new Phone('isro');
const semmiPhone = new Phone('semmi');

isroPhone.createNewClan('druid');
semmiPhone.createNewClan('warrior');

// Release 2
isroPhone.clan.budget = -100;
console.log(isroPhone.clan.budget); // (isro-druid) current budget are 0$
isroPhone.clan.budget = 1000;
console.log(isroPhone.clan.budget); // (isro-druid) current budget are 1,000$

semmiPhone.clan.budget = 1000; 
console.log(semmiPhone.clan.budget); // (semmi-warrior) current budget are 1,000$

// Release 3
GameCenter.clanWars(semmiPhone, isroPhone); // It's a draw
isroPhone.clan.powerUp(100); // Successfully added 100 power to druid, current power are 1100.
GameCenter.clanWars(isroPhone, semmiPhone); // Congratulations isro won the game!

semmiPhone.createNewClan('druid');
semmiPhone.clan.powerUp(200); // Successfully added 200 power to druid, current power are 1200.
GameCenter.clanWars(isroPhone, semmiPhone); // Congratulations semmi won the game!