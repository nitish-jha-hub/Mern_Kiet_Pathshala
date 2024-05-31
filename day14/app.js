import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/pages/common/navbar/navbar.js';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

// react element
const Heading = React.createElement('h1', {}, 'Hello World');

// react component
const Title = ()=>{
    return <h1>Hello React 3!</h1>;
}


// root.render(Heading);
// root.render(Title());
// root.render(<Title />);
// <Title/> = Title()

root.render(<Header/>);