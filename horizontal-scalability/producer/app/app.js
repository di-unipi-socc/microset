/* jshint esversion: 6 */

const express = require('express');
const path = require('path');
const logger = require('morgan');
const debug = require('debug')('app:main');
const bodyParser = require('body-parser');
const config = require('config');
const gen = require('random-seed');

const app = express();

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
    consumers = new Set(),
    start_time, end_time;

var timeDiff = (t1, t2) => (t1 - t2) / 1000;

class Info_Obj {
  constructor() {
    this.total = N;
    this.left = N - index;
    this.time = end_time ? timeDiff(end_time, start_time) :
                           timeDiff(new Date().getTime(), start_time);
    this.consumers =  consumers.size;
  }
}

app.get('/', (req, res, next) => {
  res.render('index', new Info_Obj());
});

app.get('/api', (req, res, next) => {
  res.json(new Info_Obj());
});

class Consume_Obj{
  constructor(value){
    this.value = value;
    this.info = new Info_Obj();
  }
}

app.get('/consume', (req, res, next) => {
  var id = req.query.id || 'guest';
  consumers.add(id);
  debug(`Consumer id ${id}, #consumers ${consumers.size}`);
  if (index === 0) start_time = new Date().getTime();
  if (index == N && !end_time)  end_time = new Date().getTime();
  if (index < N) {
    index++;
    res.json(new Consume_Obj(rand(MAX_VALUE)));
  } else {
    res.json(new Consume_Obj('EOS'));
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
