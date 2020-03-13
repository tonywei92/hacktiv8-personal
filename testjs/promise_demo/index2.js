function perkalian(a, b) {
  return new Promise((resolve, rejects) => {
    if (a === 0 || b == 0) {
      rejects("invalid");
    } else {
      resolve(a * b);
    }
  });
}

function pengurangan(a, b) {
  return new Promise((resolve, rejects) => {
    let hasil = a - b;
    if (hasil < 0) {
      rejects("invalid");
    } else {
      resolve(hasil);
    }
  });
}

perkalian(5, 1)
  .then(data => {
    console.log(data);
    return pengurangan(data, 7);
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
