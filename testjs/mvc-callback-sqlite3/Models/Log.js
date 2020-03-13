const db = require("../connection");
class Log {
  static create(productId, qty, priceSatuan, customerName, cb) {
    db.run(
      `INSERT INTO productLogs (productId, qty, priceSatuan, customerName, createdAt)
            VALUES (?,?,?,?,?)`,
      [productId, qty, priceSatuan, customerName, new Date()],
      cb
    );
  }
}

module.exports = Log;
