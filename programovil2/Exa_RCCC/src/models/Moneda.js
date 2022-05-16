const { DataTypes } = require("sequelize");
const { db } = require("../config/db");

const Moneda = db.define(
  "Moneda",
  {
    nombre: DataTypes.STRING,
    simbolo: DataTypes.ENUM(["L", "$"]),
  },
  {
    tableName: "monedas",
    timestamps: false,
  }
);
module.exports = Moneda;
