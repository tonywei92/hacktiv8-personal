class Person {
  constructor(name, birthYear, gender) {
    this._name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  }

  getName() {
    if (this.gender === "male") {
      return "mr. " + this._name;
    } else {
      return "ms. " + this._name;
    }
  }
  get age() {
    return 2019 - this.birthYear;
  }

  set age(value) {
    this.birthYear = 2019 - value;
  }
}

const elizabeth = new Person("Elizabeth", 1990, "female");
console.log(elizabeth.getName());
elizabeth.gender = "male";
console.log(elizabeth.getName());
