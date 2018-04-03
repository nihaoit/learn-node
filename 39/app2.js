const util = require('util');

function Person() {
  this.firstname = 'luo';
  this.lastname = 'kai';
}

Person.prototype.greet = function() {
  return this.firstname + ':' + this.lastname;
};

function PoliceMan() {
  // 相当于Person函数被调用了，this对象添加了2个属性
  Person.call(this);
  this.officename = 'Good';
}

util.inherits(PoliceMan, Person);
const officer = new PoliceMan();
console.log(officer.greet());
