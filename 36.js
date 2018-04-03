const EventEmmiter = require('events');

const util = require('util');

function Greetr() {
  this.greeting = 'Hello world!';
}

// 这行代码的作用是 Greetr.prototpye = EventEmmiter.prototype
// prototpye本质就是一个对象，相当于构造函数EventEmmiter的protoype上面的所有属性和方法这个对象，赋值给了prototype，这样就相当于是Greetr这个构造函数，从EventEmmiter继承了方法
// 但是特别注意：这仅仅是继承了EventEmmiter的prototype对象上面的属性和方法，对于EventEmmiter本身的属性和方法还没有继承到
// 具有继承的方法37会讲到
util.inherits(Greetr, EventEmmiter);

// 给Greeter构造函数的原型对象添加greet方法，特别注意，方法如果加了参数data，这个参数是可以直接传递到监听器中的
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ':' + data);
  // 因为第13行继承了EventEmmiter的方法，所以下面可以写this.emit了
  this.emit('greet', data);
};

/* Greetr.on('greet', function() {
  console.log('Someone say hello world!');
}); */

const gtr = new Greetr();
// 注册事件
gtr.on('greet', function(data) {
  console.log('Someone say hello world! : ' + data);
});
gtr.greet('Tony');
