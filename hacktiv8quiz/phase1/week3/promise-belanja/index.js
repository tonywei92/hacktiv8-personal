const beli = require("./beli");

beli(5000, { harga: 6000, waktu: 1000, item: "ayam" }).then(
  data => {
    console.log("resolved");
  },
  rejected => {
    console.log("rejected");
  }
);
