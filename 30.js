// 取用对象属性值的几种方法

const obj = {
  greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);
const name = 'greet';
console.log(obj[name]);

// 数组的元素可以是函数
// 你可以像用其他基本类型那样使用函数
const arr = [];

arr.push(function() {
  console.log('Hello 1');
});

arr.push(function() {
  console.log('Hello 2');
});

arr.push(function() {
  console.log('Hello 3');
});

// console.log(arr);
arr.forEach(function(item) {
  item();
});
