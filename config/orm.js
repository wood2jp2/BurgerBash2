var connection = require('./connection.js');

var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      console.log('result');
    });
  },
  insertOne: function(name, devoured) {
    var queryString = 'INSERT INTO burgers(burger_name, devoured) VALUES (??,??)';
    connection.query(queryString, [name, devoured], function(err, result) {
      console.log(result);
    })
  },
  updateOne: function(name) {
    var queryString = 'UPDATE burgers SET devoured = true WHERE burger_name = ??';
    connection.query(queryString, [name], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
