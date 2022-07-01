// Require Sequelize
const Sequelize = require("sequelize");
// Require dotenv
require("dotenv").config();
// Create Connection to our Database
// Uses JAWSDB
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

// Export Sequelize
module.exports = sequelize;