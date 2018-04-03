const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// 修改greet.txt为greet2.txt看看如果有错时，err返回什么？

fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  console.log(err);
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

console.log('Done!');
