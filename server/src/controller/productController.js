const Productt = require("../models/Product");
let getAllProducts = async (req, res) => {
  try {
    const products = await Productt.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "fail",
    });
  }
};

let getDetailProducts = async (req, res) => {
  try {
    const products = await Productt.findOne({ id: req.params.id });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllProducts,
  getDetailProducts,
};
