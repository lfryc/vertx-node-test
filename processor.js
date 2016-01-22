const EventBus = require('./third-party/tcp-vertx-eventbus.js');

const eb = new EventBus('localhost', 7000);

eb.onopen = function () {

  eb.registerHandler('channel', function (err, message) {
    if (err) {
      console.log(err);
      return;
    }
    message.reply({msg: 'ViaBus'});
  });

  console.log('Listening on event bus');
};

eb.onclose = function () {
  console.log('close');
};

eb.onerror = function (err) {
  console.log('error');
  console.log(err);
};