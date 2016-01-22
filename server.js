const EventBus = require('./third-party/tcp-vertx-eventbus.js');

const eb = new EventBus('localhost', 7000);
const express = require('express');
const app = express();

eb.onopen = function () {

  app.get('/direct', function (req, res) {
    res.json({ msg: 'Direct' });
  });

  app.get('/viabus', function (req, res) {
    eb.send('channel', {}, function( err, message ) {
      res.json( message.body );
    });
  });

  app.listen(3000, function () {
    console.log('server listening on port 3000!');
  });
};

eb.onclose = function () {
  console.log('close');
};

eb.onerror = function (err) {
  console.log('error');
  console.log(err);
};