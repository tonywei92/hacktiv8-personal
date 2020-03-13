const Product = require("../Models/Product");
const Log = require("../Models/Log");
const ProductView = require("../Views/ProductView");
class ProductController {
  static buy(productId, qty, harga, customerName) {
    Product.findOne(
      {
        where: {
          key: "id",
          operator: "=",
          value: productId
        }
      },
      function(err, row) {
        if (err) {
          console.log(err);
        } else {
          if (row.stock - qty > 0) {
            if (harga >= row.minimalPrice) {
              Product.update(
                {
                  where: {
                    key: "id",
                    value: productId
                  },
                  update: {
                    key: "stock",
                    value: row.stock - qty
                  }
                },
                function(err) {
                  if (err) {
                    console.log(err);
                  } else {
                    Log.create(productId, qty, harga, customerName, function(
                      err
                    ) {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log("berhasil");
                      }
                    });
                  }
                }
              );
            } else {
              console.log("harganya kurang dari minimal price");
            }
          } else {
            console.log("stock tidak cukup");
          }
        }
      }
    );
  }

  static viewById(id) {
    Product.FindOneWithLogs(id, function(err, rows) {
      if (err) {
        console.log(err);
      } else {
        ProductView.viewSingle(rows);
      }
    });
  }

  static delete(id) {
    Product.delete(
      {
        where: {
          key: "id",
          value: id
        }
      },
      function(err) {
        if (err) {
          console.log(err);
        } else {
          ProductLog.delete(
            {
              where: {
                key: "productId",
                value: id
              }
            },
            function(err) {
              if (err) {
                console.log(err);
              } else {
                console.log("berhasil");
              }
            }
          );
        }
      }
    );
  }
}

module.exports = ProductController;
