// 模块设计模式5 ，把所有要暴露的属性和方法都放到一个对象中，然后把这个对象赋值给exports

const greeting = 'SPDB';
function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
};
