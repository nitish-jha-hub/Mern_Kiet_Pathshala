console.log('Hello from script.js');

const arr = [1, 2, 3, 4, 5];

// for each loop
// const ans = arr.forEach((element) => {
//     console.log(element);
// });
// console.log(ans); //error

// map
// const ans2 = arr.map(element => element * 2);
// console.log(ans2);
// const ans2 = arr.map((element) => {
//     return element * 2;
// });
// console.log(ans2);

// let floatArr = [1.1, 2.2, 3.3, 4.4, 5.5];
// const ans3 = floatArr.map((element) => {
//     // return Math.floor(element);
//     // return parseInt(element);
//     return Number(element);
// });
// console.log(ans3);

// filter
// const ans4 = arr.filter((element) => { return element % 2 === 0; });
// console.log(ans4);

const arr2 = [
    "Delhi , India", 
    "Mumbai , India",
    "Kolkata , India",
    "Chennai",
    "Bangalore",
    "india",
    "wuhan, china",
    "USA, USA",];

// const ans5 = arr2.map((element) => {
//     return element.toUpperCase();
// }).filter((element) => {
//     // return element.startsWith('I');
//     return element.includes('I');
// });
// console.log(ans5);

// const ans6 = arr2.map((element) => {
//     return element.toUpperCase();
// }).filter((element) => {
//     return element.includes('INDIA');
// });
// console.log(ans6);

// shorthand method
// const ans7 = arr2.filter(element =>element.toUpperCase().includes('INDIA'));
// console.log(ans7);

// reduce first argument is accumulator and second is element
const arr3 = [2, 2, 3, 7, 5];
const ans8 = arr3.reduce((acc, element) => {
    return acc + element;
}, 100);
console.log(ans8);
const ans9 = arr3.reduce((acc, element) => {
    console.log(acc, element);
    return acc + element;
}, 100);
console.log(ans9);

const obj = {...arr3};
console.log(obj);