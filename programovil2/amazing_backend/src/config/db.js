const { Sequelize } = require("sequelize");

const db = new Sequelize("amazingdb", "root", "", {
  host: "localhost",
  dialect: "mariadb" /* one of  | 'mariadb' | 'postgres' | 'mssql' */,
});

module.exports = db;
