/* jshint esversion: 6 */

const express = require('express');
const path = require('path');
const logger = require('morgan');
const debug = require('debug')('app:main');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var getSeconds = () => Math.round(new Date().getTime()/1000);
var getOddRandom = () => {
  var r = Math.round(Math.random()*1000000) + 1;
  if (r%2 !== 0) return r;
  else return r + 1;
};

var n_call = 1;
var start_time = getSeconds();
app.get('/', (req, res) => {
  res.json({
    response: n_call++,
    random: getOddRandom(),
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
