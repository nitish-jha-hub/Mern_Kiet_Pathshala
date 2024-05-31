import React from 'react';
import ReactDOM from 'react-dom';

console.log('Hello World!');

const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent)
const heading = React.createElement('h1',{},"hello from react")
root.render(heading)