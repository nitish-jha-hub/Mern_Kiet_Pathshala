// readFileSync() method is used to read the file and return the content of the file in a synchronous way.
// const fs = require('node:fs');

// const data = fs.readFileSync('myreadme.txt', 'utf-8');
// const data = fs.readFileSync('myreadme.txt', {encoding: 'utf-8'});
// console.log(data);
// const data = fs.readFileSync('myreadme.txt');
// console.log(data.toString());

// writeFileSync() method is used to write the file and return the content of the file in a synchronous way.
// fs.writeFileSync('myreadme.txt', 'Hello World1');
// fs.writeFileSync('myreadme.txt', 'Hello World', {encoding: 'utf-8'});
// fs.writeFileSync('myreadme.txt', 'Hello World', {flag: 'a'});
// fs.writeFileSync('myreadme.txt', 'Hello World', {encoding: 'utf-8', flag: 'a'});
// fs.writeFileSync('myreadme.txt', 'Hello World', {encoding: 'utf-8', flag: 'a+'});


// asyncronous way (promises)
// const fsPromises =  require('fs/promises');
// console.log('start');
// const pr = fsPromises.readFile('myreadme.txt', 'utf-8');
// pr.then((data) => {
//     console.log(data);
// });
// console.log('end');

// callback way
// const fs = require('fs');
// console.log('start');
// fs.readFile('myreadme.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('end');

