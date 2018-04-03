const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // 加了utf8的和不加这个参数的区别是什么？加了utf8会变成具体的字符，这样可以使用replace
  // 如果不加的话就是二进制？然后返回的时候浏览器的编码默认是utf8的，所以能够正常地解析显示出来？
  let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  let html2 = fs.readFileSync(__dirname + '/index.html');
  console.log(html);
  console.log('---------------------------------');
  console.log(html2);
  html = html.replace('{Message}', '能力非凡!');
  res.end(html);
});

server.listen(8000, '127.0.0.1');
