var connection = require('./connection.js');

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ';';
    connection.query(queryString, function(err, result) {
      cb(result);
    });
  },

  insertOne: function(name, devoured, cb) {
    var queryString = 'INSERT INTO burgers(burger_name, devoured) VALUES (??,??)';
    connection.query(queryString, [name, devoured], function(err, result) {
      cb(result);
    })
  },

  updateOne: function(name, cb) {
    var queryString = 'UPDATE burgers SET devoured = true WHERE burger_name = ??';
    connection.query(queryString, [name], function(err, result) {
      cb(result);
    });
  }
};

module.exports = orm;
