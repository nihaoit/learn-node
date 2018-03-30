// 定义一个构造函数
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  /* this.fullname = function() {
    console.log(this.firstname + ' ' + this.lastname);
  }; */
}
// 添加一个属性
Person.prototype.url = 'https://spdbapi.haoyes.com';

// 添加一个方法
Person.prototype.fullname = function() {
  console.log(this.firstname + ' ' + this.lastname);
};

const p = new Person('ma', 'yu');
p.fullname();
console.log(p.url);
const l = new Person('luo', 'kai');
l.fullname();
