import React from "react"; //React is the default export function, "react" is the module or library 
import ReactDOM from "react-dom"; 

//Babel will compile this element from React.createElement   ,so need to import react.

//the element in the component
const element =<h1>Hello World</h1>;  //need to import ReactDOM
console.log(element);

//render the element at real DOM
ReactDOM.render(element, document.getElementById('root'));