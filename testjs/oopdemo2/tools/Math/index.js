const kurang = require('./kurang').kurang;
let var1 = require('./kurang').var1
var1 += 100
const tambah = require('./tambah');

module.exports = {
    kurang: kurang,
    tambah: tambah,
    var1: var1
}