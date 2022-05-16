const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Product = db.define("Product", {
  // por defecto todos los campos aceptan null
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
