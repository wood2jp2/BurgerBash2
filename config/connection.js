var mysql = require('mysql');
var connection;

// requiring connection to sql DB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgersDB_db'
  });
};

connection.connect();

module.exports = connection;
