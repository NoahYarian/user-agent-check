var http = require('http');
var saveUAS = require('./saveUAS');
var stream = require('stream');

module.exports = function(port, cb){
  // console.log("start of server.js");
  var server = http.createServer(function (req, res) {
    // console.log("start of http.createServer");
    if (req.method === 'GET') {
      console.log("req.headers['user-agent']: ", req.headers['user-agent']);
      res.end(req.headers['user-agent']);
    }
  });
  server
    .listen(port, function() {
      console.log("holla back!");
      typeof cb === 'function' && cb();
    });
}
