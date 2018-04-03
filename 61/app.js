const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const readable = fs.createReadStream(__dirname + '/index.html');
  // res就是一个writeable stream
  // 采用stream，要比等文件完全读完后再返回给客户端的性能要好很多！
  // 这里为什么不用写res.end了呢？感觉有点神奇，自己直接就返回了，需要看看readable.pipe()具体返回的是什么 ？
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1');
