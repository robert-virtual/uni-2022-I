const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Image = db.define("Image", {
  // por defecto todos los campos aceptan null
  url: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Image;
