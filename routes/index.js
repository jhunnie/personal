var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Nothing at the root route yet...');
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.send('You are logged in and this is your profile.');
});

module.exports = router;
