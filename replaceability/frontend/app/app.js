/* jshint esversion: 6 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var debug = require('debug')('app:main');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('config');

var app = express();

// get configurations
const BACKEND_ENDPOINT = config.has('frontend.backend_endpoint') ?
                         config.get('frontend.backend_endpoint') :
                         'http://127.0.0.1:3000';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


var backendRequest = (cb) => {
  request.get(BACKEND_ENDPOINT, (error, responce, body) => {
    if (error) return cb(error);
    debug(`backend request on ${BACKEND_ENDPOINT} status ${responce.statusCode}`);
    body = JSON.parse(body);
    cb (null, body);
  });
};

app.get('/', (req, res, next) => {
  backendRequest((err, body) => {
    if (err) return next(new Error('Backend error'));
    res.render('index', body);
  });
});

app.get('/api', (req, res, next) => {
  backendRequest((err, body) => {
    if (err) return next(new Error('Backend error'));
    res.json(body);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  debug(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
