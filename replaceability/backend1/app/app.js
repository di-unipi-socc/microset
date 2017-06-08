/* jshint esversion: 6 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var debug = require('debug')('app:main');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var getSeconds = () => Math.round(new Date().getTime()/1000);
var getEvenRandom = () => {
  var r = Math.round(Math.random()*1000000) + 1;
  if (r%2 === 0) return r;
  else return r + 1;
};

var n_call = 1;
var start_time = getSeconds();
app.get('/', (req, res) => {
  res.json({
    responce: n_call++,
    random: getEvenRandom(),
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
app.use(function (err, req, res, next) {
    /* We log the error internaly */
    debug(err);

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500)
    .json(res.locals.error);
});

module.exports = app;
