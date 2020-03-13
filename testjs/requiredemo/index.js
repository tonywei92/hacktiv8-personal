function testPromise() {
  return new Promise((resolve, reject) => {
    resolve(10);
  });
}

testPromise()
  .then(val => {
    console.log(val);
    return testPromise();
  })
  .then(val2 => {
    console.log(val2);
    return val2 + 1;
  })
  .then(val3 => {
    console.log(val3);
  })
  .catch(err => {
    console.log(err);
  });

const app = {};

class Z {
  static get() {}
}
