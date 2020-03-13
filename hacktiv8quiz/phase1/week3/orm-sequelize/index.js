const program = require("commander");
const authorController = require("./controllers/authorController");
program.version("0.0.1");

program
  .command("author <command>")
  .description(
    `available commands:
      add [options]\tmenambah author baru
      read_one -i <id>\tmenampilkan data author
      read_all\tmenampilkan semua data author
      update [options]\tmengubah data author
      erase -i <id>\tmenghapus data author`
  )
  .option("-i, --id <value>", "kolom id")
  .option("-f, --firstname <value>", "kolom first_name")
  .option("-l, --lastname <value>", "kolom last_name")
  .option("-r, --religion <value>", "kolom religion")
  .option("-g, --gender <value>", "kolom gender")
  .option("-a, --age <value>", "kolom age")
  .action(function(command, options) {
    switch (command) {
      case "add":
        {
          const { firstname, lastname, religion, gender, age } = options;
          if (firstname && lastname && religion && gender && age) {
            authorController.getInstance().create({
              first_name: firstname,
              last_name: lastname,
              religion,
              gender,
              age
            });
          } else {
            console.log("parameter tidak lengkap");
          }
        }
        break;
      case "read_one":
        {
          const { id } = options;
          if (id) {
            authorController.getInstance().readOne(id);
          } else {
            console.log("parameter tidak lengkap");
          }
        }
        break;
      case "read_all":
        {
          authorController.getInstance().readAll();
        }
        break;
      case "update":
        {
          const { id, firstname, lastname, religion, gender, age } = options;
          if (id) {
            const data = {};
            if (firstname) {
              data.first_name = firstname;
            }
            if (lastname) {
              data.last_name = lastname;
            }
            if (religion) {
              data.religion = religion;
            }
            if (gender) {
              data.gender = gender;
            }
            if (age) {
              data.age = age;
            }
            authorController.getInstance().update(id, data);
          } else {
            console.log("parameter kurang: id");
          }
        }
        break;
      case "erase": {
        const { id } = options;
        if (id) {
          authorController.getInstance().erase(id);
        } else {
          console.log("parameter kurang: id");
        }
        break;
      }
      default: {
        console.log(`unknown command: ${command}`);
      }
    }
  });

program
  .command("article <command>")
  .description(
    `available commands:
    add [options]\tmenambah author baru`
  )
  .option("-f, --firstname <value>", "kolom first_name")
  .action(function(command, options) {
    console.log(command, options.firstname);
  });

program.parse(process.argv);

// authorController.create({
//   first_name: "Tony",
//   last_name: "Song",
//   religion: "Catholic",
//   gender: "Male",
//   age: 27
// });
