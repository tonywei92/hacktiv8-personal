class ProductView {
  static viewSingle(product) {
    console.log(
      `[${product[0].productId}] ${product[0].name} - ${product[0].category} (${product[0].stock})`
    );
    for (let i = 0; i < product.length; i++) {
      console.log(
        `${new Date(
          Number.parseInt(product[i].createdAt)
        ).toDateString()} | Bought by ${product[i].customerName}, ${
          product[i].qty
        } pieces with total Rp. ${product[i].qty * product[i].priceSatuan}`
      );
    }
  }

  static viewMany() {}
}

module.exports = ProductView;
