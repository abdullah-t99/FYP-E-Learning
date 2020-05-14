const mysql = require("mysql");

const databaseCredentials = {
  host: "localhost",
  user: "abdullah",
  port: "/Applications/MAMP/tmp/mysql/mysql.sock",
  password: "arsenal123",
  database: "MathsSquared",
};

const connection = mysql.createConnection(databaseCredentials);

module.exports = connection;
