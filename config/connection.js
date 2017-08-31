var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'burgersDB_db'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
