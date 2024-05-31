console.log('app.js loaded');
// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);
// // root.innerText = "Hello  World";


// const h1 = document.createElement('h1');
// h1.textContent = 'Hello World';
// root.appendChild(h1);


// const listitem1 = document.createElement('li');
// listitem1.innerText = 'Item 1';
// root.appendChild(listitem1);

// const listitem2 = document.createElement('li');
// listitem2.innerText = 'Item 2';   
// root.appendChild(listitem2);
// console.log(React)

// const heading = React.createElement('h1', {}, 'Hello World from react');
// root.render(heading);

// const li1 = React.createElement('li', {key:'li1',
// className: 'li-c1', 
// id:'id1',
// style: {color: 'red', fontSize: '50px'}
// }, 'Item1 FROM react');
// const li2 = React.createElement('li', {key:'li2'}, 'ITEM2 FROM REACT');
// const list = React.createElement('ul', {}, [li1, li2]);
// root.render(list); //only renders the last element


// we can create 2 react app in single page like this
// const parent2 = document.getElementById('root');
// const root2 = ReactDOM.createRoot(parent);
// root2.render(list); //renders the whole list

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

// const h1 = React.createElement('h1', {}, 'Hello World from react');
const heading = <h1>Hello World from react babel</h1>;
const li1 = <li className='li1' style={{color: 'red'}}  >item 1 from react</li> 
const li2 = <li>item 2 from React</li> 
// const list = <ul>{li1}{li2}</ul>

const arr = [li1, li2]
const list = <ul>{arr.map((item) =>{return item})}</ul>

root.render(list);