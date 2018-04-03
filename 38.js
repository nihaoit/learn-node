const obj = {
  name: 'Luo kai',
  greet: function(num1, num2) {
    console.log(`Hello ${this.name} ${num1}+${num2}`);
  }
};

// bind是设置，还不会调用函数,相当于bind是返回了设置好this和一些参数的函数

// call和apply都是调用函数的一种方式，作用是可以修改函数体中this的指向的对象
// call和apply的区别是参数的引用，call是直接放参数，apply是把参数放在一个数组中

const greet = obj.greet.bind({ name: 'Ma Yu' }, 2);
obj.greet.call({ name: 'John Doe' }, 2, 3);
obj.greet.apply({ name: 'Jane Doe' }, [2, 5]);

greet(6);
