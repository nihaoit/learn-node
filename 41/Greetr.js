const EventEmmiter = require('events');

/* class Greetr extends EventEmmiter {
  constructor() {
    super();
    this.greeting = 'Hello';
  }

  greet(data) {
    console.log(`${this.greeting} : ${data}`);
    this.emit('greet', data);
  }
} */

// 直接把这个类导出
//module.exports = Greetr;

// 也可以这样写：

module.exports = class Greetr extends EventEmmiter {
  constructor() {
    // 这行必须要写！要理解这行的本质是什么！
    super();
    this.greeting = 'Hello';
  }

  greet(data) {
    console.log(`${this.greeting} : ${data}`);
    this.emit('greet', data);
  }
};
