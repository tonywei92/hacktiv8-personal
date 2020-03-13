class Audience {
  constructor(name, gender, age, email) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.email = email;
    this.type = 'Regular';
  }
}

class Member extends Audience {
  constructor(name, gender, age, email) {
    super(name, gender, age, email);
    this.memberId = this.generateMemberId();
    this.balance = 0;
  }

  generateMemberId() {
    //generate type member
    let type = Math.round(Math.random()*1);
    if (type === 0) {
      this.type = 'Silver';
    } else {
      this.type = 'Gold';
    }

    return this.name.substring(0, 3) + (2018 - this.age) + Math.round(Math.random()*20);
  }

  topUp(amount) {
    if (amount < 500) {
      console.log(`Sorry, minimum amount is 500`);
    } else {
      this.balance = amount;
    }
  }

}

class NonMember extends Audience {
  constructor(name, gender, age, email) {
    super(name, gender, age, email);
  }
}

class TheaterBroadway {
  constructor() {
    this.todayShow = null;
    this.audience = { VVIP: [], VIP: [], Regular: [] };
    this.priceVIP = null;
    this.priceVVIP = null;
    this.priceRegular = null;
  }

  setTodayShow(titleBroadway, priceVVIP, priceVIP, priceRegular) {
    this.todayShow = titleBroadway;
    this.priceVVIP = priceVVIP;
    this.priceVIP = priceVIP;
    this.priceRegular = priceRegular;
  }

  buyTicket(audience, section, howMuch) {
    let total = 0;
    let price = 0;
    let remaining = 0;
    let displayName = '';

    if (section === 'VVIP' || section === 'VIP') {
      if (audience.memberId) {
        displayName = `${audience.memberId} (${audience.type})`;
        if (section === 'VVIP') {
          if (audience.type === 'Gold') {
            total = howMuch * this.priceVVIP;
            price = this.priceVVIP;
            this.putAudience(howMuch, section, audience);
          } else {
            console.log(`We are sorry, this section only for gold member`);
            return;
          }
        } else {
          total = howMuch * this.priceVIP;
          price = this.priceVIP;
          this.putAudience(howMuch, section, audience);
        }
      } else {
        console.log(`With all due respect, section ${section} only for member`);
        return;
      }
    } else {
      displayName = `${audience.name} (${audience.type})`
      total = howMuch * this.priceRegular;
      price = this.priceRegular;
      this.putAudience(howMuch, section, audience);
    }


    console.log("**************************INVOICE****************************");
    console.log(`Theater Broadway                             TICKET CONFIRMED`);
    console.log(`                      ${this.todayShow}       ${displayName}`);
    console.log(`*************************************************************`);
    console.log(` Quantity    : ${howMuch}`);
    console.log(` Price       : ${price}`);
    console.log(` Sub Total   : ${total}`);
    if (audience.memberId) {
      console.log(` Balance     : ${audience.balance}`);
      remaining = audience.balance - total;
      if (remaining > 0) {
        audience.balance = remaining;
        console.log(` Grand Total : PAID BY BALANCE       Remaining Balance: ${remaining}`);
      } else {
        audience.balance = 0;
        console.log(` Grand Total : ${Math.abs(remaining)}              Remaining Balance: 0`);
      }
    } else {
      console.log(` Grand Total : ${total}`);
    }

    console.log("*************************************************************");
  }

  putAudience(howMuch, section, audience) {
    for (let i = 0; i < howMuch; i++) {
      this.audience[section].push(audience);
    }
  }

  showAudience() {
    for (let i in this.audience) {
      console.log(`-------------- ${i}---------------`);
      if (this.audience[i].length > 0) {
        for (let j = 1; j <= this.audience[i].length - 1; j++) {
          console.log(`${j}. ${this.audience[i][j].name} (${this.audience[i][j].type} member)`);
        }
      } else {
        console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
      }
    }
  }

}

let theater = new TheaterBroadway();
theater.setTodayShow('The Book of Mormon', 500, 350, 150);
console.log(theater);

let irsyah = new Member('irsyah', 'female', 20, 'irsyah@hacktiv8.com');
console.log(irsyah);
irsyah.topUp(10000);

let rama = new NonMember('rama', 'male', 20, 'rama@hacktiv8.com');

theater.buyTicket(irsyah, 'VVIP', 3);
theater.buyTicket(rama, 'Regular', 2)
console.log();
console.log();
theater.showAudience();
console.log(theater);
