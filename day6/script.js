// console.log("Hello from script.js");

// setTimeout(() => {
//     console.log("Hello from setTimeout");
//     }, 5000);

// console.log("Goodbye from script.js");

// // setInterval(() => {
// //     console.log("Hello from setInterval");
// //     document.write("Hello from setInterval<br>");
// // }
// // , 1000);

// console.log("Goodbye2 from script.js");

// // promise resolve case
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello from promise resolve");
//     }, 3000);
// });

// promise.then((value) => {
//     console.log(value);
// }
// );

// reject case
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Hello from promise2 reject");
//     }, 3000);
// });

// promise2.catch((value) => {
//     console.log(value);
// }
// );

// function createOrder(x,fn)
// {
//     console.log(x);
//     setTimeout(() => { fn('like123'), 1000 });
// }

// function makePayment(orderId)
// {
//     console.log(orderId);
// }
// setTimeout(() => {console.log("first timeout");}, 0);

setTimeout(function abc(){
    console.log("Hello from abc");
},0);

const prom = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => resolve("Hello from promise resolve"), 0);        
    } else {
        reject("Hello from promise reject");
    }
})
.then(function b(value) {console.log(value)})
.catch((value) => {
    console.log(value);
});
console.log(prom);


setTimeout(function xyz(){
    console.log("Hello from xyz");
},0);

