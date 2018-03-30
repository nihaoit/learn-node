// 模块设计模式4  暴露一个构造函数
function Person() {
  this.name = 'luokai';
  this.greet = function() {
    console.log(this.name);
  };
}

module.exports = Person;
