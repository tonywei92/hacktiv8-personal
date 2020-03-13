const Product = require("./models").Product;
// Customer.create({ name: "tony", age: 27, password: "secret123123", quantity: 7 }).then(x =>
//   console.log(x)
// );

// const crypto = require("crypto");
// const name = "tony";
// const secret = "abcdefg";
// const passwordEncrypted = crypto
//   .createHmac("sha256", secret)
//   .update(req.body.password)
//   .digest("hex");
// Customer.findAll({
//   where: {
//     username: req.body.username,
//     password: passwordEncrypted
//   }
// }).then(customer => console.log(customer));

Product.update(
  { quantity: 3 },
  { where: { name: "devita" }, individualHooks: true }
).then("update success");
Product.create;
