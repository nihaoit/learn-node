// 为什么要这样写呢？如果直接在app中写greet字符串，容易写错，而且你写错了js不会报错的，
// 因为就是一个字符串而已，但是如果这样写，vscode 会代码自动提示，如何写错了也会报错的
// 另外就是如果需要修改greet名称的话，也只需要修改一处就可以了

// 对象的KEY当然可以用大写的
module.exports = {
  events: {
    GREET: 'greet'
  }
};
