const db = require("./connection");

db.serialize(() => {
  const authors = [
    {
      name: "Alfred",
      address: "kebayoran",
      age: 17
    },
    {
      name: "Arnold",
      address: "menteng",
      age: 11
    },
    {
      name: "Afifah",
      address: "tanah kusir",
      age: 30
    }
  ];

  for (let i = 0; i < authors.length; i++) {
    db.run(
      "INSERT INTO authors (name, address,age) VALUES (?,?,?)",
      [authors[i].name, authors[i].address, authors[i].age],
      err => {
        if (err) console.log(err);
      }
    );
  }
});
