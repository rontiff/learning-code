import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import './App.css';
const title = <h1><b>Simple Website</b></h1>
const content=<div>This is a simple website made without React. Try to convert this into React enabled.</div>



function App() {
  const [bgColor, setBgcolor] = useState(0) // =bgcolor is a integer

  // useEffect( () => {

    
  // },[])
  setInterval( () => setBgcolor( bgColor + 1 ),400)

  const list=(
    <div>
      <ol>
        <li>First, you need to use <mark className={`App-header ${bgColor % 3 === 0 ? "bgBlack" : ( bgColor % 3 === 1 ? "bgWhite" : "bgPink") }`}>create-react-app</mark></li>
        <li>Second, you need to run <mark className={`App-header ${bgColor % 3 === 0 ? "bgBlack" : ( bgColor % 3 === 1 ? "bgWhite" : "bgPink") }`}>npm start</mark></li>
      </ol>
    </div>
  )

  return (
    
      <header className={`App-header ${bgColor % 3 === 0 ? "bgBlack" : ( bgColor % 3 === 1 ? "bgWhite" : "bgPink") }`}>
        <div className='title'>
          {title}
        </div>

        
        
        <div className='word'>
          {content}
          {list}
        </div>
        
        <button onClick={ () => setBgcolor( bgColor + 1 ) }>Cry ar</button>



        <div className='App-logo'>
            <img src={logo} alt="logo" />
        </div>
  
      </header>
    
    );
}

export default App;
