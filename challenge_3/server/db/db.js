var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'vytran',
  password: 'hijenn2010',
  database: 'checkout'
});

connection.connect();

module.exports = connection;