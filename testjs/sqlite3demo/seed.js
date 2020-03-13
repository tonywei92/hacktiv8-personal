const db = require("./connection");

db.serialize(() => {
  db.run(
    `
        INSERT INTO authors
            (name, alamat, age)
            VALUES (?,?,?)
    `,
    ["Ilham", "tanah abang", 31],
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
});
