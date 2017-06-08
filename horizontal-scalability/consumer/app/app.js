/* jshint esversion: 6 */

var debug = require('debug')('app:main');
var request = require('request');
var config = require('config');

// get configurations
const PRODUCER_ENDPOINT = config.has('consumer.producer_endpoint') ?
                          config.get('consumer.producer_endpoint') :
                          'http://127.0.0.1:3000';

var getValue = (cb) => {
  request.get(`${PRODUCER_ENDPOINT}/consume`, (error, responce, body) => {
    if (error) return cb(error);
    cb (null, JSON.parse(body));
  });
};

console.log('Start to consume');

(function consume(){
  getValue((err, body) => {
    if (err) return console.log('error', err);
    debug(`get ${body.value} from ${PRODUCER_ENDPOINT}`);
    if (body.value != 'EOF'){
      for (var i=0; i<body.value; i++) Math.sin(i);
      consume();
    }else{
      console.log('End to consume in', body.time, 'seconds');
    }
  });
})();
