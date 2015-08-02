#!/usr/bin/env node

var http = require('http');

module.exports = function(port) {
  return http.createServer().listen(port, 'localhost');
}
