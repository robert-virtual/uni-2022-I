const { Sequelize } = require("sequelize");

exports.db = new Sequelize("sigfar", "movil1301", "Movil$1301", {
  host: "www.desofiw.xyz",
  port: 4306,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});
