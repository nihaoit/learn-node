const greet = require('./greet');
// greet();
const greet2 = require('./greet2').greet;
greet2();

// 结论是什么？为了简便起见，总是使用module.exports就可以了!
