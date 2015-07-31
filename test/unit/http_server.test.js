#!/usr/bin/env node

var should = require('chai').should();
// var expect = require('chai').expect;
var http = require('http');
var path = require('path');
var runServer = require(path.join(process.cwd(), "lib/server"));
var saveUAS = require(path.join(process.cwd(), 'lib/saveUAS'));

describe('http server', function () {
  it('should accept a GET request', function (done) {
    runServer(1337, function() {
      setTimeout(function () {
        http.get("http://localhost:1337", function(res) {
          console.log("Got response code: " + res.statusCode);
          console.log("Got response message: " + res.statusMessage);
          console.log("res: ", res);
          res.should.exist;
          done();
        }).on('error', function(e) {
          console.log("Got error: " + e.message);
        });
      }, 1500);
    });
  });
});
