const bcrypt = require("bcrypt");

// register
const password = "secret";
const saltRounds = 5;
let salt = bcrypt.genSaltSync(saltRounds);
const passwordYangSudahDiHash = bcrypt.hashSync(password, salt);
console.log(passwordYangSudahDiHash);
// login
// console.log(bcrypt.compareSync(password, passwordYangSudahDiHash));
