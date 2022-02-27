import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './components/list/todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todolist/>
      </header>
    </div>
  );
}

export default App;
