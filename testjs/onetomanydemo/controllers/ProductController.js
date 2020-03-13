const Product = require("../models").Product;
const Category = require("../models").Category;
const ProductColor = require("../models").ProductColor;

class ProductController {
  static index(req, res) {
    // Product.findAll({ include: Category })
    //   .then(products => {
    //     res.send(products);
    //   })
    //   .catch(err => {
    //     res.send(err.message);
    //   });
    Product.destroy({ where: { id: 1 } })
      .then(() => {
        res.send("berhasil hapus");
      })
      .catch(err => {
        res.send(err.message);
      });
  }

  static add(req, res) {
    res.send("tambah product");
  }
}

module.exports = ProductController;
