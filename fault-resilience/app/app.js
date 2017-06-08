/* jshint esversion: 6 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var debug = require('debug')('app:main');
var bodyParser = require('body-parser');
var config = require('config');

var app = express();

// get configurations
const FAULT_RATE = config.has('app.fault_rate') ?
                   config.get('app.fault_rate') : 10;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var getSeconds = () => Math.round(new Date().getTime()/1000);
var start_time = getSeconds();

setTimeout(() => process.exit(1), FAULT_RATE * 1000);

app.get('/', (req, res) => {
  res.render('index', {
    uptime: getSeconds() - start_time
  });
});

app.get('/api', (req, res, next) => {
  res.json({
    uptime: getSeconds() - start_time
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
