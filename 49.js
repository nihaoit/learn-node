function greet(cb) {
  console.log('Hello world!');
  const data = {
    name: 'John Doe'
  };
  // 主体函数中如有数据，可以传入回调函数中继续处理
  cb(data);
}

greet(function(data) {
  console.log('The callback function is invoked!');
  console.log(data);
});

greet(function(data) {
  console.log('Another callback function is invoked!');
  console.log(data.name);
});
