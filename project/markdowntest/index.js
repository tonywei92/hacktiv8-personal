var people = {
  tono: 2,
  anton: 4,
  budi: 5
};

let count = 0;
for (let i = 7; i <= 31; i++) {
  let arr = [];
  if (i % 5 === 0) {
    console.log(`Tanggal ${i}: tempat fitness tutup`);
  } else {
    for (var person in people) {
      if (count % people[person] === 0) arr.push(person);
    }
  }

  console.log(`Tanggal ${i}: ${arr}`);
  count++;
}
