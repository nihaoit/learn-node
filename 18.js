// 函数陈述语句!
function greet() {
  console.log('nihaoit');
}
greet();

function logGreeting(fn) {
  fn();
}

logGreeting(greet);

// 函数表达式
var greetMe = function() {
  console.log('hi,mayu!');
};
greetMe();
logGreeting(greetMe);

// 立即使用的函数表达式
// 这个函数可以是匿名的，也可以给个名字
logGreeting(function() {
  console.log('Hi,haoyes.com!');
});
