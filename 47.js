const buf = new Buffer('Hello', 'utf8');

// 为什么显示的是16进制呢？
console.log(buf);
console.log(buf.toString());
// 为什么又转化成十进制呢？
console.log(buf.toJSON());
// 可以像使用数组那样使用buffer对象
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
