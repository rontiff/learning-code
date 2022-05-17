import React, { Component } from 'react';
import './App.css';
import { getMovies } from './services/fakeMovieService';

class App extends Component {
  state = {
    movies:getMovies()
  } 

  handleDelete = movie=>{

  };
  
  render() { 
    return(
      <main className="container">
        <h1>Hello World</h1>
      </main>
    )
  }
}
 
export default App;
