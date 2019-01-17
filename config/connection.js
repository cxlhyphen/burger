//Stores connection to mySQL database
//Dependencies
const mysql = require("mysql");
require("dotenv").config();

//create connection to db
const connection = mysql.createConnection({
  port: 8889,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection = connection = mysql.createConnection(process.env.JAWSDB_URL);
} 

// else {
//   connection = mysql.createConnection({
//     port: 8889,
//     host: "localhost",
//     user: "root",
//     password: process.env.PASSWORD,
//     database: "burgers_db"
//   });
// }

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;