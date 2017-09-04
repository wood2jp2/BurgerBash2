var connection = require('./connection.js');

var orm = {
  selectAll: function(tableInput, cb) {
    // sql query to get all burgers
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    // sql query to add one burger
    var queryString = 'INSERT INTO burgers(burger_name) VALUES (?)';
    console.log(cols);
    connection.query(queryString, vals, function(err, result) {
      console.log(vals);
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, condition, cb) {
    // sql query to update the devoured state
    var queryString = 'UPDATE burgers SET devoured = true WHERE ' + condition;
    console.log(condition);
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
