const model = require('./db/model.js');
const axios = require('axios');

const postUser = (req, res) => {
  let params = [ req.body.full_name, req.body.email, req.body.password ];
  model.insertUser(params, (err, results) => {
    err ? res.status(418).send(err) : res.status(200).json(results);
  });
};

const postShipping = (req, res) => {
  let params = [ req.body.address_line1,
                 req.body.address_line2,
                 req.body.city,
                 req.body.state,
                 req.body.zipcode ];
  model.insertShipping(params, (err, results) => {
    err ? res.status(418).send(err) : res.status(200).json(results);
  });
};

const postBilling = (req, res) => {
  let params = [ req.body.credit_card,
                 req.body.expiry_date,
                 req.body.CVV,
                 req.body.billing_zipcode ];
  model.insertBilling(params, (err, results) => {
    err ? res.status(418).send(err) : res.status(200).json(results);
  });
};

module.exports = {
  postUser,
  postShipping,
  postBilling
};