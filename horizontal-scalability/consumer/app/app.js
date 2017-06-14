/* jshint esversion: 6 */

const debug = require('debug')('app:main');
const request = require('request');
const config = require('config');
const uuid = require('uuid/v4');

// get configurations
const PRODUCER_ENDPOINT = config.has('consumer.producer_endpoint') ?
                          config.get('consumer.producer_endpoint') :
                          'http://127.0.0.1:3000';

const id = uuid();
debug(`consumer id ${id}`);

var getValue = (cb) => {
  request.get(`${PRODUCER_ENDPOINT}/consume?id=${id}`, (error, response, body) => {
    if (error) return cb(error);
    cb (null, JSON.parse(body));
  });
};

console.log('Start to consume');

(function consume(){
  getValue((err, body) => {
    if (err) return console.log('error', err);
    debug(`get ${body.value} from ${PRODUCER_ENDPOINT}`);
    if (body.value != 'EOS'){
      for (var i=0; i<body.value; i++) Math.sin(i);
      consume();
    }else{
      console.log('End to consume in', body.info.time, 'seconds with', body.info.consumers, 'consumers');
    }
  });
})();
