const model = require('./db/model.js');
const axios = require('axios');

const postUser = (req, res) => {
  // let params = [ req.body[full_name], req.body[email], req.body[password] ];
  console.log('controller');
  let params = [ req.query.full_name, req.query.email, req.query.password ];
  model.insertUser(params, (err, results) => {
    err ? res.status(418).send(err) : res.status(200).json(results);
  });
};

module.exports = {
  postUser
};