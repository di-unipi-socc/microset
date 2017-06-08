/* jshint esversion: 6 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var debug = require('debug')('app:main');
var bodyParser = require('body-parser');
var config = require('config');
var gen = require('random-seed');

var app = express();

// get configurations
const RANDOM_SEED = config.has('producer.random_seed') ?
                    config.get('producer.random_seed') : '12lkjhpy98ad';
const N = config.has('producer.N') ?
          config.get('producer.N') : 5;
const MAX_VALUE = config.has('producer.max_value') ?
                  config.get('producer.max_value') : 1000000000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// initialization elements
var rand = gen.create(RANDOM_SEED),
    // values = Array.from({length: N}, () => rand(MAX_VALUE)),
    index = 0,
    start_time, end_time;

var timeDiff = (t1, t2) => (t1 - t2) / 1000;

var getInfo = () => {
  return {
    total: N,
    left: N - index,
    time: end_time ? timeDiff(end_time, start_time) : timeDiff(new Date().getTime(), start_time)
  };
};

app.get('/', (req, res, next) => {
  res.render('index', getInfo());
});

app.get('/api', (req, res, next) => {
  res.json(getInfo());
});

app.get('/consume', (req, res, next) => {
  if (index === 0) start_time = new Date().getTime();
  if (index == N && !end_time)  end_time = new Date().getTime();
  if (index < N) {
    res.json({value: rand(MAX_VALUE)});
    index++;
  } else {
    res.json({value: 'EOF', time: getInfo().time});
  }
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
