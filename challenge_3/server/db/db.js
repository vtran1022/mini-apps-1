var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hijenn2010',
  database: 'checkout'
});

connection.connect();

module.exports = connection;