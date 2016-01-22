var Vertx = require("vertx-js/vertx");
var TcpEventBusBridge = require('vertx-tcp-eventbus-bridge-js/tcp_event_bus_bridge');

var vertx = Vertx.vertx({
  "workerPoolSize" : 4,
  "internalBlockingPoolSize": 4,
  "eventLoopPoolSize": 1
});


var inboundPermitted1 = {
  "addressRegex" : ".*"
};
var outboundPermitted1 = {
  "addressRegex" : ".*"
};

var options = {
  "inboundPermitteds" : [
    inboundPermitted1
  ],
  "outboundPermitteds" : [
    outboundPermitted1
  ]
};

var bridge = TcpEventBusBridge.create(vertx, options);

bridge.listen(7000, function() {
  console.log('event bus listening');
});

