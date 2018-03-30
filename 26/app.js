const greet1 = require('./greet1');
greet1();

const greet2 = require('./greet2').greet;
greet2();

const greet3 = require('./greet3');
greet3.greet();
greet3.name = 'changed your name!';

// 特别注意greet3b和greet3是同一个对象，在一个文件中重复引入，第2次引入会使用缓存
const greet3b = require('./greet3');
greet3b.greet();

const Greet4 = require('./greet4');
const grtr = new Greet4();
grtr.greet();

const greet5 = require('./greet5').greet;
greet5();
