// 现在是直接使用node 的核心模块events，这个模块很重要，很多模块都是基于这个模块来建立的

const Emmiter = require('events');
const events = require('./config').events;
const emtr = new Emmiter();
emtr.on(events.GREET, function() {
  console.log('nihaoit 1');
});

emtr.on(events.GREET, function() {
  console.log('nihaoit 2');
});

console.log('nihaoit');
emtr.emit(events.GREET);
