// 特别注意：对象是没有prototype属性的，只有构造函数才有

const person = {
  firstname: '',
  lastname: '',
  fullname: function() {
    return this.firstname + ' ' + this.lastname;
  }
};

// 以person对象为原型，创建一个对象
const john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

const jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.fullname());
console.log(jane.fullname());
console.log(john.__proto__);
console.log(jane.__proto__);
// console.log(john.prototype);
console.log(john.__proto__ === jane.__proto__);
