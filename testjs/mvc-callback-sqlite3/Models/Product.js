const db = require("../connection");
class Product {
  static findOne(params, cb) {
    db.get(
      `SELECT * FROM products WHERE ${params.where.key} ${params.where.operator} ?`,
      params.where.value,
      cb
    );
  }

  static update(params, cb) {
    db.run(
      `UPDATE products SET ${params.update.key} = ? WHERE ${params.where.key} = ?`,
      [params.update.value, params.where.value],
      cb
    );
  }

  static FindOneWithLogs(id, cb) {
    db.all(
      `SELECT * FROM products
            LEFT JOIN productLogs
                ON products.id = productLogs.productId
            WHERE products.id = ?
      `,
      [id],
      cb
    );
  }
}

module.exports = Product;
