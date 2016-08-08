'use strict';

let http = require('http');

function requestHandler(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('We are live, Dammy!');
};

this.server = http.createServer(requestHandler);

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = (callback) => {
  this.server.close(callback);
};
