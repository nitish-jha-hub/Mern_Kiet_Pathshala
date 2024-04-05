// console.log("connected")
// let a = new String("Hello")
// let b = "Hello"

// console.log(a===b) //a===b return false because a data type is obj and  b = string
// let c = ["a","d","f","r"]
// console.log(typeof(c),Array.isArray(c))
// const obj = {
//     name:"John",
//     age:25
// }
// obj.name = "Doe"
// obj.lastname = "Smith"
// console.log(obj.lastname)

// we can change the value of object but we can't change the value of const variable
// we can write key in quotes but not necessary
let obj = {
    "name":"Niish",
    "age":25
}

let arr = [1,2,3,4,5]
// arr.push(6)
// arr[11] = 12
// console.log(arr.length)

// function for check is object or not
// let checkobj = (obj) => {
//     if(typeof(obj) === "object" && !Array.isArray(obj) && obj !== null && obj !== undefined){
//         return true
//     }
//     return false
// }
// console.log(checkobj(arr))


// 3. What is the difference between == and === in JavaScript?
// == is used for comparing two variables, but it ignores the datatype of variable. It is called as the equality operator.
// === is used for comparing two variables, but this operator also checks datatype and compares two values. It is called as strict equality operator. it also checks the reference of the object

// for in loop is used to iterate over the properties of an object
for(let key in obj){
    console.log(key,obj[key])
}

// for of loop is used to iterate over the values of an iterable object
for(let value of arr){
    console.log(value)
}





















