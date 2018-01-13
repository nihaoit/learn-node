const crypto = require("crypto");
const content = require("./demo");
// console.log(crypto.getHashes());
// const content = "123";
const md5 = crypto.createHash("sha256");

md5.update(JSON.stringify(content));

const d = md5.digest("hex");

console.log(d);
console.log(d.length);
