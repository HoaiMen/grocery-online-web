const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getDetailProducts);
module.exports = router;
