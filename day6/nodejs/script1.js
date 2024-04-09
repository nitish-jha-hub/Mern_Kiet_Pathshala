// import module1.js
// const x= require('./module1.js');
// x.sum(9, 2);
// x.mul(9, 2);
// console.log(x.name);

// import using destructuring
const {sum, mul} = require('./module1.js');
sum(9, 2);
mul(9, 2);