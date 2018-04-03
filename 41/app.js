const Greetr = require('./Greetr');

const gtr = new Greetr();

gtr.on('greet', function(data) {
  console.log(`someone say: ${data}`);
});
gtr.greet('Tony');
