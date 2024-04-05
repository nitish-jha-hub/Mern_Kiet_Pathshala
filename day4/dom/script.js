// console.log("Connected to DOM page")
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(window.location)
// console.log(window.location.href)
// console.log(window.location.hostname)
// console.log(window.location.pathname)
// console.log(window)
// console.log(window.document)
// console.dir(window.document)
// console.log(window.history)

// getElementsByTagName array of elements
// document.getElementsByTagName('h2')[0].innerHTML = "Hello";
// let a = document.getElementsByTagName('h2');
// console.log(a)

//get element by id
// document.getElementById('heading').innerHTML = "injected by getElementbyid";

// // querry selector //alsocalled css selector
// document.querySelector('h2#idname').innerHTML = "injected by querySelector";

// const ne = document.createElement('h2');
// ne.innerHTML = "injected by createElement and appendChild";
// document.body.appendChild(ne);

// const ne1 = document.getElementsByTagName("div")[0];
// ne1.innerHTML = "injected by getElementsByTagName";
// document.body.appendChild(ne1);

// remove child
const a = document.getElementById('idname');
document.body.removeChild(a);










// Notes

// // querry selector all
// document.querySelectorAll('h2')[1].innerHTML = "injected by querySelectorAll";

// // getElementsByClassName
// let a = document.getElementsByClassName('class')
// console.log(a)

// // getElementsByTagName
// let b = document.getElementsByTagName('h2')
// console.log(b)

// // getElementsByName
// let c = document.getElementsByName('name')
// console.log(c)

// // getAttribute
// let d = document.getElementById('heading').getAttribute('class')
// console.log(d)

// // setAttribute
// document.getElementById('heading').setAttribute('style', 'color: red;')

// // removeAttribute
// document.getElementById('heading').removeAttribute('style')

// // addEventListener
// document.getElementById('btn').addEventListener('click', function () {
//     console.log('Button clicked')
// })

// // removeEventListener
// function alertFunc() {
//     alert('Button clicked')
// }

// document.getElementById('btn').addEventListener('click', alertFunc)
// document.getElementById('btn').removeEventListener('click', alertFunc)

// // innerHTML
// document.getElementById('btn').innerHTML = "click me"

// // innerText
// document.getElementById('btn').innerText = "click me"

// // textContent
// document.getElementById('btn').textContent = "click me"

// // style
// document.getElementById('btn').style.color = "red"
// document.getElementById('btn').style.backgroundColor = "blue"

// // getAttribute
// let e = document.getElementById('btn').getAttribute('style')
// console.log(e)

// // setAttribute
// document.getElementById('btn').setAttribute('style', 'color: red;')

// // removeAttribute
// document.getElementById('btn').removeAttribute('style')

// // classList
// document.getElementById('btn').classList.add('newClass')
// document.getElementById('btn').classList.remove