const express = require("express");
const db = require("./config/db");
const users = require("./routes/users");
const products = require("./routes/products");

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await db.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    // console.error("Unable to connect to the database:", error);
    throw new Error(error);
  }
  //middleraes
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/products", products);

  app.listen(port, () => {
    console.log(`server running on port ${port}...`);
  });
})();
