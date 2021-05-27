const db = require('./db.js');
const Promise = require('bluebird');


const insertUser = (params, callback) => {
  let queryStr = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';

  new Promise((resolve, reject) => {
    db.query(queryStr, params, (err, results) => {
      err ? reject(err) : resolve(results)
    });
}

module.exports = {
  insertUser
};