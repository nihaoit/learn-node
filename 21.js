var a = 1;
var b = a;
b = 11;
console.log(a);
console.log(b);

var obj1 = {
  name: 'luokai',
  age: 25
};

var obj2 = obj1;

obj2.age = 33;

console.log(obj1);
console.log(obj2);

var obj11 = {
  name: 'mayu',
  age: 18
};

var obj12 = Object.assign({}, obj11);
obj12.age = 22;
console.log(obj11);
console.log(obj12);
