class Calculator {
  static PI = 3.14159265359;

  value = 0;
  add(num) {
    this.value += num;
    return this;
  }

  substract(num) {
    this.value -= num;
    return this;
  }

  times(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    this.value /= num;
    return this;
  }

  pow(num) {
    this.value = Math.pow(this.value, num);
    return this;
  }

  root() {
    this.value = Math.sqrt(this.value);
    return this;
  }

  getValue() {
    return this.value;
  }

  clear() {
    this.value = 0;
    return this;
  }
}

const calc = new Calculator();
calc
  .add(5)
  .substract(2)
  .times(10)
  .divide(3);
console.log(calc.getValue());
