const Author = require("./models").Author;

// // Author.create({
// //   name: "Audrick",
// //   address:
// //     "jln jalan9019023901290391239213021932103902139120390123021031209312039019302103210390193091029301290391203912093019302193021930912930129301290390129039039103921930129302190190321903910930129039012930129329",
// //   age: 151,
// //   gender: "helicopter"
// // })
// //   .then(author => {
// //     console.log(author.dataValues);
// //   })
// //   .catch(err => {
// //     Views.showError(err.errors);
// //   });

// // Author.findAll()
// //   .then(penulis => {
// //     for (let i = 0; i < penulis.length; i++) {
// //       console.log(penulis[i].setDataValue('full_name', `${penulis[i].firstName} ${penulis[i].lastName}`);
// //     }
// //   })
// //   .catch(err => console.log(err));

Author.getByGender("female")
  .then(penulis => {
    for (let i = 0; i < penulis.length; i++) {
      console.log(penulis[i].toJSON());
    }
  })
  .catch(err => console.log(err));
