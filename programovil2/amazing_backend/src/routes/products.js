const Image = require("../models/Image");
const Product = require("../models/Product");
const User = require("../models/User");

const routerPds = require("express").Router();

// obtener todos los products
routerPds.get("/", async (req, res) => {
  const products = await Product.findAll({
    include: [Image, User],
  });
  res.json({ products });
});
// crear producto
routerPds.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ product });
});

module.exports = routerPds;
