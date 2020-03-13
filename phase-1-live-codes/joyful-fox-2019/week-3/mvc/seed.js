const db = require("./connection");

db.serialize(() => {
  db.run(
    `INSERT INTO instructors
        (name, maxSlots) VALUES (?,?), (?,?), (?,?), (?,?)
        `,
    ["Tony", 5, "Semmi", 10, "Isro", 8, "Nadia", 18],
    err => {
      if (err) console.log(err);
    }
  );
});
