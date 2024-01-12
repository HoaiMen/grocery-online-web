const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://GroceryOnline:dH154XUQy88ebrah@groceryweb.nz30ywb.mongodb.net/"
    );
    console.log("Connect is successfully !");
  } catch (err) {
    console.log("Connect faill !!!!");
  }
};
module.exports = connect;
