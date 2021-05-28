const db = require('./db.js');
const Promise = require('bluebird');


const insertUser = (params, callback) => {
  let queryStr = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';

  new Promise((resolve, reject) => {
    db.query(queryStr, params, (err, results) => {
      err ? reject(err) : resolve(results)
    });
  });
};

const insertShipping = (params, callback) => {
  let queryStr = 'INSERT INTO shipping (address_line1, address_line2, city, state, zipcode) VALUES (?, ?, ?, ?, ?)';

  new Promise((resolve, reject) => {
    db.query(queryStr, params, (err, results) => {
      err ? reject(err) : resolve(results)
    });
  });
};

const insertBilling = (params, callback) => {
  let queryStr = 'INSERT INTO billing (creditcard, expiry_date, cvv, billing_zipcode) VALUES (?, ?, ?, ?)';

  new Promise((resolve, reject) => {
    db.query(queryStr, params, (err, results) => {
      err ? reject(err) : resolve(results)
    });
  });
};

module.exports = {
  insertUser,
  insertShipping,
  insertBilling
};