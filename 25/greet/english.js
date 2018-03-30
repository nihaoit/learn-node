// require函数会把json转化成javascript对象后再返回!

const greetings = require('./greetings.json');

function greet() {
  console.log(greetings.english);
  // console.log('Hello');
}

module.exports = greet;
