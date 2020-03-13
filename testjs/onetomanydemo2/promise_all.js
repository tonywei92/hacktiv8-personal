function test(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done", seconds);
      resolve(seconds);
    }, seconds * 1000);
  });
}

let promises = [test(1.2), test(0.8), test(1)];

// setInterval(() => {
//   console.log(promises);
//   console.log();
// }, 100);
Promise.all(promises)
  .then(value => {
    console.log("selesai semua", value);
  })
  .catch(err => {
    console.log(err);
  });
