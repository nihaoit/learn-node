// 这种写法相当于为exports添加了一个greet方法
exports.greet = function() {
  console.log('Perfect!');
};

console.log(exports);
console.log(module.exports);
