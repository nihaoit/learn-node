const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const obj = {
    name: 'mayu',
    age: 27
  };
  // res.end(obj.toString());
  res.end(JSON.stringify(obj));
});

server.listen(8000, '127.0.0.1');
