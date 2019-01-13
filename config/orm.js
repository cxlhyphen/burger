//ORM connection
const connection = require("./connection.js");

let orm = {
  //display all entities in table
  selectAll: function(table, cb) {
    connection.query("SELECT * FROM " + table + ";", function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, condition, cb) {
    connection.query("UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";", function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, val, cb) {
    connection.query("INSERT INTO " + table + " (burger_name) VALUES ('"+ val +"');", val, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

//export ORM for server
module.exports = orm;
