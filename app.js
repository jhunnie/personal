//DECLARING NPM PACKAGES
require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//FOR MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/boilerplate', { useMongoClient: true }); //commented out for heroku // "boilerplate" will be name of db
// mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});  // for heroku deployment

//FOR ROUTES
var index = require('./routes/index');

//USING NPM PACKAGES
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //commented out for heroku
// app.use(express.static(path.resolve(__dirname, 'client', 'build'))); //for heroku deployment

app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.currentUser = req.user;
  next();
});

//FOR ROUTES AGAIN
app.use('/', index);
// for heroku deployment
// app.get('*', function(req, res, next) {
// 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });
////PACKAGE.JSON ITEM: "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
////PACKAGE.JSON ITEM: PORT=3001 - for non-heroku build

// catch 404 and forward to error handler - commented out
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
