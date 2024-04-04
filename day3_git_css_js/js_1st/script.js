// return a value from arrow function how many ways
// 1. return keyword
// 2. without return keyword
// 3. return an object
// 4. return an array
// 5. return an array of objects
// 6. return an array of functions
// 7. return an array of arrays
// 8. return a function
// 9. return a function with return statement
// 10. return a function without return statement
// 11. return a function with return statement and without return statement



// console.log("hello world from script.js");
// message will be undefined but did not throw any error because of hoisting
// console.log("message");
// var message = "variable message from var keyword";
// dynamic typed language
//loosely typed language

//not statically typed language
//not strictly typed language
// console.log(message);

// scope check var
// function greet() {
//   var message = "hello from greet function";
//   console.log("hello from greet function", message);
// }   
// greet();

// redeclaration allowed,reassignment, hoisting, block scope, function scope
// console.log(message);

// looping
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// let
// redeclaration not allowed, reassignment allowed, hoisting, block scope
// let message = "variable message from let keyword";
// console.log(message);

// const
// redeclaration not allowed, reassignment not allowed,
// const message = "variable message from const keyword";
// console.log(message,typeof(message));
// alert(message);

// data types
// let str = "12a"
// let p = parseInt(str);
// let n = Number(str);
// console.log(p,typeof(p),n,typeof(n), str);

// template literals
// let name1 = "john";
// let age = 30;
// let address = "USA";
// console.log(`name: ${name1}, age: ${age}, address: ${address}`);

// function declaration
// function greet(arument1, argument2) {
//   console.log(`hello from ${arument1} greet function ${argument2}`);
// };
// greet("afdsfs", "dfd");

// // function expression
// const greet1 = function () {
//   console.log("hello from greet1 function");
// };
// greet1();

// arrow function
// const greet2 = () => {
//   console.log("hello from greet2 function");
// };
// greet2();


// // function with return
// function add(a, b) {
//   return a + b;
// }

// booleam
// let flag = 0;
// if (flag) {
//   console.log("flag is true");
// } else {
//     console.log("flag is false");
// }

// conditional operator
// let flag = 3;
// switch (flag) {
//     case 0:
//         console.log("flag is 0");
//         break;
//     case 1:
//         console.log("flag is 1");
//         break;
//     default:
//         console.log("flag is not 0 or 1");
//         break;
//     }

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(0 == false); // true
// console.log(0 === false); // false

// object
// const obj = new Object();
// obj[1] = "hello";
// obj[2] = "hello2";
// console.log(obj);

const obj1 = {
    "1": "john",
    "age": 30,
    "address": "USA",
    "greet": function () {
    console.log("hello from greet function");
    }
};
const x= prompt("Enter the key");
console.log(obj1[x]);
