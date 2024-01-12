// import productRouter from "./products.api";
const productRouter = require("./products.api");

function route(app) {
  app.use("/api", productRouter);
}
module.exports = route;
