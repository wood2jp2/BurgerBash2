var mysql = require('mysql');

// requiring connection to sql DB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgersDB_db'
  });
};

connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
