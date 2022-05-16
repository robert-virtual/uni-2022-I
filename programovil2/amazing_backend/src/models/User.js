const { hash, verify } = require("argon2");
const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Image = require("./Image");
const Product = require("./Product");

const User = db.define(
  "User",
  {
    // por defecto todos los campos aceptan null
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      toString() {
        return "";
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    imageUrl: DataTypes.STRING,
  },
  {
    hooks: {
      async beforeCreate(user) {
        user.password = await hash(user.password);
      },
    },
  }
);

Product.hasMany(Image);
Image.belongsTo(Product);
User.hasMany(Product);
User.prototype.verifyPassword = async function (plainPassswd) {
  return await verify(this.passsword, plainPassswd);
};
Product.belongsTo(User);

module.exports = User;
