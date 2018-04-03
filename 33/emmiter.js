function Emmiter() {
  this.events = {};
}

// 每个事件的监听器可以有多个
/* {
  events: {
    greet: [function() {}, function() {}];
  }
} */

Emmiter.prototype.on = function(type, listener) {
  // 这行代码很重要，意思是如果this.events[type]这个属性存在的话，那就不要做改变，
  // 如果不存在的话，就让这个属性的值为一个空数组
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emmiter.prototype.emmit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
};

module.exports = Emmiter;
