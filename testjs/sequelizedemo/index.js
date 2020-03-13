// const Author = require("./models").Author;

// let authorData = "";
// Author.findByPk(3)
//   .then(author => {
//     authorData = author.toJSON();
//     authorData.books = [];
//     return author.getBooks();
//   })
//   .then(books => {
//     for (let i = 0; i < books.length; i++) {
//       authorData.books.push(books[i].toJSON());
//     }
//     console.log(authorData);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// // const Book = require("./models").Book;

// // Book.create({
// //   title: "TTS",
// //   quantity: 3,
// //   price: 1000,
// //   AuthorId: 1
// // })
// //   .then(book => {
// //     console.log(book.toJSON());
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });

// const Author = require("./models").Author;
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;

// Author.AuthorOlderThan(45)
//   .then(authors => {
//     for (let i = 0; i < authors.length; i++) {
//       console.log(authors[i].dataValues);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });
// Author.findAll({
//   where: {
//     [Op.and]: {
//       name: {
//         [Op.or]: {
//           [Op.like]: "ilham",
//           [Op.like]: "edison"
//         }
//       },
//       age: {
//         [Op.gt]: 10
//       }
//     }
//   }
// });
// //   .then(authors => {
// //     console.log(authors[0].dataValues);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });

// Author.create({
//   name: "edison",
//   address: "kebayoran",
//   age: 24
// })
//   .then(author => {
//     console.log(author);
//   })
//   .catch(err => {
//     for (let i = 0; i < err.errors.length; i++) {
//       console.log(err.errors[i].message);
//     }
//   });

// // Author.update(
// //   {
// //     name: "danang",
// //     age: 3
// //   },
// //   {
// //     where: {
// //       id: 3
// //     }
// //   }
// // )
// //   .then(arr => {
// //     console.log(arr[0]);
// //   })
// //   .catch(err => {
// //     for (let i = 0; i < err.errors.length; i++) {
// //       console.log(err.errors[i].message);
// //     }
// //   });

// // Author.destroy({
// //   where: { id: 2 }
// // })
// //   .then(num => {
// //     console.log(num);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });


const Author = require('./models').Author;

// Author.create({
//   name: 'Brahmantya',
//   age: 20,
//   address: 'jalan kebayoran',
//   email: 'xxxBrahmanTyaxxx@gmail.com'
// })
//   .then(author => {
//     console.log('oke')
//   })
//   .catch(err => {
//     console.log(err)
//   })

Author.update({
  id: 32,
  name: "Ilham",
  email: "xxxWarlordxxx@gmail.com"
}, {
  where: {
    id: 32
  }
}).then(x => {
  console.log('update sukses')
})
  .catch(err => console.log(err))