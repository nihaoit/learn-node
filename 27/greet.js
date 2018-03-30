// 这种写法把一个函数赋值给exports了，exports就不再是一个对象，而是一个函数了!

exports = function() {
  console.log('nihaoit');
};

console.log(exports);
console.log(module.exports);
