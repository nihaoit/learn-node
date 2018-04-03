const Emmiter = require('./emmiter');

const emtr = new Emmiter();

// 注册事件
emtr.on('greet', function() {
  console.log('nihaoit 1');
});

emtr.on('greet', function() {
  console.log('nihaoit 2');
});

console.log('haoyes!');

// 手动触发事件
emtr.emmit('greet');
