// 模块设计模式3  暴露一个构造函数生成的对象
function Person() {
  this.name = 'luokai';
  this.greet = function() {
    console.log(this.name);
  };
}

module.exports = new Person();
