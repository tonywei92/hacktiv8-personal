const express = require("express");
const app = express();
const PORT = 3000;
const productRouter = require("./routers/productRouter");
app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/products", productRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
