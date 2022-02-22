import React from 'react';
import logo from './logo.svg';
import './App.css';   //import css into react 

//呢個唔係html. 叫做JSX.
const element1 = <h1>見唔到Soon仔</h1>;   // need to use { }
const element2 = <img src="/favicon.ico"></img>;     // add image
const element3 = <img src={"logo192.png"}></img>;  //add image alternative

// wrong example
// const element1 = <img src="{user.avatarUrl}"></img>; //wrong! ❌ 
// const element2 = <img src={"user.avatarUrl"}></img>; //wrong! ❌



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {element1}
        {element2}
        {element3}


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
