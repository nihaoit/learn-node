const fs = require('fs');

// highWaterMark:指定每次读取的chunk的长度
const readable = fs.createReadStream(__dirname + '/greet.txt', {
  encoding: 'utf8',
  highWaterMark: 1024
});

const writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// 如果文件够长，那么每读取到固定长度的chunk都会触发data事件
readable.on('data', function(chunk) {
  console.log(chunk.length);
  writeable.write(chunk);
});
