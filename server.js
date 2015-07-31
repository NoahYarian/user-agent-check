var http = require('http');

module.exports = function(port){
    http.createServer(function (req, res) {
    if (req.method === 'GET') {
      console.log(req.url)
  }
    }).listen(port);
}
