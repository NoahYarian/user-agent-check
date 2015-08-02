#!/usr/bin/env node

var should = require('chai').should();
var http = require('http');
var path = require('path');
var server = require(path.join(process.cwd(), "lib/server"));

describe('server', function () {
  it("should have access to the user-agent string", function (done) {
    var uas;
    server(1337)
      .on('request', function(req, res) {
        uas = req.headers['user-agent'];
        uas.should.equal('test user-agent string');
        done();
      });
    http.get({
      'hostname': 'localhost',
      'port': 1337,
      'headers': {
        'user-agent': 'test user-agent string'
      }
    });
  });
});
