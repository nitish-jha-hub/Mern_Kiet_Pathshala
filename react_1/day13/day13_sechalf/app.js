// import React from 'react'; //es6 specific
const React = require('react'); //eneric work with all js version
import ReactDOM from 'react-dom/client';
import Homepage from './src/pages/homepage';
import Navbar from './src/pages/navbar';
console.log('Hello World!');

const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent)
// const heading = React.createElement('h2',{},"hello from react")
// root.render(heading)

// const Heading = () =>{
//     return <h2>hello from react2</h2>
// }
// const App = () =>{
//     return <h2>hello from react comp App</h2>
// }


// const Card = ()=>{
//    return <div>
//         <h1>Title</h1>
//         <p>Description</p>
//     </div>
// }

// const arr = [
//     {
//         title: 'Laptop',
//         price: '50000'
//     },
//     {
//         title: 'mobile',
//         price: '40000'
//     },
//     {
//         title: 'mixer',
//         price: '30000'
//     }
// ]

// const Card = (x)=>{
//     console.log('props:', x);
//    return <div>
//         <h1>Title: {x.title}</h1>
//         <p>Price: {x.Price}</p>
//     </div>
// }

// const obj = {
//     title: 'laptop',
//     Price : '100'
// }

// const App = () =>{
//     return <div>
//         <h1>Hellofrom app1</h1>
//         {/* {Card(obj)} */}
//         <Card title='laptop' Price='1000000'/>
//         <Card title='laptop' Price='14545'/>
//         <Card title='laptop' Price='7878'/>
//         {
//             arr.map((item)=>{
//                 return <Card title={item.title} Price={item.price}/>
//             })
//         }
//     </div>
// }

const App = () =>{
    return <>
    <Navbar/>
    <Homepage/>
    </>
}

// console.log(Heading())
root.render(<App/>)
