const controller = require('./controller.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.post('/users', controller.postUser);

module.exports = router;