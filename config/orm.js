var connection = require('./connection.js');

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + 'true');
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM burgers';

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO burgers(burger_name) VALUES (?)';
    console.log(cols);
    connection.query(queryString, vals, function(err, result) {
      console.log(vals);
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE burgers SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
