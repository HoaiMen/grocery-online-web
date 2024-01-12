import express from "express";
const route = require("./route/index");
const connect = require("./configs/connectDB");
require("dotenv").config();
const app = express();
const post = process.env.PORT;
const cors = require("cors");
app.use(cors());
route(app);
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(post, () => {
  console.log(`Server is runnig on post: ${post}`);
});
