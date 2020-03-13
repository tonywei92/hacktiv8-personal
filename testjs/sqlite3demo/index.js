const db = require("./connection");
db.serialize(() => {
  //   db.all(
  //     "SELECT * FROM authors WHERE id = ? AND name = ?",
  //     [1, "asd"],
  //     function(err, rows) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log(rows);
  //       }
  //     }
  //   );

  let authors = [
    { name: "danang", address: "tanah abang", age: 20 },
    { name: "afifah", address: "tanah kusir", age: 21 }
  ];

  let arr = [];
  for (let i = 0; i < authors.length; i++) {
    arr.push("(?,?,?)");
  }

  let arrValues = [];
  for (let i = 0; i < authors.length; i++) {
    let values = Object.values(authors[i]);
    for (let j = 0; j < values.length; j++) {
      arrValues.push(values[j]);
    }
  }

  console.log(arrValues);

  //   db.run(
  let query = `
      INSERT INTO authors
          (name, address, age)
          VALUES ${arr.join(",")}
      `;
  console.log(query);
  //     arrValues
  //   );

  db.run("INSERT INTO authors (name, address, age) VALUES (?,?,?)", [
    "danang",
    "tanah abang",
    20
  ]);
});

const PoliticianModel = {};

class PoliticianController {
  deletePolitician(id) {
    PoliticianModel.findAll(
      { where: { key: "id", value: id } },
      (err, rows) => {
        if (err) {
          console.log(err);
        } else {
          if (rows.length > 0) {
            PoliticianModel.delete(
              { where: { key: "id", value: id } },
              function(err) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("berhasil menghapus politician " + id);
                }
              }
            );
          } else {
            console.log("politician not found");
          }
        }
      }
    );
  }
}
