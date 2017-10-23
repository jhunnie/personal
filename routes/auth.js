var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
// var passport = require('../config/ppConfig');
var bcrypt = require('bcrypt');
// Used for creating and sending tokens and protecting backend routes
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

var secret = 'Th#is is q*uite a ma$ssive cra@zy sec(ret';

// GET /auth/login route
router.get('/login', function(req, res, next) {
  res.send('GET /auth/login route hit');
});

// POST /auth/login route - returns a JWT
router.post('/login', function(req, res, next) {
  // check authentication
  var hashedPass = '';
  var passwordMatch = false;
  // look up user
  User.findOne({email: req.body.email}, function(err, user) {
    // get hashed password from document
    hashedPass = user.password;
    // compare passwords
    passwordMatch = bcrypt.compareSync(req.body.password, hashedPass);
    if (passwordMatch) {
      console.log("passwords match");
      // Make a token and return it as JSON
      var token = jwt.sign(user.toObject(), secret, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
      });
      req.flash('success', 'You are now logged in.')
      res.send({user: user, token: token});
    } else {
      console.log("passwords don't match");
      // Return an error
      res.status(401).json({
        error: true,
        message: 'Username or Password is Wrong'
      });
    }
  })
});

/* GET /auth/signup route */
router.get('/signup', function(req, res, next) {
  res.send('GET /auth/signup route hit');
});

/* POST /auth/signup route */
router.post('/signup', function(req, res, next) {
  // Find by email
  User.findOne({ email: req.body.email }, function(err, user) {
    if (user) {
      req.flash('error', 'Account already exists');
      res.redirect('/auth/signup');
    } else {
      // create and save a user
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, function(err, user) {
        if (err) {
          res.send(err.message)
        } else {
          // make a token & send it as JSON
          var token = jwt.sign(user.toObject(), secret, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
          });
          req.flash('success', 'Welcome to your new account! You are logged in.');
          res.send({user: user, token: token});
        }
      });
    }
  });
});

router.get('/logout', function(req, res, next) {
  // TODO: will need to invalidate the token here
  req.logout();
  req.flash('success', 'You have logged out. Goodbye!');
  res.redirect('/');
});

module.exports = router;
