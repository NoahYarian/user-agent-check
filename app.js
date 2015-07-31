var port = process.env.PORT || 1337;
require('./server')(port);
console.log('Server running on http://localhost:1337');
