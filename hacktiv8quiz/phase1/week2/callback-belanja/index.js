const beli = require("./beli");

beli(
  1000,
  {
    item: "ikan",
    harga: 100
  },
  function(sisa) {
    beli(sisa, { item: "ayam", harga: 150 }, function(sisa2) {
      beli(sisa2, { item: "sepeda", harga: 200 }, function(sisa3) {
        beli(sisa3, { item: "kue", harga: 400 }, function(sisa4) {
          beli(sisa4, { item: "jam", harga: 100 }, function(sisa5) {
            beli(sisa5, { item: "kursi", harga: 8000 }, () => {});
          });
        });
      });
    });
  }
);
