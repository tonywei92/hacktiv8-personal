const db = require("./connection");

const movieArr = [
  {
    name: "Terminator 2",
    price: 20000,
    maxSeats: 10,
    code: "TMNT",
    status: "OPEN"
  },
  {
    name: "Pulp Fiction",
    price: 30000,
    maxSeats: 8,
    code: "PF",
    status: "OPEN"
  },
  {
    name: "Kill Bill",
    price: 30000,
    maxSeats: 5,
    code: "KBX",
    status: "OPEN"
  },
  {
    name: "Django",
    price: 50000,
    maxSeats: 4,
    code: "DJAN",
    status: "OPEN"
  },
  {
    name: "The Chronicle of Javascript Callback",
    price: 10000,
    maxSeats: 30,
    code: "INFINITEFOX",
    status: "OPEN"
  }
];

db.serialize(() => {
  const stmt = db.prepare(
    "INSERT INTO movies (name, price, maxSeats, code, status) VALUES (?,?,?,?,?)"
  );
  for (let i = 0; i < movieArr.length; i++) {
    stmt.run([
      movieArr[i].name,
      movieArr[i].price,
      movieArr[i].maxSeats,
      movieArr[i].code,
      movieArr[i].status
    ]);
  }
  stmt.finalize(() => {
    console.log("seeded");
  });
});
