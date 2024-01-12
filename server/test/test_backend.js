const request = require("supertest");
const app = require("../src/app"); // Import your Express app instance
const productController = require("../src/controller/productController");

describe("GET PRODUCT DATA", () => {
  it("should return product data", (done) => {
    request(app)
      .get("/api/products") // Specify the route here
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }

        if (res.body) {
          console.log("Dữ liệu sản phẩm:", res.body);
          done(); // Use done() to signal the end of the test
        } else {
          console.error("Không có dữ liệu sản phẩm được trả về.");
          process.exit(1);
        }
      });
  });
});
