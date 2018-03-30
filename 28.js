// 使用node的原生模块，也是采用require

const util = require('util');
const name = 'Tony';
const greeting = util.format('Hello, %s', name);
util.log(greeting);
