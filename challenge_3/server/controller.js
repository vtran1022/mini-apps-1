const model = require('./db/model.js');
const axios = require('axios');

const postUser = (req, res) => {
  model.insertUser((err, results) => {
    err ? res.status(418).send(err) : res.status(200).json(results);
  });
};

module.exports = {
  postUser
};