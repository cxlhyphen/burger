//Stores connection to mySQL database
//Dependencies
const mysql = require("mysql");

//create connection to db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "38ALOP223++",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
