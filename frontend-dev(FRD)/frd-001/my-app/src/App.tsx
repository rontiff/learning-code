import React from 'react';
import logo from './logo.svg';
import './App.css';   //import css into react 
import { toNamespacedPath } from 'path/posix';

//呢個唔係html. 叫做JSX.
const element1 = <h1>見唔到Soon仔</h1>;   // 用花括先可以用到element1 { }
const element2 = <img src="/favicon.ico"></img>;     // add image
const element3 = <img src={"logo192.png"}></img>;  //add image alternative
const element4 = <img src={"logo512.png"}></img>;  //add image alternative









// Define types
interface User{
  firstName:string,
  lastName:string
}
const user: User = {
  firstName: 'Ron',
  lastName: 'Ha'
};
const displayName=(user: User)=>{
  return `${user.firstName} ${user.lastName}` 
}
const element = (
  <h1>
    Hello, {displayName(user)}!食左飯未?
  </h1>
);



const isLoggedIn = (value:boolean):boolean =>{
  return value 
}


// how to do for loop
const names =["alex", "ron", "gordon"]




// wrong example
// const element1 = <img src="{user.avatarUrl}"></img>; //wrong! ❌ 
// const element2 = <img src={"user.avatarUrl"}></img>; //wrong! ❌
// const element3 = div {let x=10;} //wrong! ❌

// app 就係react 既function
// functional component is a function returning JSX.Element 
function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* if else statement */}
        {/* ? 之後係true,   : 之後係false */}
        {/* inline conditional  */}
        The user is {isLoggedIn(true) ? 'already' : 'not'} logged in.

        {/* how to for loop names */}
        {
          names.map((name,index)=>(
            <div>{name} {index}</div>
          ))
        }


        {element1} 
        {element2}
        {element3}
        {element4}
        {element}


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          we are going to learn React today
          <br />
          good luck 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
