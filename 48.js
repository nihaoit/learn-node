const buffer = new ArrayBuffer(8);
// buffer返回一个对象，位长度是8
console.log(buffer);

// view是一个数组
const view = new Int32Array(buffer);

console.log(view);
