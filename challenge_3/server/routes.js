const controller = require('./controller.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.post('/users', controller.postUser);

router.post('/shipping', controller.postShipping);

router.post('/billing', controller.postBilling);

module.exports = router;